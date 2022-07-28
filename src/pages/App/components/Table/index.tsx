import React from "react";
import { GobDataTable } from "../Gob-Date-Table";

export function Table(props: { gobData: any; numberOfEntries: any }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Numero</th>
          <th>_id</th>
          <th>cityid</th>
          <th>name</th>
          <th>state</th>
          <th>probability of precip</th>
          <th>relative humidity</th>
          <th>Last report time</th>
          <th>LLUEVE?</th>
        </tr>
      </thead>
      <tbody>
        <GobDataTable
          gobData={props.gobData}
          numberOfEntries={props.numberOfEntries}
        />
      </tbody>
    </table>
  );
}
