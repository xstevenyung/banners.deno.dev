/** @jsx h */
import { h } from "preact";
import { renderToString } from "preact-render-to-string";
import { Handlers } from "$fresh/server.ts";
import Banner from "@/components/Banner.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    return new Response(
      renderToString(
        <Banner name={ctx.params.name} />,
      ),
      {
        headers: {
          "Content-Type": "image/svg+xml",
        },
      },
    );
  },
};
