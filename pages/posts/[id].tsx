/* eslint-disable react/jsx-key */
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useEffect } from 'react'
import { changeTitle } from '../../lib/ct'
import ScrollProgress from 'scrollprogress';
import Image from "next/future/image";


export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    content: string
    tags: Array<string>
    img: string
  }
}) {
  let img = postData.img
  if(!img){
    img = "/test.png"
  }
  useEffect(() => {
    changeTitle(postData.title)
    const progressElement : HTMLDivElement = document.querySelector('.progressBar');
    new ScrollProgress((x, y) => {
      progressElement.style.width = y * 100 + '%';
    });
});
let style = { 
  backgroundImage: `url("${img}")`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
 } 
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
      <div className="fixed top-0 bg-black dark:bg-white left-0 right-0 h-[1.5px] z-10 progressBar"></div>
      <div style={style}
      className="bgImg w-full m-0 p-0  h-56 bg-cover mt-10 bg-center rounded-xl"
      />
      <h1 className={`text-5xl font-extrabold m-5 mb-0 mt-10`}>{postData.title}</h1>
      <h1 className={`text-sm font-thin m-5 `}>{postData.date}</h1>
      <div className="m-5 mt-3  flex flex-row gap-2 flex-wrap">
          {postData.tags.map((tag) => ( 
            <div className="bg-indigo-400/20 hover:bg-indigo-300/60  dark:bg-indigo-800/20 dark:hover:bg-indigo-800/60 text-indigo-500  duration-300 w-fit h-min pl-1 pr-1 rounded-md">{`#${tag}`}</div>
            ))}
        </div>
        <div>
        </div>
          <div className='p-5 w-fit' dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
      </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params  }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData
    }
  }
}

