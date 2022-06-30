
export default function Header(props) {
  return (
    <header
      className={`d-flex align-items-center px-2 py-2 header bg-${props.mode} text-${props.mode === `light`?`dark`:`light`}`}
    >
      <div className="col-4">
        <img
          src="https://www.logolynx.com/images/logolynx/64/6434117060654972bd19ca515db70158.jpeg"
          alt="meme-logo"
          className="header--image"
          width={65}
        />
      </div>
      <h1 className="header--title col-3 text-center">Meme Generator</h1>
      <h2 className="header--project col-3 text-center">
        react course-project
      </h2>
      <div className="form-check form-switch col-2">
         <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
       </div> 
    </header>
  );
}
