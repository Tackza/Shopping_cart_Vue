<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand">Tackza Restaurant</a>

      <div>
        <autocomplete
          ref="autocomplete"
          :search="search"
          placeholder="Search for Menu"
          aria-label="Search for Menu"
          @submit="showClick"
          :get-result-value="reciveResult"
        ></autocomplete>
      </div>
    </nav>
  </div>
</template>

<script>
import Autocomplete from "@trevoreyre/autocomplete-vue";
export default {
  data() {
    return {
      text: null,
    };
  },
  components: {
    Autocomplete,
  },

  computed: {
    itemsSearch() {
      return this.$store.getters["search/itemsSearch"];
    },
  },
  methods: {
    search(input) {
      if (input.length > 1) {
        this.$store.commit("search/toSearch", input);
        return this.itemsSearch;
      }
    },
    showClick(item) {
      this.$store.commit("cart/toCart", item);
      this.$refs.autocomplete.value = "";
    },
    reciveResult(result) {
      return result.Name;
    },
  },
};
</script>

<style scoped>
#app {
  max-width: auto;
  margin: 0 auto;
}
.bg-light {
  background-color: rgb(158, 106, 211) !important;
}
#nav a {
  font-weight: bold;
  color: #fafafa;
}
</style>