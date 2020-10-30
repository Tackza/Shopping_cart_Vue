<template>
  <div>
    <button type="button" class="btn btn-warning" @click="clearItems">Clear</button>
    <div>
      <table id="productSizes" class="table">
        <thead>
          <tr class="d-flex">
            <th class="col-1">No</th>
            <th class="col-3">Qty</th>
            <th class="col-4">Product</th>
            <th class="col-2">Price</th>
            <th class="col-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="d-flex"
            v-for="(item, index) of showItemSelected"
            :key="index"
          >
            <td scope="row" class="col-1">
              {{ index + 1 }}
            </td>
            <td class="col-3">
              <div class="row">
                <div class="col-12">
                  {{ item.qty }}
                </div>

                <div class="col">
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="updateQty(item, '+')"
                  >
                    +
                  </button>

                  <button
                    type="button"
                    class="btn btn-success"
                    @click="updateQty(item, '-')"
                    :disabled="item.qty == 1"
                  >
                    -
                  </button>
                </div>
              </div>
            </td>
            <td class="col-4">
              <div>
                <div class="row">
                  {{ item.name }}
                </div>
                <div class="row">
                  <pre> : {{ item.comment }} </pre>
                </div>
                <div class="row">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Edit"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      @keyup.enter="updateComment($event, item)"
                    />
                  </div>
                </div>
              </div>
            </td>

            <td class="col-2">
              {{ item.price + item.price * 0.07 }}
            </td>
            <td class="col-2">
              <button
                type="button"
                class="btn btn-danger"
                @click="removeItem(item)"
              >
                Del
              </button>
            </td>
          </tr>
        </tbody>
        <div></div>
      </table>
    </div>
    <div class="row">
      <div class="col">Items : {{ calculateAmountItems }}</div>
      <div class="col">
        GrandTotal :
        {{ calculateGrandTotal + calculateGrandTotal * 0.07 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: null,
    };
  },
  computed: {
    showItemSelected() {
      return this.$store.getters["cart/showItemSelected"];
    },
    calculateGrandTotal() {
      return this.$store.getters["cart/calculateGrandTotal"];
    },
    calculateAmountItems() {
      return this.$store.getters["cart/calculateAmountItems"];
    },
  },
  methods: {
    removeItem(item) {
      this.$store.commit("cart/removeItem", item);
    },
    clearItems() {
      this.$store.commit("cart/clearItems");
    },
    updateQty(item, type) {
      this.$store.commit("cart/updateQty", { item, type });
    },
    updateComment(e, item) {
      this.$store.commit("cart/updateComment", { text: e.target.value, item });
    },
  },
};
</script>

<style>
</style>