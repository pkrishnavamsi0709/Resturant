import "./components.css";
import { WhyusBox } from "./WhyusBox";

export function Whyus(props) {
  return (
    <div className="Whyus">
      {props.support.map((index) => (
        <WhyusBox
          heading={index.heading}
          desc={index.desc}
          no={index.id}
          key={index.id}
        />
      ))}
    </div>
  );
}
