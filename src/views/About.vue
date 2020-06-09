<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a href="/#/GroupDraw">THIS USING LINK TO GROUP DRAW PAGE</a>
    <br />
    <button class="pointer" @click="redirectToGroup()">
      THIS IS USING ROUTER TO GROUP DRAW PAGE
    </button>
  </div>
</template>

<script>
export default {
  name: "About",

  methods: {
    redirectToGroup() {
      // USE THIS as RECOMMENDED
      this.$router.push("GroupDraw");
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
