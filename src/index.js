export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    const assetPath = pathname.replace(/^\//, '');
    const asset = await env.ASSETS.fetch(new Request(new URL(assetPath, request.url)));

    if (asset.ok) {
      return asset;
    }

    return new Response('Not Found', { status: 404, headers: { 'content-type': 'text/plain' } });
  }
};
