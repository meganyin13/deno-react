// @ts-ignore deno import
import { Application, send, Context } from 'https://deno.land/x/oak/mod.ts'; // eslint-disable-line

const port = 3000;
const app = new Application();

app.use(async (ctx: Context) => {
  await send(ctx, ctx.request.url.pathname, {
    root: './public',
    index: 'index.html',
  });
});

// eslint-disable-next-line
console.log(`app listening on port ${port}`);
// @ts-ignore deno supports top-level await!
await app.listen({ port });
