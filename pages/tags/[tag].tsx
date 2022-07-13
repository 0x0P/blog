/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import BlogPost from '../../components/post';
import { getSortedPostsData } from '../../lib/posts'
import { useRouter } from 'next/router'

export default function listTag({
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
}
) {
  const router = useRouter()
  const { tag } = router.query 
  const tagName : string = tag.toString()
  return (
    <section className={`w-full flex flex-col`}>
      <h1 className={`text-5xl font-extrabold m-5 mt-10`}>{`#${tag}`}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 justify-items-center m-5 dark:bg-gray2 gridapp">  
      {allPostsData.filter(data => data.tags?.includes(tagName)).map(({ about, id, date, title, tags, img }) => (
        <>
        <BlogPost img={img} tags={tags} title={title} id={id} date={date} about={about}/>
        </>
      ))}      
      </div>
      </section>
  );
};


export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData}, 
  }
}