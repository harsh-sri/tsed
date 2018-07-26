import {EXPRESS_NEXT_FN} from "../../../../packages/common/filters/constants";
import {Next} from "../../../../packages/common/filters/decorators/next";
import {ParamRegistry} from "../../../../packages/common/filters/registries/ParamRegistry";
import {Sinon} from "../../../tools";

describe("Next", () => {
  before(() => {
    this.decorateStub = Sinon.stub(ParamRegistry, "decorate");
    Next();
  });

  after(() => {
    this.decorateStub.restore();
  });

  it("should have been called ParamFilter.decorate method with the correct parameters", () =>
    this.decorateStub.should.have.been.calledOnce.and.calledWithExactly(EXPRESS_NEXT_FN));
});
