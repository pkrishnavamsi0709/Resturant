import "./components.css";

export function WhyusBox(props) {
  return (
    <div className="WhyusBox">
      <h2 className="whyusNo">{props.no}</h2>
      <h2 className="whyusHeading">{props.heading}</h2>
      <p className="whyusDesc">{props.desc}</p>
    </div>
  );
}
