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
  it("Should draw properly", () => {
    const wrapper = shallowMount(GroupDraw);
    let expectedInitialLength = 0;
    assert.equal(
      wrapper.vm.$data.groups[0].students.length,
      expectedInitialLength
    );

    expectedInitialLength = 5;
    wrapper.vm.drawStudents();
    assert.equal(
      wrapper.vm.$data.groups[0].students.length,
      expectedInitialLength
    );
  });
});
