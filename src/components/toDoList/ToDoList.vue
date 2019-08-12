<template>
  <div v-if="toDoList.length>0" class="to-do-list-container">
    <h1>TO DO LIST</h1>
    <ul class="to-do-list">
      <li v-for="(item) in toDoList" :key="item.id">
        <CheckBoxComponent :id="item.id" />
        <span>{{item.data}}</span>
        <img
          alt="delete"
          v-if="checkId(item.id)"
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
}
</style>