/* eslint-disable react/jsx-key */
import BlogPost from './components/post';
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next';

export default function log({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    about: string
  }[]
}) {

  return (
    <section className={`w-full flex flex-col`}>
      <h1 className={`text-5xl font-extrabold m-5 mt-10`}>글 리스트</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-items-center m-5 dark:bg-gray2 gridapp">        
      {allPostsData.map(({ about, id, date, title }) => (
        <>
        <BlogPost  title={title} id={id} date={date} about={about}/>
        <BlogPost title={title} id={id} date={date} about={about}/>
        <BlogPost title={title} id={id} date={date} about={about}/>
        <BlogPost title={title} id={id} date={date} about={about}/>
        <BlogPost  title={title} id={id} date={date} about={about}/>
        <BlogPost title={title} id={id} date={date} about={about}/>
        <BlogPost title={title} id={id} date={date} about={about}/>
        <BlogPost title={title} id={id} date={date} about={about}/>
        <BlogPost  title={title} id={id} date={date} about={about}/>
        <BlogPost title={title} id={id} date={date} about={about}/>
        <BlogPost title={title} id={id} date={date} about={about}/>
        <BlogPost title={title} id={id} date={date} about={about}/>

        </>
          ))}
      </div>
      </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}