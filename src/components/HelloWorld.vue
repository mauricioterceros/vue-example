<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      name: "NAME IN HELLO WORLD"
    };
  },

  // LIKE LIKE "" data ""
  // like "public" properties
  props: {
    msg: {
      type: String,
      default: ""
    }
  },

  methods: {
    sayHi() {
      return "hi";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
