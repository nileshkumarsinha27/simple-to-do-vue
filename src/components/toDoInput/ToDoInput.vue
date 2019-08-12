<template>
  <div class="input-container">
    <label for="todo-input">
      <input
        :placeholder="placeHolderText"
        v-model="value"
        @keyup="enterHandler"
      />
    </label>
    <img
      v-if="showIcon && value.length > 0"
      alt="plus-icon"
      :src="addIcn"
      @click="addTodos"
    />
  </div>
</template>
<script>
import CONSTANTS from "@/constants.js";
import icnAdd from "@/assets/icn_filleadd.svg";
import { mapGetters } from "vuex";
import Store from "@/store.js";
import ACTIONS from "@/actions.js";
export default {
  name: "ToDoInput",
  data: () => ({
    placeHolderText: CONSTANTS.ADD_TO_DO,
    addIcn: icnAdd,
    value: ""
  }),
  props: ["showIcon"],
  methods: {
    enumId: function() {
      return Math.random();
    },
    enterHandler: function(e) {
      if (e.key === CONSTANTS.ENTER_KEY) {
        this.addTodos();
      }
    },
    addTodos: function() {
      const objSent = {
        id: this.enumId(),
        data: this.value
      };
      Store.dispatch(ACTIONS.ADD_TO_DO, objSent);
      this.value = "";
    }
  },
  computed: mapGetters({
    toDoList: "toDoList"
  })
};
</script>
<style lang="scss" scoped>
.input-container {
  box-sizing: border-box;
  height: 100px;
  text-align: center;
  width: 60%;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  label {
    width: inherit;
    display: block;
  }
  input {
    box-sizing: border-box;
    width: 95%;
    padding: 20px 10px;
    border: none;
    border: 1px solid #d9dde1;
    border-radius: 5px;
    font-size: 18px;
    color: #969ba0;
  }
  img {
    padding: 0 10px;
    box-sizing: border-box;
    &:hover {
      cursor: pointer;
    }
  }
}
@media (min-width: 480px) and (max-width: 1024px) {
  .input-container {
    width: 80%;
    input {
      font-size: 16px;
    }
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .input-container {
    width: 90%;
    input {
      font-size: 14px;
    }
  }
}
</style>
