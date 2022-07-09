import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import metadata from '../data/metadata'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className='font-extrabold text-5xl m-10'>{`Hello, World!`}</h1>
  </div>
  );
}

export default Home
