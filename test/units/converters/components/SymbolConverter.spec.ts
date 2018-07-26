import {expect} from "chai";
import {ConverterService} from "../../../../packages/common/converters";
import {inject} from "../../../../packages/testing/inject";

describe("SymbolConverter", () => {
  before(
    inject([ConverterService], (converterService: ConverterService) => {
      this.symbolConverter = converterService.getConverter(Symbol);
    })
  );

  it("should do something", () => {
    expect(!!this.symbolConverter).to.be.true;
  });

  describe("deserialize()", () => {
    it("should deserialize data as symbol when a string is given", () => {
      expect(this.symbolConverter.deserialize("testSymbol")).to.be.a("symbol");
    });
  });

  describe("serialize()", () => {
    before(() => {
      this.symbolTest = this.symbolConverter.serialize(Symbol("testSymbol2"));
    });

    it("should serialize data to a string", () => {
      expect(this.symbolTest).to.be.a("string");
    });
    it("should serialize data to a string that equals to testSymbol2", () => {
      expect(this.symbolTest).to.be.equal("testSymbol2");
    });
  });
});
