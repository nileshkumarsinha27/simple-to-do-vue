<template>
  <label for="checkName" @click="handleClick">
    <img :src="tickIcn" v-if="checkSelected()" alt="tick" />
    <input :type="type" name="checkName" v-else />
  </label>
</template>
<script>
import CONSTANTS from "@/constants.js";
import tickIcon from "@/assets/tick.svg";
import { mapGetters } from "vuex";
import Store from "@/store.js";
import ACTIONS from "@/actions.js";
export default {
  name: "CheckBoxComponent",
  data: () => ({
    type: CONSTANTS.CHECK_BOX,
    tickIcn: tickIcon
  }),
  methods: {
    handleClick: function() {
      Store.dispatch(ACTIONS.MODIFY_SELECTED, this.id);
    },
    checkSelected: function() {
      return this.selectedIds.filter(elem => elem === this.id).length;
    }
  },
  computed: mapGetters({
    selectedIds: "selectedIds"
  }),
  props: ["id"]
};
</script>
<style lang="scss" scoped>
label {
  padding: 0 10px 0 0;
  position: relative;
  input {
    appearance: none;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 1px solid #969ba0;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
  }
  img {
    display: inline-block;
    width: 40px;
    height: 40px;
    left: 5px;
    top: 2px;
    cursor: pointer;
  }
}
</style>