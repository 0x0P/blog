/* eslint-disable react/jsx-key */
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useEffect } from 'react'
import { changeTitle } from '../../lib/ct'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as theme from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    content: string
    tag: Array<string>
  }
}) {

  useEffect(() => {
    changeTitle(postData.title)
});

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter 
      className="rounded-md w-fit bg-slate-800 dark:bg-gray"
        style={theme.vscDarkPlus}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        
      <h1 className={`text-5xl font-extrabold m-5 mb-0 mt-10`}>{postData.title}</h1>
      <div className="m-5 mt-3  flex flex-row gap-2 flex-wrap">
          {postData.tag.map((tag) => ( 
            <div className="bg-indigo-400/20 hover:bg-indigo-300/60  dark:bg-indigo-800/20 dark:hover:bg-indigo-800/60 text-indigo-500  duration-300 w-fit h-min pl-1 pr-1 rounded-md">{`#${tag}`}</div>
            ))}
        </div>
        <div>
        </div>
        <ReactMarkdown 
        rehypePlugins={[rehypeRaw]}
        components={CodeBlock}
        className='p-5 w-fit'>{postData.content}</ReactMarkdown>
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

