<template>
  <div id="main-container" class="main-container">
    <v-btn>TEST</v-btn>
    <HelloWorld msg="hola from GroupDraw" />

    <div id="students-class-container" class="student-container">
      <span id="students-list-title" class="student-container">students list</span>
      <div :key="student.name" v-for="student in students">
        <ul>
          <li class="student-name">{{ student.name }}</li>
        </ul>
      </div>
    </div>
    <div id="group-actions">
      <button @click="drawStudents">DRAW</button>
    </div>
    <div id="group-students-class-container">
      <div :key="group.id" v-for="group in groups" class="student-container">
        <h2>{{ group.name }}</h2>
        <div :key="index" v-for="(student, index) in group.students">
          <ul>
            <li :id="'student.name' + '-' + index">{{ student.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import studentData from "./students.json";
import { mapGetters } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "GroupDraw",

  components: { HelloWorld },

  data() {
    return {
      groups: [
        { id: 0, name: "Group 1", students: [] },
        { id: 1, name: "Group 2", students: [] },
        { id: 2, name: "Group 3", students: [] },
        { id: 3, name: "Group 4", students: [] }
      ]
    };
  },

  computed: {
    ...mapGetters(["getStudentList"]),
    students() {
      return this.getStudentList;
      // return studentData.students;
    }
  },

  methods: {
    addAccount(accountToAdd) {
      localStorage.setItem("account", accountToAdd);
    },
    delete() {
      // modify state
      alert("success");
    },
    _getGroupNumber() {
      const selectedGroupNumber = Math.floor(Math.random() * 4);
      const foundGroup = this.groups.find(
        group => group.id === selectedGroupNumber
      );

      if (foundGroup && foundGroup.students.length < 5) {
        return selectedGroupNumber;
      } else {
        return this._getGroupNumber();
      }
    },

    drawStudents() {
      this.students.forEach(student => {
        const groupNumber = this._getGroupNumber();

        const groupToAssign = this.groups.find(
          group => group.id === groupNumber
        );
        groupToAssign.students.push(student);
      });
    }
  }
};
</script>

<style scoped>
.student-container {
  color: brown;
}

#students-list-title {
  font-size: 34px;
  color: green;
}

li {
  font-weight: 900;
  color: blue;
}
</style>
