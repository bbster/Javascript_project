import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Order from "./pages/Order";

export default function Router() {
  return (
    <Switch>
      <Route exact path={"/"} component={() => <Home />} />
      <Route path={"/menu"} component={() => <Menu />} />
      <Route path={"/shop"} component={() => <Shop />} />
      <Route path={"/order"} component={() => <Order />} />
    </Switch>
  );
}
