import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [
      { name: "student A" },
      { name: "student B" },
      { name: "student C" }
    ],
    libraryCategories: [{ code: "cat1" }, { code: "cat2" }],
    loggedUser: { name: "Mauricio" },
    subjectsFromAPI: []
  },

  //////////
  actions: {
    // addStudent(new Student()) => objectParam = newStudent
    // Use a destructor => EXAMPLE: const { name, lastName } = student;
    // vuexObject = { dispatch(actions), state, commit(mutations), getters }
    // addStudent(vuexObject, objectParam) {
    // addStudent({ commit, dispatch, state, getters }, student) {
    addStudent({ commit }, student) {
      // actions previous to mutations
      student.name = student.name + "-inserted";

      // commit
      // is the shortcut from this.mutations.mutateStudentList(student);
      // DO NOT! NEVER! => state.students.push(student);
      commit("mutateStudentList", student);
      // only permit one param
    }
  },
  mutations: {
    // mutateStudentList(state, param) {
    mutateStudentList(state, student) {
      state.students.push(student);
    }
  },

  ///////////
  getters: {
    getStudentList(state) {
      return state.students;
    }
  },

  ///////////
  modules: {}
});
