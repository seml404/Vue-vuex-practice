export default {
  state: {
    posts: [],
  },
  actions: {
    async fetchPosts(ctx) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const posts = res.json();
      ctx.commit("updatePosts", posts);
    },
  },
  mutations: {
    updatePosts(state, data) {
      state.posts = data;
    },
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
  },
};
