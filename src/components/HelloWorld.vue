<template>
  <div>
    <div class="hello">{{ msg }}</div>
    <input v-model="this.itemToEdit.name" />
    <button @click="save">SAVE</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      name: "NAME IN HELLO WORLD",
      itemToEdit: {}
    };
  },

  mounted() {
    // const found = this.$store.state.items.find(...) // NOT A GOOD PRACTICE to access directly to state :(
    const found = {};
    // deep clone: JSON.strigify / JSON.parse
    this.itemToEdit = Object.assign({}, found);
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
    },
    save() {
      // this.saveImte(this.itemToEdit) // from mapActions
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
