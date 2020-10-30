import Vue from "vue";
import Vuex from "vuex";
import cart from "./module/cart";
import menu from "./module/menu";
import search from './module/search'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    menu,
    cart,
    search
  },
});
