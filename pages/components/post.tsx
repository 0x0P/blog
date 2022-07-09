import Link from "next/link";
import Image from "next/future/image";
const BlogPost = (props : any) => {
  return (
    <div>
      <Link href={`/posts/${props.id}`} passHref> 
      <div data-aos="fade-up" className={`cursor-pointer bg-white dark:bg-gray h-min rounded-xl w-full md:max-w-xs hover:drop-shadow-lg  ease-in-out duration-150`}>
          <a className="mt-5 w-min m-0">
            <div className="p-5 pb-3">
            <div className={`font-bold text-2xl break-words`}>{props.title}</div>
            <div className={`font-light`}>{props.about}</div>
            </div>
            <Image
            className="object-contain rounded-b-xl"
              src={`/test.png`}
              alt="Picture of the author"
            />
          </a>
          </div>
        </Link>
      </div>
  );
};

export default BlogPost;
