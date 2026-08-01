export default {
  async fetch(request, env) {
    const asset = await env.ASSETS.fetch(request);

    if (asset.status === 404) {
      const fallback = new Request(new URL('/index.html', request.url));
      return env.ASSETS.fetch(fallback);
    }

    return asset;
  }
};
