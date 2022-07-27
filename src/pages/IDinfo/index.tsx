import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { RenderElements } from "./components/RenderElements";

export function IDinfo() {
  const location: any = useLocation();
  const { ID } = location.state;

  const [gobData, setGobData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.datos.gob.mx/v1/condiciones-atmosfericas", {
        params: { _id: ID },
      })
      .then((res) => {
        setGobData(() => res.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Link to={"/"}>Atras</Link>
      <RenderElements {...gobData} />
    </>
  );
}
