const state = {
  items: [], 
};

const mutations = {
    toCart(state, item) {
        console.log(item);
    const dataItems = {
      id: item.SubItems[0].Id,
      name: item.Name,
      qty: 1,
      price: item.SubItems[0].Price,
      comment: null,
    };
    console.log(dataItems); //lodash find
    const checkSameItems = state.items.some((item) => {
      return item.id === dataItems.id;
    });

    if (checkSameItems) {
      state.items.map((item) => {
        if (item.id === dataItems.id) {
          item.qty += 1;
          return item;
        }
      });
    } else {
      state.items.push(dataItems);
    }
  },

  removeItem(state, item) {
    const result = state.items.filter((std) => std.name !== item.name);
    state.items = result;
  },
  clearItems(state) {
    state.items = [];
  },

  updateQty(state, { item, type }) {
    const checkItems = state.items.map((menu) => {
      if (menu.id === item.id) {
        if (type == "+") {
          menu.qty += 1;
        } else {
          menu.qty -= 1;
        }
      }
      return menu;
    });
    return checkItems;
  },

  updateComment(state, { item, text }) {
    state.items.map((menu) => {
      if (menu.id === item.id) {
        menu.comment = text;
      }
      return menu;
    });
  },
};

const getters = {
  showItemSelected(state) {
    return state.items;
  },
  calculateGrandTotal(state) {
    const result = state.items.reduce((a, b) => {
      return a + b.price * b.qty;
    }, 0);
    return result;
  },
  calculateAmountItems(state) {
    const result = state.items.reduce((a, b) => {
      return a + b.qty;
    }, 0);
    return result;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
