import "./navbar.css";
import { BiBell, BiMessageDetail } from "react-icons/bi";

function Navbar() {
  const notification = <div className="notification"></div>;

  return (
    <div className="nav">

      <div className="nav-items">
        <div className="nav-icons">
         <BiBell  size={"30px"} color="#fbffff" />
          {notification}
        </div>

        <div className="nav-icons">
          <BiMessageDetail size={"30px"} color="#fbffff" />
          {notification}
        </div>

        <div className="admin-pic">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"/>
          <div></div>
        </div>

        <div className="admin-info">
          Joe Shmoe
          <span>Manager</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
