import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Link to={"/"}>
      <h1>404</h1>
    </Link>
  );
}
