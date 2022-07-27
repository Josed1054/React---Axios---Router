import React, { useState } from "react";
import { llueve } from "../llueve";
import { Link } from "react-router-dom";

export function GobDataTable(props: { gobData: any; numberOfEntries: any }) {
  return props.gobData.map((element: any, index: number) => {
    let numero = index + 1;

    if (index < props.numberOfEntries && index > props.numberOfEntries - 11) {
      return (
        <tr key={element._id}>
          <td>{numero}</td>
          <td>
            <Link to={`${element._id}`} state={{ ID: element._id }}>
              {element._id}
            </Link>
          </td>
          <td>{element.cityid}</td>
          <td>{element.name}</td>
          <td>{element.state}</td>
          <td>{element.probabilityofprecip}</td>
          <td>{element.relativehumidity}</td>
          <td>{element.lastreporttime}</td>
          <td>
            {llueve(element.probabilityofprecip, element.relativehumidity)}
          </td>
        </tr>
      );
    }
  });
}
