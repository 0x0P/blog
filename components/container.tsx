import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";
import Nav from "../pages/nav";
import metadata from "../data/metadata";
import Link from "next/link";
import Logo from "../assets/logo.svg"
import { useRouter } from 'next/router'
import NextNProgress from "nextjs-progressbar";


const title = metadata.name
export default function Container(props : PropsWithChildren) {
  const router = useRouter()
  function openMenu() {
        document.querySelector(".navDiv").classList.toggle("open")
        document.querySelector(".navDiv").classList.toggle("items-start")
        document.querySelector(".navDiv").classList.toggle("items-center")
        document.querySelector(".navDiv").classList.toggle("p-10")
        document.querySelector(".navLinks").classList.toggle("hidden")
        document.querySelector(".navLinks").classList.toggle("flex")
        document.querySelector(".backClick").classList.toggle("backdrop-blur-sm")
        document.querySelector(".backClick").classList.toggle("backdrop-blur-md")
        document.querySelector(".backClick").classList.toggle("h-10")
        document.querySelector(".backClick").classList.toggle("h-screen")
}
useEffect(() => {
  router.events.on('routeChangeComplete', ()=> { 
    if(document.querySelector(".navDiv").classList.contains("open")) {
      openMenu()
    }
  })
})

  return (
    <div className={`w-fullm-0 flex flex-col items-center p-3`}>
      <Head>
        <title >{title}</title>
      </Head>
      <NextNProgress
        color="var(--color)"
        startPosition={0}
        stopDelayMs={200}
        height={1}
        showOnShallow={true}
        options={{ showSpinner: false,
      }}
      />
      <header  className={`navDiv w-full flex flex-row duration-300 justify-between h-10 top-0 mt-0 items-center fixed z-10 	`}>
        <div className={`flex flex-row`}>
        <Link href="/">
          <a>
          <Logo className="ml-2 navFix stroke-black dark:stroke-white" width={25}  />
          </a>
        </Link>
        <span data-change="false" className={`navFix font-extrabold italic fixed ml-10 navTitle`}>{title}</span>
        <span data-change="true"  className={`navFix font-extrabold italic fixed ml-10 navTitle2`} />
        </div>
        <Nav />
        <div onClick={() => openMenu()} className="navFix z-10 space-y-[6px] mr-5 cursor-pointer">
          <div className="w-6 h-0.5 bg-black dark:bg-white"></div>
          <div className="w-6 h-0.5 bg-black dark:bg-white"></div>
          <div className="w-6 h-0.5 bg-black dark:bg-white"></div>
        </div>
        <div onClick={() => openMenu()} className="fixed duration-300  backClick z-[-1] top-0 left-0 bottom-0 right-0 w-screen h-10 backdrop-blur-sm bg-white/50 dark:bg-black/30 "></div>
      </header>
      <main className={`w-full`}>{props.children}</main>
    </div>
  );
};

export { title }
