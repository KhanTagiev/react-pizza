import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home pizzaItems={pizzas} />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
