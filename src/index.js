export default {
  async fetch(request, env, ctx) {
    return new Response("d’Tjoekoerin berhasil online! 🔥", {
      headers: {
        "content-type": "text/plain; charset=UTF-8"
      }
    });
  }
};
