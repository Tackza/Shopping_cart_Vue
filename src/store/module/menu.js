import { menuOriginal } from "../../../mockData";

const state = {
  menuOriginal,
  groupMenu: [],
  items: [],
};

const mutations = {
  filterByMenu(state, type) {
    let groupFiltered = null;
    if (type) {
      groupFiltered = state.menuOriginal.filter((item) => item.Type == type);
    } else {
      groupFiltered = state.menuOriginal.filter((item) => item.Type != null);
    }
    state.groupMenu = groupFiltered;
  },
  filterBySelected(state, group) {
    state.items = group.Items;
  },
  resetItems(state) {
    state.items = [];
  },
};

const getters = {
  showMainList(state) {
    return state.groupMenu;
  },
  showListSelected(state) {
    return state.items;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
