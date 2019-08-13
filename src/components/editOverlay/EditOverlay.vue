<template>
  <div class="edit-overlay-container">
    <div class="edit-modal">
      <p>EDIT TODO</p>
      <input v-model="inputVal" />
      <button @click="() => handleEdit(inputVal)" :disabled="checkDisabled">
        Update
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "EditOverlay",
  props: ["handleEdit"],
  data: () => ({
    inputVal: localStorage.getItem("name") || ""
  }),
  computed: {
    checkDisabled: function() {
      return this.inputVal !== localStorage.getItem("name") ? false : true;
    }
  }
};
</script>
<style lang="scss" scoped>
.edit-overlay-container {
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: #000;
  opacity: 0.99;
  z-index: 2;
  top: 0;
  left: 0;
  .edit-modal {
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
    input {
      border: none;
      outline: none;
      border-bottom: 1px solid #d9dde1;
      padding: 10px 5px;
      margin: 0 0 10px;
    }
    button {
      box-sizing: border-box;
      margin: 5px;
      height: 40px;
      width: 20%;
      padding: 10px;
      border-radius: 16px;
      outline: none;
      border: none;
      background: #2c3e50;
      color: #fff;
      cursor: pointer;
    }
    p {
      padding: 0 0 10px;
    }
  }
  @media (max-width: 767px) {
    .edit-modal {
      width: 90%;
      left: 5%;
    }
  }
  @media (min-width: 767px) and (max-width: 1024px) {
    .edit-modal {
      width: 80%;
      left: 10%;
    }
  }
}
</style>
