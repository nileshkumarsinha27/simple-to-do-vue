<template>
  <div class="delete-container">
    <div class="delete-modal">
      <p>{{ popUpText }}</p>
      <div class="button-container">
        <span class="cancel-btn" role="button" @click="cancelHandle"
          >Cancel</span
        >
        <span role="button" @click="handleDelete">Delete</span>
      </div>
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
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: #000;
  opacity: 0.99;
  z-index: 2;
  top: 0;
  left: 0;
  .delete-modal {
    box-sizing: border-box;
    width: 30%;
    height: 200px;
    position: absolute;
    background: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
    box-shadow: 0 0 31px 0 rgba(0, 0, 0, 0.14);
    border-radius: 10px;
    top: 30%;
    left: 30%;
    opacity: 1;
    span {
      box-sizing: border-box;
      display: inline-block;
      margin: 5px;
      height: 40px;
      padding: 10px;
      border-radius: 20px;
      outline: none;
      border: none;
      background: #2c3e50;
      color: #fff;
      cursor: pointer;
      &.cancel-btn {
        background: #ff0000a6;
      }
    }
    p {
      padding: 0 0 10px;
    }
  }
  @media (max-width: 767px) {
    .delete-modal {
      width: 90%;
      left: 5%;
    }
  }
  @media (min-width: 767px) and (max-width: 1024px) {
    .delete-modal {
      width: 80%;
      left: 10%;
    }
  }
}
</style>
