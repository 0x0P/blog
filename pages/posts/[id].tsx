import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useEffect } from 'react'
export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {

  useEffect(() => {
    document.querySelector(".navTitle2").innerHTML = postData.title
    const onScroll: EventListener = (event: Event) => { 
        if(window.scrollY > 100){
          document.querySelector(".navTitle").setAttribute("data-change", "true")
          document.querySelector(".navTitle2").setAttribute("data-change", "false")
        }else{
          document.querySelector(".navTitle").setAttribute("data-change", "false")
          document.querySelector(".navTitle2").setAttribute("data-change", "true")
      }
    };

    const win: Window = window; 
    win.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
});
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
      <h1 className={`text-5xl font-extrabold m-5 mt-10`}>{postData.title}</h1>
        <div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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

