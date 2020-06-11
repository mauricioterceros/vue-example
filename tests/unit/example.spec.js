import {
  expect,
  assert
} from "chai";
import {
  shallowMount,
  createLocalVue,
  mount
} from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import GroupDraw from "@/views/GroupDraw.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import { mockStore } from "./mockStore";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    console.log(wrapper.text());
    expect(wrapper.text()).to.include(msg);
  });
});

describe("Group Draw", () => {
  let localVue;
  let router;
  let store;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    router = new VueRouter({ routes: [] });
    store = new Vuex.Store(mockStore);
    // NEXT steps> move this to a util.
    // wrapper = TestUtil.get(.....)
  });
  /**
   * const initialAccount.incomes = [ i1, i2, i3 ];
   * wrapper.vm.deleteAccount();
   * assert.notEqual(initialAccount, null);
   *
   *
   * wrapper.vm.deleteIncome('income-001');
   * assert.equal(initialAccount.accounts, 2);
   * const foundIncome = wrapper.vm.find('#income-001')
   * assert.isTrue(foundIncome.exists());
   */

  // TETING BUSINESS LOGIC
  it("Logic for draw students should works properly", () => {
    const wrapper = shallowMount(GroupDraw, {
      router,
      store,
      localVue
    }); // wrapper = { new Vue(), html, find, findAll, etc }
    let expectedInitialLength = 0;
    const [firstGroup] = wrapper.vm.$data.groups; // wrapper.vm.$data.groups[0]
    assert.equal(firstGroup.students.length, expectedInitialLength);

    expectedInitialLength = 5;
    wrapper.vm.drawStudents();
    assert.equal(firstGroup.students.length, expectedInitialLength);
  });

  // TESTING BASIC UI
  it("The title should be rendered", () => {
    const expectedTitle = "students list";
    const wrapper = shallowMount(GroupDraw, {
      store,
      localVue
    });

    const titleInComponent = wrapper.find("#students-list-title");

    assert.equal(titleInComponent.text(), expectedTitle);
  });

  it("it should 20 students", () => {
    const expectedLenght = 20;
    const wrapper = shallowMount(GroupDraw, {
      store,
      localVue
    });

    const titleInComponent = wrapper.findAll(".student-name");

    assert.isTrue(wrapper.exists());
    assert.equal(titleInComponent.length, expectedLenght);
  });
});

describe("Example LocalVue", () => {
  it("Creating Group Draw with local vue", () => {
    /**
     * FIRST STAGE: SETUP (Init all "tech engine", like a startup.cs)
     */
    // creates a local instance for VUE => simulates global VUE
    const localVue = createLocalVue();

    // instead of use the global instance we will use "localVue"
    // injecting plugins/ use plugins ==> instead of ==> Vue.use
    localVue.use(VueRouter);
    localVue.use(Vuex);

    // config/init plugins ==> like the creations of new instance of plugins
    const router = new VueRouter({ routes: [] }); // it required for: this.$routes
    const store = new Vuex.Store(mockStore); // it required for: mapGetters /or/ mapActions

    const wrapper = mount(GroupDraw, {
      router, // plugin comes from VUEjs.org
      store, // plugin comes from VUEjs.org
      // mock: otherPlugin // plugin not comes from VUEjs.org
      localVue,
      stubs: {
        HelloWorld: true // use the DOM as described in component/view
        // HelloWorld: '<span class="myclass"> Hello World </span>'
        /* HelloWorld: {
          render(g) {},
          sayHi() {}
        } */
      }
    }); // it is like: main.js

    console.log("DRAW HTML: " + wrapper.html());
    /**
     * SECOND STAGE: TEST CASES (UI rendering, Controllers logic(methods), others)
     */
    let expectedInitialLength = 0;
    const [firstGroup] = wrapper.vm.$data.groups;
    // FIRST TEST CASE: students groups should be clean before draw
    assert.equal(firstGroup.students.length, expectedInitialLength);
    expectedInitialLength = 5;
    wrapper.vm.drawStudents();
    // SECOND TEST CASE: students groups should contain 5 students after draw
    assert.equal(firstGroup.students.length, expectedInitialLength);
  });
});
