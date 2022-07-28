import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { GobDataTable } from ".";
import { MemoryRouter as Router } from "react-router-dom";
import { Data } from "../../../../utils/test-data/index";

test("Checar si se render el pedaso de tabla", () => {
  const view = renderer
    .create(
      <Router>
        <table>
          <tbody>
            <GobDataTable gobData={Data} numberOfEntries={10} />
          </tbody>
        </table>
      </Router>
    )
    .toJSON();

  expect(view).toMatchSnapshot();
});

test("Checar que no se render el pedaso de tabla", () => {
  const view = renderer
    .create(
      <Router>
        <table>
          <tbody>
            <GobDataTable gobData={Data} numberOfEntries={20} />
          </tbody>
        </table>
      </Router>
    )
    .toJSON();

  expect(view).toMatchSnapshot();
});
