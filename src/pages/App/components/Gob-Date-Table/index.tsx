import React from "react";
import { llueve } from "../llueve";
import { Link } from "react-router-dom";

export function GobDataTable(props: { gobData: any; numberOfEntries: any }) {
  return props.gobData.map((element: any, index: number) => {
    let numero = index + 1;

    if (index < props.numberOfEntries && index >= props.numberOfEntries - 10) {
      let sliceDateYear = element.lastreporttime.slice(0, 4);
      let sliceDateMonth = element.lastreporttime.slice(4, 6);
      let sliceDateDay = element.lastreporttime.slice(6, 8);

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
          <td>{`${sliceDateYear}/${sliceDateMonth}/${sliceDateDay}`}</td>
          <td>
            {llueve(element.probabilityofprecip, element.relativehumidity)}
          </td>
        </tr>
      );
    }
  });
}
