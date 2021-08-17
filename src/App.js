import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/users" component={UsersPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/" exact component={HomePage} />
          <Route component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
