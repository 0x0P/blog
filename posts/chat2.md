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
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line : string) => {
    console.log(` input : ${line}`);
});
```
