<!-- 
  When template, script, and style is in one file: SINGLE FILE COMPONENT
  PROS: Portable, accessible
  CONS: TOO LARGE

  when template, script, and style are in diff files: MVC
-->

<template>
  <div>
    <span class="line-style text-center">
      This is using method: {{ getConcatNameWithGroup() }}
    </span>
    <br />
    <span class="text-bold">
      This is using JS expression: {{ name.split(" ")[0] + " " + name.split(" ")[2] }}
    </span>
    <br />
    <span> This is using JS expression: {{ `${name} ${group}` }} </span>
    <br />
    <button @click="changeName('student lastname second')">CHANGE NAME</button>
    <button @click="save()">SAVE</button>
    <button @click="changeSiteName('new outside name')">
      CHANGE SITE NAME
    </button>
    <HelloWorld :site-name="siteName" class-hour="20:30" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import NewCOmponet from "./About.vue"

export default {
  // Single component
  name: "Home",

  components: {
    HelloWorld
  },

  // Init when component is been created
  data() {
    // like "private" properties
    return {
      name: "mauricio terceros rojas",
      group: "certificacion",
      siteName: "Certi from outside"
    };
  },

  // LIKE LIKE "" data ""
  // like "public" properties
  props: {
    // props here => see at HelloWorld.vue
  },

  // START LIFECYCLE HOOKS (OPTIONAL)
  created() {
    // this.name = "mauricio t r";
    // this.siteName = "certi!"; // it is allowed but is not recommendable
    // http://api.com/products/{id}
  },
  mounted() {
    // this.name = "m t r";
    // subscription a socket
  },
  updated() {
    // this.name = "udpated";
  },
  destroyed() {
    // unsubscribe a socket
  },
  // END LIFECYCLE HOOKS

  methods: {
    // getter
    getConcatNameWithGroup() {
      this.save(); // this === vm (view model)
      // this.$forceUpdate(); // $ => vue "instance" => properites, methods, global variables.
      // this.$data.name === this.name
      // return this.name + " new group is: " + this.group;
      // this === vm
      return `${this.name} new group is: ${this.group}`; // string template
    },
    // setter
    changeName(newName) {
      this.name = newName;
    },
    changeSiteName(newSiteName) {
      this.siteName = newSiteName;
    },
    // action
    save() {
      console.log("SAVED!");
    },
    cancel() {},
    export() {}
  }
};
</script>

<style src="./home.css" scoped></style>
