
// import { Link } from "react-router-dom";


export default function Header(props) {

const links = props.links;

const navItems = [];

for (let i = 0; i < links.length; i++) {
  navItems.push(<Link to={`/${links[i][1]}`}>{links[i][0]}</Link>);
  
}
  
  return (
    <header
      className={`d-flex align-items-center px-2 py-2 header bg-${
        props.mode
      } text-${props.mode === `light` ? `dark` : `light`}`}
    >
      <div className="col-2">
        <a href="#" className="fs-4 fw-bold ms-5">
          <span>{props.headerfirst}</span>
          {/* <span>{props.headerlast}</span> */}
        </a>
      </div>
      <div className="col-8">
        <a className="secondary-links header--project fs-3">{navItems}</a>
      </div>

      <div className="form-check form-switch col-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable Dark Mode
        </label>
      </div>
    </header>
  );
}


     