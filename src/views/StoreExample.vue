<template>
  <div class="container">
    <div :key="index" v-for="(student, index) in students">
      <ul>
        <li>
          {{ student.name }}
        </li>
      </ul>
    </div>
    <button @click="submitStudent">ADD NEW</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "StoreExample",

  computed: {
    ...mapGetters(["getStudentList"]),
    // getList,
    students() {
      return this.getStudentList;
    }
  },

  methods: {
    ...mapActions(["addStudent"]),
    // addStudent
    submitStudent() {
      this.addStudent({ name: "NUEVOOOO" });
    }
  }
};
</script>
