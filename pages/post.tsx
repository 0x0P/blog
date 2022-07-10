/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

const data = `---
title: '제목'
date: '날짜'
about: "설명"
category: '카테고리'
tag: ['태그1', '태그2']
---`

const Home: NextPage = () => {
  const [theme, setTheme] = useState("vs-dark");
  useEffect(() => {
    const mutationObserver = new MutationObserver(callback);
    mutationObserver.observe(document.body, { attributes: true });
    function callback() {
      setTheme(`vs-${document.body.getAttribute("theme")}`);
    }
  });
  return (
    <div className="flex w-screen justify-center items-center fixed top-0 bottom-0 left-0 right-0 h-screen">
      <div className="w-[95%] h-[80vh]">
      <Editor
        width="100%"
        height="100%"
        defaultLanguage="markdown"
        theme={theme}
        defaultValue={data}
      />
      </div>
    </div>
  );
};

export default Home;
