/** @jsx h */
import { h } from "preact";
import { renderToString } from "preact-render-to-string";
import { Handlers } from "$fresh/server.ts";
import Banner from "@/components/Banner.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const url = new URL(req.url).searchParams.get("url");

    return new Response(
      renderToString(
        <Banner name={ctx.params.name} url={url} />,
      ),
      {
        headers: {
          "Content-Type": "image/svg+xml",
        },
      },
    );
  },
};
