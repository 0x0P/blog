/* eslint-disable react/jsx-key */
import Link from "next/link";
import Image from "next/future/image";
import { NextPage } from "next";
type propsTypes = {
  img,title,id,date,about: string;
  tags: Array<string>;
};
function BlogPost(props): JSX.Element {
  let img = props.img;
  if (img === undefined) {
    img = "/";
  }
  return (
    <div>
      <div data-aos="fade-up" className={`cursor-pointer bg-white dark:bg-gray h-min rounded-xl w-full md:max-w-xs hover:drop-shadow-lg  ease-in-out duration-150`}>
        <div className="p-5 pb-0 flex flex-row gap-2 flex-wrap">
          {props.tags?.map((tag) => (
            <Link href={`/tags/${tag}`} passHref>
              <a>
                <div className="bg-indigo-400/20 hover:bg-indigo-300/60  dark:bg-indigo-800/20 dark:hover:bg-indigo-800/60 text-indigo-500  duration-300 w-fit h-min pl-1 pr-1 rounded-md">{`#${tag}`}</div>
              </a>
            </Link>
          ))}
        </div>
        <Link href={`/posts/${props.id}`} passHref>
          <a className="mt-3 w-min text-black dark:text-white hover:text-indigo-500  duration-300 ">
            <div className="p-5 pt-1 pb-3">
              <div className={`font-bold text-2xl break-words`}>{props.title}</div>
              <h1 className="font-thin text-sm w-fit">{props.date}</h1>
              <div className={`font-light`}>{props.about}</div>
            </div>
            <Image
              className="object-contain w-full rounded-b-xl"
              src={`${img}`}
              alt="" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
