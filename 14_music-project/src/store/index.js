import { createStore } from 'vuex';

// with 'createStore' the state is globally accessible and every component
// vue will create an object called store
export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  getters: {
    // getAuthModalShow: (state) => state.authModalShow,
  },
});
