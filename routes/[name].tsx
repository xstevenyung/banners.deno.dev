/** @jsx h */
import { h } from "preact";
import { renderToString } from "preact-render-to-string";
import { Handlers } from "$fresh/server.ts";
import Banner from "@/components/Banner.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");
    const description = searchParams.get("description");
    const emoji = searchParams.get("emoji");

    return new Response(
      renderToString(
        <Banner
          name={ctx.params.name}
          url={url}
          description={description}
          emoji={emoji}
        />,
      ),
      {
        headers: {
          "Content-Type": "image/svg+xml",
        },
      },
    );
  },
};
