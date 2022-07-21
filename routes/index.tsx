/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { asset, Head } from "$fresh/runtime.ts";
import Editor from "@/islands/Editor.tsx";

export default function () {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("/styles/main.css")} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Editor />
      </main>
    </>
  );
}
