<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand">Navbar</a>

      <div id="app">
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
  max-width: 700px;
  margin: 0 auto;
}
</style>