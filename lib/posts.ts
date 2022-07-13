import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {unified} from 'unified'
import remark2rehype from "remark-rehype";
import markdown from "remark-parse";
import html from "rehype-stringify";
import rehypeHighlight from 'rehype-highlight'


const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...(matterResult.data as { date: string; title: string; about: string; category: string; tag: Array<string>, img: string })
    }
  })
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehypeHighlight)
  .use(html)
    .process(matterResult.content)
  const content = processedContent.toString()
  return {
    id,
    content,
    ...(matterResult.data as { date: string; title: string; about: string; category: string; tag: Array<string>, img: string })
  }
}