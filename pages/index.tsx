import type { GetStaticProps, NextPage } from 'next'
import BlogPost from '../components/post';
import { getSortedPostsData } from '../lib/posts';

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    about: string
    tags: Array<string>
    img: string
  }[]
}) {  
  const listMap = allPostsData.slice(0, 5)

  return (
    <div>
    <div className='w-screen h-[50vh] flex-col flex justify-center items-center'>
    <h1 className={`text-5xl font-extrabold`}>엄청난 블로그</h1>
    <h1 className={`text-xl font-thin mt-5`}>응애 나 애기 일기장</h1>
    <div className="p-5 pb-0 flex flex-row gap-2 flex-wrap">
    <div className="bg-indigo-400/20 hover:bg-indigo-300/60  dark:bg-indigo-800/20 dark:hover:bg-indigo-800/60 text-indigo-500  duration-300 w-fit h-min pl-1 pr-1 rounded-md">{`#응애`}</div>
    <div className="bg-indigo-400/20 hover:bg-indigo-300/60  dark:bg-indigo-800/20 dark:hover:bg-indigo-800/60 text-indigo-500  duration-300 w-fit h-min pl-1 pr-1 rounded-md">{`#블로그`}</div>
    <div className="bg-indigo-400/20 hover:bg-indigo-300/60  dark:bg-indigo-800/20 dark:hover:bg-indigo-800/60 text-indigo-500  duration-300 w-fit h-min pl-1 pr-1 rounded-md">{`#헉`}</div>
    </div>
    </div>
    <div>
      <h1 className={`text-5xl font-extrabold m-5 mt-10`}>최근 글</h1>
      <section className={`w-full flex flex-col`}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 justify-items-center m-5 dark:bg-gray2 gridapp">        
      {listMap.map(({ about, id, date, title, tags, img }) => (
        <>
        <BlogPost img={img} tags={tags} title={title} id={id} date={date} about={about}/>
        </>
          ))}
      </div>
      </section>
  </div>
  </div>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
