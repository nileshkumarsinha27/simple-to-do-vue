<template>
  <div class="delete-container">
    <div class="arrow-up" />
    <img :src="icnDelete" alt="delete" />
    <span class="popup-text">{{popUpText}}</span>
    <div class="button-container">
      <span role="button" @click="cancelHandle">Cancel</span>
      <span class="delete-text" role="button" @click="handleDelete">Delete</span>
    </div>
  </div>
</template>
<script>
import icnDelete from "@/assets/icn_delete.svg";
import CONSTANTS from "@/constants.js";
export default {
  name: "DeletePopUp",
  data: () => ({
    icnDelete,
    popUpText: CONSTANTS.DELETE_TEXT
  }),
  props: ["handleDelete", "cancelHandle"]
};
</script>
<style lang="scss" scoped>
.delete-container {
  width: 30%;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  box-shadow: 0 0 31px 0 rgba(0, 0, 0, 0.14);
  z-index: 1;
  top: 100%;
  right: 5px;
  .arrow-up {
    width: 0;
    height: 0;
    box-sizing: border-box;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fafcff;
    position: absolute;
    top: -10px;
    right: 10px;
  }
  .popup-text {
    color: #969ba0;
    font-size: 16px;
    padding: 5px 0;
    text-align: center;
  }
  .button-container {
    span {
      font-size: 14px;
      margin: 0 5px;
      cursor: pointer;
      color: #969ba0;
      &.delete-text {
        color: #d43f3a;
      }
    }
  }
}
</style>