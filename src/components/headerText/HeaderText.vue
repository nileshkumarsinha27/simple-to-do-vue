<template>
  <header>{{ headerText }}</header>
</template>

<script>
export default {
  name: "HeaderText",
  props: ["headerText"]
};
</script>
<style lang="scss" scoped>
header {
  font-size: 32px;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  padding: 50px 0;
  color: #969ba0;
}
@media (min-width: 767px) and (max-width: 1024px) {
  header {
    font-size: 24px;
  }
}
</style>
