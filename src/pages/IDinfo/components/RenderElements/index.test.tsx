import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { RenderElements } from ".";
import { Data } from "../../../../utils/test-data-1/index";

test("Checar si se render la info", () => {
  const view = renderer.create(<RenderElements {...Data} />).toJSON();

  expect(view).toMatchSnapshot();
});
