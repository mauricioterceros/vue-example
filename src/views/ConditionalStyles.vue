<template>
  <div>
    <div :key="item.id" v-for="item in list">
      <span :class="
          [item.type === 'income' ? 'green' : 'red']
        ">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      list: [
        // { id: 1, name: "My Income from lorem ipsum", type: "income", cssClass: "red" }
        // https://vuejs.org/v2/guide/class-and-style.html#Binding-HTML-Classes
        { id: 1, name: "My Income from lorem ipsum", type: "income" },
        { id: 2, name: "My Expense for lorem ipsum", type: "type" }
      ]
    };
  },

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  background: red;
}
.green {
  background: green;
}
</style>
