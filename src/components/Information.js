import "./components.css";
function Information(props) {
  return (
    <div className="info">
      <div className="InfoImgdiv">
        <img src={props.img} alt="infoImg" className="InfoImg"></img>
      </div>

      <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Information;
