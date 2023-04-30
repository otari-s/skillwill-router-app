import React from "react";
import { Link, Outlet } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <img src="download.jpeg" alt="img" />
      <h2>Jhon Doe</h2>

      <Link style={{ marginRight: 10 }} to="/about">
        about Jhon Doe
      </Link>
      <Link to="/fact1">facts</Link>
      <Outlet />
    </div>
  );
}

export default MainPage;
