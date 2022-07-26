---
title: '채팅앱 만들기 : 프로토타입 제작'
date: '2022-07-27'
about: "채팅앱 만들기"
tags: ['DEVLOG', '채팅앱 프로젝트', 'WebSocket']
img: '/chat2.png'
---

먼저 본격적으로 개발하기전에 대충 구상하는용도로 만들어볼꺼다.  
일단 프론트엔드를 만들기 귀찮기때문에 readline을 이용해 낭만적인 콘솔 채팅앱을 만들거다.  
먼저 readline을 테스트 하자. 
```ts
// index.ts
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on("line", (line : string) => {
    console.log(`input : ${line}`);
});
```
![잘 작동되는 사진](https://user-images.githubusercontent.com/69731703/181123735-7a3d2fb4-6b52-45f8-9e2d-2a3982baa8e5.png)

정말 잘 작동된다.  

이제 진짜 채팅기능을 넣어주자  

```ts
// server.ts
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message : string) => {
    console.log(message);
  });
});
```
message 이벤트가 오면 콘솔에 출력하는 간단한 코드를 대충 만들어주고  
```ts
// index.ts
import * as readline from 'readline';
 
const ws = new WebSocket("ws://localhost:8080")

// ...

rl.on("line", (line : string) => {
    ws.send(line)
});

```

아까 만들었던 콘솔에서 입력받은 내용을 ws로 전송하게 만든후, 전송하면?  

![이게뭐노](https://user-images.githubusercontent.com/69731703/181125612-1d603423-a208-4ff6-b587-ddc5f0cdc0cd.png)
?  

Text messages and close reasons are no longer decoded to strings. They are
passed as Buffers to the listeners of their respective events. The listeners
of the 'message' event now take a boolean argument specifying whether or not
the message is binary (e173423).

Existing code can be migrated by decoding the buffer explicitly.


[8.0.0 문자열로 디코딩 하지 않는다고 한다](https://github.com/websockets/ws/releases/tag/8.0.0)

```ts
// server.ts
    ws.on("message", function message(data, isBinary) {
      const message = isBinary ? data : data.toString();
      console.log(message);
    });
```
이렇게 바꿔주면 잘 작동한다.

![잘작동함 ㅇㅇ](https://user-images.githubusercontent.com/69731703/181126680-2ebea148-1904-4dad-a13c-859b32b0b8ae.png)

이제 채팅을 해야하기때문에 다시 클라이언트로 데이터를 되돌려줘야한다.
```ts
// server.ts
      // -- console.log(message);
      wss.clients.forEach(client => {
        client.send(message)
      })
```

```ts
// index.ts
ws.on("message", (data : string, isBinary) => {
    const message = isBinary ? data : data.toString();
    console.log(message)
});
```

잘 작동은 하지만 누가 누군지 구별을 못하게 되었다. 자동으로 클라이언트에서 랜덤으로 닉네임을 정하게 하였다.

```ts
// index.ts
const nick = (Math.random() + 1).toString(36).substring(7);
console.log(`Nickname: ${nick}`);
// ...
rl.on("line", (line : string) => {
    ws.send(`${nick} : ${line}`)
});
```
![콘솔에서 만남을 추구하면 안 되는걸까](https://user-images.githubusercontent.com/69731703/181128241-713bef34-33ed-4551-959c-49a5eb0ca47a.png)

# 끝!
