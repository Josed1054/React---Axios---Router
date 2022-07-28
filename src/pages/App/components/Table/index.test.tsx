import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { Table } from ".";
import { MemoryRouter as Router } from "react-router-dom";
import { Data } from "../../../../utils/test-data/index";

test("Checar si se render la tabla", () => {
  const view = renderer
    .create(
      <Router>
        <Table gobData={Data} numberOfEntries={10} />
      </Router>
    )
    .toJSON();

  expect(view).toMatchSnapshot();
});

test("Checar que no se render los datos de la tabla", () => {
  const view = renderer
    .create(
      <Router>
        <Table gobData={Data} numberOfEntries={20} />
      </Router>
    )
    .toJSON();

  expect(view).toMatchSnapshot();
});
