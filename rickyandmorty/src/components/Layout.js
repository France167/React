import Nav from "../components/Nav";
import { useContext } from "react";
import SwitchModeContext from "../contexts/SwitchMode";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const { uiMode } = useContext(SwitchModeContext);
  return (
    <div className={`${uiMode ? "bg-light" : "bg-dark"}`}>
      <div className="container">
        <Nav />
        <hr />
        <Outlet />
      </div>
    </div>
  );
}
