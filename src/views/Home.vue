<template>
  <div>
    <span> {{ name }} belongs to group {{ group }} </span>
    <br />
    <span> {{ getConcatNameWithGroup() }} </span>
    <br />
    <button @click="changeName('student new')">CHANGE NAME</button>
    <!--span> Mauricio belongs to group certificacion </span-->
    <!--HelloWorld msg="Welcome to Your Vue.js App" /-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import NewCOmponet from "./About.vue"

export default {
  // Single component
  name: "Home",

  /* components: {
    HelloWorld
  } */

  data() {
    // like "private" properties
    return {
      name: "",
      group: "certificacion"
    };
  },

  created() {
    this.name = "mauricio";
    // http://api.com/products/{id}
  },
  mounted() {
    this.name = "mtr";
  },
  updated() {
    // this.name = "udpated";
  },

  props: {
    // like "public" properties
  },

  methods: {
    save() {},
    cancel() {},
    export() {},
    getConcatNameWithGroup() {
      this.save(); // this === vm (view model)
      // this.$forceUpdate(); // $ => vue "instance" => properites, methods, global variables.
      // this.$data.name === this.name
      // return this.name + " new group is: " + this.group;
      // this === vm
      return `${this.name} new group is: ${this.group}`; // string template
    },
    changeName(newName) {
      this.name = newName;
    }
  }
};
</script>

<style scoped></style>
