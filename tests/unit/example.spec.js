import { expect, assert } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import GroupDraw from "@/views/GroupDraw.vue";

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
    const wrapper = shallowMount(GroupDraw);
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
    const wrapper = shallowMount(GroupDraw);

    const titleInComponent = wrapper.find("#students-list-title");

    assert.equal(titleInComponent.text(), expectedTitle);
  });

  it("it should 20 students", () => {
    const expectedLenght = 20;
    const wrapper = shallowMount(GroupDraw);

    const titleInComponent = wrapper.findAll(".student-name");

    assert.isTrue(wrapper.exists());
    assert.equal(titleInComponent.length, expectedLenght);
  });
});
