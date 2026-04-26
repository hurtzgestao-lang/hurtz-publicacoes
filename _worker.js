export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;

    // Raiz → index.html
    if (path === '/') {
      path = '/index.html';
    } else if (!path.includes('.')) {
      // Sem extensão → adiciona /index.html
      path = path.endsWith('/') ? path + 'index.html' : path + '/index.html';
    }

    // Remove barra inicial para buscar no bucket
    const assetPath = path.slice(1);

    // Tenta buscar o arquivo
    try {
      const response = await env.ASSETS.fetch(new Request(url.origin + '/' + assetPath));
      if (response.ok) return response;
    } catch (e) {}

    // 404
    return new Response('Página não encontrada', { status: 404 });
  },
};
