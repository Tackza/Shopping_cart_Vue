<template>
  <div>
    <div cclass="btn-group" role="group">
      <button type="button" class="btn btn-info" @click="showList(0)">
        ทั้งหมด
      </button>
      |
      <button type="button" class="btn btn-info" @click="showList('Food')">
        อาหาร
      </button>
      |
      <button type="button" class="btn btn-info" @click="showList('Drink')">
        เครื่องดื่ม
      </button>
      |
      <button type="button" class="btn btn-info" @click="showList('Dessert')">
        ทานเล่น
      </button>
      |
      <button type="button" class="btn btn-info" @click="showList('Other')">
        อื่นๆ
      </button>
    </div>
    <div class="row mt-2">
      <div class="col-6">
        <h4>รายการอาหาร</h4>
        <ul
          class="list-group"
          v-for="(item, index) of showMainList"
          :key="index"
        >
          <button
            class="list-group-item list-group-item-action"
            @click="showFoodSelect(item)"
          >
            <div class="row">
              <div class="col-1">{{ index + 1 }}.</div>
              <div class="col">{{ item["Name"] }}</div>
            </div>
          </button>
        </ul>
      </div>
      <div class="col">
        <h4>{{ headerMenu }}</h4>
        <ul
          class="list-group"
          v-for="(item, index) of showListSelected"
          :key="index"
        >
          <button
            class="list-group-item list-group-item-action"
            @click="toCart(item)"
          >
            <div class="row">
              <div class="col-1">{{ index + 1 }}.</div>
              <div class="col">{{ item["Name"] }}</div>

              <div class="col-4">{{ item["SubItems"][0]["Price"] }} Baht</div>
            </div>
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerMenu: null,
    };
  },
  computed: {
    showMainList() {
      return this.$store.getters["menu/showMainList"];
    },
    showListSelected() {
      return this.$store.getters["menu/showListSelected"];
    },
  },

  methods: {
    showList(type) {
      this.$store.commit("menu/filterByMenu", type);
      this.headerMenu = null;
      this.$store.commit("menu/resetItems");
    },
    showFoodSelect(item) {
      this.$store.commit("menu/filterBySelected", item);
      this.headerMenu = item.Name;
    },
    toCart(item) {
      this.$store.commit("cart/toCart", item);
    },
  },
};
</script>

<style scoped>
.btn-info {
  margin-right: 1%;
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}
</style>