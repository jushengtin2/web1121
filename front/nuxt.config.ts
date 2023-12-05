export default {
  build: {
    transpile: ["vue-clerk", "@clerk/clerk-js"]
  },
  runtimeConfig: {
    public: {
      clerkPublishableKey:
        "pk_test_a2V5LXN0YXJsaW5nLTk2LmNsZXJrLmFjY291bnRzLmRldiQ",
      baseURL: "http://localhost:3001"
    },
    clerkSecretKey: "sk_test_R3kbBa5dXDdEmJt9BrBEgeuQQbscufiT0ucfLOaip5"
  },
  modules: ['@nuxtjs/tailwindcss']
};
