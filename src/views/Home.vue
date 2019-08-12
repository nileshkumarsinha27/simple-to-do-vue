<template>
  <div class="home">
    <HeaderText :headerText="pageHeader" />
    <ToDoInput :showIcon="true" />
    <ToDoList />
  </div>
</template>

<script>
import ToDoInput from "@/components/toDoInput/ToDoInput.vue";
import HeaderText from "@/components/headerText/HeaderText.vue";
import ToDoList from "@/components/toDoList/ToDoList.vue";
import CONSTANTS from "@/constants.js";
export default {
  name: "home",
  components: { HeaderText, ToDoInput, ToDoList },
  data: () => ({
    pageHeader: CONSTANTS.PAGE_HEADER
  })
};
</script>
