---
title: '종단간 암호화 채팅앱 만들기 프로젝트 #3'
date: '2022-07-31'
about: "콘솔에서 만남을 추구하면 안되는걸까, 이제진짜보안적용"
tags: ['DEVLOG', 'WebSocket', '채팅앱 프로젝트', '종단간 암호화']
img: '/chat3.png'
---
[전에 만들었던 프로토타입을](https://0x0p.ml/posts/chat2) 기반으로 이제 거기다가 종단간 암호화를 넣어줄꺼다.  
먼저 코드짜기전에 간단한 구조부터  
# 구조
종단간 암호화를 하기위해선 보통 공개키 암호화(비대칭키)를 사용한다.  
나는 그중에서도 가장 보?편적인 RSA를 쓸 예정이다.  
나는 타스로 만들꺼니까 RSA암호화 모듈을 찾아봤다.  
예전에도 썼었던 [jsencrypt](https://github.com/travist/jsencrypt) 를 쓸려했다.  
하지만 문제가 있었다.  

![너무길면 오류가난다](https://user-images.githubusercontent.com/69731703/181937205-950bde9e-398b-4e4d-a426-c2caf56f6182.png)
![썅](https://user-images.githubusercontent.com/69731703/181937240-20b600c1-0765-4b74-a00a-7f10e0ccc9a5.png)

너무길면 오류가난다.  
나는 생각했다.  
그러다가 문뜩 떠오른게 있다.  
"AES와 같이 쓰면 어떨까?"
## 결론
그렇게 생각해낸게  
**AES로 텍스트를 랜덤한 암호키로 암호화 하고, 그 암호키를 RSA로 암호화시킨뒤 전송하여 다른 클라이언트쪽에서 해독하는 구조이다.**  
나는존나천재가분명하다.  
개소리고 저거 진짜 되나 싶어서 검색해보니까 비슷한방식 구글에 많더라.

# 개발시작
ㅇㅇ 일단 jsencrypt을 깔아준다.
```ts
// index.ts
import { JSEncrypt } from 'jsencrypt';
const crypt = new JSEncrypt();

crypt.getKey();
console.log(crypt.getPrivateKey());
console.log(crypt.getPublicKey());
```
![아이고](https://user-images.githubusercontent.com/69731703/181943949-453d7bac-06f6-42ea-824a-30c1e7e2c961.png)
콘솔에선 만남을 추구하지말란뜻인가봄ㅠ  
하지만 벌써 웹으로 만들긴 너무 귀찮기때문에 걍 웹에서 키 대충 생성해서 쓰겠다.

아귀찮아 이따가 씀 ㄱㄷ
