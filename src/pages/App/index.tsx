import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "./components/Table";

export function App() {
  const [gobData, setGobData] = useState({
    pagination: { pageSize: "" },
    results: [],
  });
  const [numberOfEntries, setNumberOfEntries] = useState(10);

  function setValue(e: any) {
    const { className } = e.target;
    setNumberOfEntries((prev) => {
      if (className === "Add") {
        return prev + 10;
      } else if (className === "Sub" && prev > 10) {
        return prev - 10;
      }
      return prev;
    });
  }

  useEffect(() => {
    axios
      .get("https://api.datos.gob.mx/v1/condiciones-atmosfericas")
      .then((res) => {
        setGobData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Table gobData={gobData.results} numberOfEntries={numberOfEntries} />
      <button onClick={setValue} className="Sub">
        Previous
      </button>
      <button onClick={setValue} className="Add">
        Next
      </button>
      <p>{`Total de registros = ${gobData.pagination.pageSize}`}</p>
    </>
  );
}
