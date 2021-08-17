import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>

      <li>
        <NavLink to="/products">Products</NavLink>
      </li>

      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
