import { menuOriginal } from "../../../mockData";

const menuAlls = menuOriginal.reduce((acc, curr) => {
  acc = [...acc, ...curr.Items];
  return acc;
}, []);

const state = {
  menuAlls,
  itemsToSearch: [],
};

const mutations = {
  toSearch(state, text) {
    const init = state.menuAlls.filter((item) => {
      const findItems = item.Name.includes(text);
      if (findItems) {
        return item;
      }
    });
    state.itemsToSearch = init;
  },
};

const getters = {
  itemsSearch(state) {
    const result = state.itemsToSearch.map((item) => {
      return item;
    });
    return result;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
