import React from "react";

export function RenderElements(gobData: any) {
  let elements = [];

  for (const property in gobData) {
    elements.push(`${property}: ${gobData[property]}`);
  }

  return (
    <div>
      {elements.map((element, index) => {
        return <p key={index}>{element}</p>;
      })}
    </div>
  );
}
