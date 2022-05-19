<template>
  <div>查询页面
    <div v-for="item in user" :key="item.id">
      <div> {{item.id}}    {{item.name}}    {{item.city}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginView",
  created() {
    this.$axios
      .get("http://101.37.28.115:3000/user/all")
      .then((response) => {
        this.user = response.data.data;
        console.log(this.user);
      })
      .catch((response) => {
        console.log(response);
      });
  },
  data() {
    return { user: [] };
  },
}
</script>

<style scoped>

</style>
