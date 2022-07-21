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
      </Head>

      <div class="bg-black min-h-screen text-white flex flex-col justify-between">
        <header>
        </header>

        <main class="flex justify-center items-center max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <Editor />
        </main>

        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
        <footer>
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-400 font-light">
            <p class="">
              Made by{" "}
              <a
                href="https://xstevenyung.com"
                target="_blank"
              >
                @xstevenyung
              </a>.
            </p>

            <p>
              Powered by{"  "}
              <a href="https://deno.com/deploy" target="_blank">Deno Deploy</a>
              {" "}
              🦕 + <a href="https://fresh.deno.dev" target="_blank">Fresh</a> 🍋
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
