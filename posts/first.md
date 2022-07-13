---
title: 'Hello, World!'
date: '2022-07-14'
about: "블로그 첫글"
tags: ['첫글', '개발', 'TEST']
img: '/helloworld.png'
---
대충 일주일정도 걸려서 만든 블로그  
Next.js로 대충 만들고 CMS는 딱히 없고   
마크다운 기반. 깃허브로 커밋해서 글올리는 방식.  
[Tailwind CSS](https://tailwindcss.com/) 처음써보는데 클래스 좆지랄 나는거 빼곤 좋음ㅎㅎ   
```TSX
<div className="p-5 pt-1 pb-3">
<div className={`font-bold text-2xl break-words`}>{props.title}</div>
<h1 className="font-thin text-sm w-fit">{props.date}</h1>
<div className={`font-light`}>{props.about}</div>
</div>
```
*마크다운* 적용해서 **이런것도 됨**.
쓸말이없노