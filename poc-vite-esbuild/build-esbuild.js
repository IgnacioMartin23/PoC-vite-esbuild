import * as esbuild from 'esbuild';


let ctx = await esbuild.context({
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'dist-esbuild/bundle.js',
  sourcemap: true,
  loader: { '.css': 'css' },
  format: 'esm',
});


await ctx.watch();

// Servidor local de esbuild
let { host, port } = await ctx.serve({
  servedir: '.',
  fallback: 'index-esbuild.html',
});

console.log(` [esbuild] Servidor corriendo en http://localhost:${port}/index-esbuild.html`);