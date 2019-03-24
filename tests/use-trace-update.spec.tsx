import * as React from "react";
import useTraceUpdate from "../src/use-trace-update";
import * as sinon from "sinon";
import { shallow } from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

const TestComponent = (props: { name: string }) => {
  useTraceUpdate(props);
  return null;
};

describe("useTraceUpdate", () => {
  beforeEach(() => {
    sinon.stub(console, "log");
  });

  //TODO: fix
  it.skip("should not console log on the first time", () => {
    const wrapper = shallow(<TestComponent name="Damian" />);
    expect((console.log as any).calledOnce).to.be.false;
    wrapper.setProps({ name: "Dan" });
    expect((console.log as any).calledOnce).to.be.true;
    expect(true).to.be.true;
  });
});
