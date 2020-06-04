<!--
  When template, script, and style is in one file: SINGLE FILE COMPONENT
  PROS: Portable, accessible
  CONS: TOO LARGE

  when template, script, and style are in diff files: MVC
-->

<template>
  <div>
    <!--span>This is using method: {{ getConcatNameWithGroup() }}</span>
    <br />
    <span>
      JS expression 1: {{ name.split(" ")[0] + " " + name.split(" ")[2] }}
    </span>
    <br />
    <span>JS expression 2: {{ `${name} ${group}` }}</span>
    <br />
    <br />
    <br />
    <span>This is the computed: {{ upperCaseName }}</span>
    <br />
    <span>This is the computed: {{ statusColor }}</span>
    <br />
    <br />
    
    <button @click="updateStatus()">Update Status</button>
    <button @click="changeClassName('Progra')">
      CHANGE PROGRA
    </button>
    <button @click="changeClassName('DB')">
      CHANGE DB
    </button-->
    <!--HelloWorld :site-name="className" :class-hour="classHour" /-->

    <!--label>NOMBRE</label>
    <br />
    <br />
    <span> {{ name }} </span>
    <br />
    <button @click="changeName('student lastname second')">CHANGE NAME</button>
    <br />
    <span> {{ upperCaseName }} </span>
    <br />
    <select v-model="selectedOption">
      <option>UNO</option>
      <option>DOS</option>
      <option>TRES</option>
    </select>
    <br />
    <button @click="saveName()">SAVE</button-->

    <div :key="item.name + '1'" v-for="item in list">
      <span>{{ item.name }}</span>
      <br />
      <span>{{ item.desc }}</span>
      <br />
    </div>

    <input v-model="name" placeholder="escriba su nombre" />
    <br />
    <div :key="item.name" v-for="item in filteredList">
      <span>{{ item.name }}</span>
      <br />
      <span>{{ item.desc }}</span>
      <br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import * as data from "./items.json";
// import NewCOmponet from "./About.vue"

export default {
  // Single component
  name: "Home",

  components: {
    // HelloWorld
  },

  // Init when component is been created
  data() {
    // like "private" properties
    return {
      name: "",
      group: "certificacion",
      className: "Certi from outside",
      status: "busy",
      classHour: "19:00",
      selectedOption: "",
      radioSelect: "",
      radioOptionA: "HOLA",
      list: [
        {
          name: "item1",
          desc: "desc1"
        },
        {
          name: "item2",
          desc: "desc2"
        },
        {
          name: "intem3",
          desc: "desc3"
        }
      ]
    };
  },

  // LIKE LIKE "" data ""
  // like "public" properties
  props: {
    // props here => see at HelloWorld.vue
  },

  // auto calculated variables
  // It is not necessary to assign due these are auto calculated based on:
  // the reactive data/properties
  computed: {
    filteredList() {
      return this.name === ""
        ? this.list
        : this.list.filter(item => item.name === this.name);
    },
    upperCaseName() {
      // more code

      /* eslint-disable */
      return this.name.toUpperCase() + 'ADDDDD';
      /* eslint-enable */
    },
    statusColor() {
      let color = "red";
      if (this.status === "available") {
        color = "green";
      }
      return color;
    }
  },

  watch: {
    className: {
      handler: function(newVal, oldVal) {
        if (newVal !== oldVal) {
          if (newVal === "Progra") {
            this.classHour = "10:00";
          } else {
            this.classHour = "19:00";
          }
          console.log(oldVal);
        }
      },
      deep: true
    }
  },

  // START LIFECYCLE HOOKS (OPTIONAL)
  created() {
    // this.name = "mauricio t r";
    // this.className = "certi!"; // it is allowed but is not recommendable
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
      debugger;
      return `${this.upperCaseName} new group is: ${this.group}`; // string template
    },
    // setter
    changeName(newName) {
      this.name = newName;
    },
    changeClassName(newclassName) {
      this.className = newclassName;
    },
    updateStatus() {
      this.status = "available";
    },
    // action
    save() {
      console.log("SAVED!");
    },
    cancel() {},
    export() {},
    saveName() {
      console.log("SAVED ===> " + this.name + this.selectedOption);
    }
  }
};
</script>

<style src="./home.css" scoped></style>
