<template>
  <div v-if="toDoList.length>0" class="to-do-list-container">
    <h1>TO DO LIST</h1>
    <p class="selected-count" v-if="selectedIds.length>0">
      Selected:
      <span>{{selectedIds.length}}</span>
    </p>
    <button v-if="selectedIds.length>1" class="delete-selected" @click="handleMultiDelete">Delete</button>
    <ul class="to-do-list">
      <li v-for="(item) in toDoList" :key="item.id">
        <CheckBoxComponent :id="item.id" />
        <span>{{item.data}}</span>
        <img
          alt="delete"
          v-if="checkId(item.id) && selectedIds.length===1"
          :src="icnDelete"
          title="delete"
          @click="showHideDeletePopUp(true)"
        />
        <DeletePopUp
          :handleDelete="()=>{handleDelete(item.id)}"
          v-if=" showDelete && checkId(item.id)"
          :cancelHandle="()=>{showHideDeletePopUp(false,item.id)}"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Store from "@/store.js";
import ACTIONS from "@/actions.js";
import deleteIcn from "@/assets/icn_filledclose.svg";
import CheckBoxComponent from "@/components/checkBoxComponent/CheckBoxComponent.vue";
import DeletePopUp from "@/components/deletePopUp/DeletePopUp.vue";
export default {
  name: "ToDoList",
  data: () => ({
    icnDelete: deleteIcn,
    showDelete: false
  }),
  methods: {
    checkId: function(id) {
      return this.selectedIds.filter(elem => elem === id).length;
    },
    handleDelete: function(id) {
      Store.dispatch(ACTIONS.DELETE_TO_DO, id);
      this.showHideDeletePopUp(false);
    },
    showHideDeletePopUp: function(bool, id = "") {
      this.showDelete = bool;
      if (id !== "") {
        Store.dispatch(ACTIONS.MODIFY_SELECTED, id);
      }
    },
    handleMultiDelete: function() {
      const selected = [...this.selectedIds];
      Store.dispatch(ACTIONS.DELETE_MULTIPLE, selected);
    }
  },
  computed: mapGetters({
    toDoList: "toDoList",
    selectedIds: "selectedIds"
  }),
  components: { CheckBoxComponent, DeletePopUp }
};
</script>
<style lang="scss" scoped>
.to-do-list-container {
  width: 35%;
  margin: 0 auto;
  position: relative;
  li {
    display: flex;
    padding: 20px 10px;
    background: #ffffff;
    box-shadow: 0 0 31px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    margin: 10px 0;
    font-weight: 500;
    font-size: 18px;
    border-radius: 10px;
    align-items: center;
    height: 60px;
    position: relative;
  }
  img {
    position: absolute;
    right: 5px;
    cursor: pointer;
  }
  .selected-count {
    font-size: 16px;
    padding: 10px 0;
    display: inline-block;
    span {
      background: #d8dde4;
      display: inline-block;
      color: #000;
      font-weight: bold;
      padding: 5px 10px;
      border-radius: 15px;
    }
  }
}
.delete-selected {
  box-sizing: border-box;
  display: inline-block;
  margin: 0 5px;
  height: 40px;
  width: 25%;
  padding: 10px;
  border-radius: 16px;
  outline: none;
  border: none;
  background: #fe801b;
  color: #fff;
  position: absolute;
  right: 0;
  cursor: pointer;
}
@media (max-width: 1024px) {
  .to-do-list-container {
    width: 60%;
    img {
      display: inline-block;
      width: 30px;
      height: 30px;
      box-sizing: border-box;
    }
  }
  .selected-count {
    font-size: 14px;
  }
  .delete-selected {
    width: 30%;
  }
}
</style>