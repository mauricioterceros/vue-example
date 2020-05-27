<template>
  <div class="hello">
    <h1>{{ siteName }}</h1>
    <h2>{{ classHour }}</h2>
    <span>{{ name }}</span>
    <span v-if="showNameAndGroup">
      This is using data: {{ name }} belongs to group {{ group }}
    </span>
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
    siteName: {
      type: String,
      default: "Certi Site"
    },
    classHour: {
      type: String,
      default: "19:00"
    },
    showNameAndGroup: {
      type: Boolean,
      default: true
    },
    students: {
      type: Array,
      default: function() {
        return [];
      }
    },
    student: {
      type: Object,
      default: function() {
        return {};
      }
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
