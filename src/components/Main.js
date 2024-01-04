import { Heading } from "./Heading";
import { Underline } from "./Underline";
import { Whyus } from "./Whyus";

import "./components.css";

const data = [
  {
    id: "1",
    heading: "Focaccia",
    desc: "Bread with italian olive oil and rosemary",
  },
  {
    id: "2",
    heading: "Focaccia",
    desc: "Bread with italian olive oil and rosemary",
  },
  {
    id: "3",
    heading: "Focaccia",
    desc: "Bread with italian olive oil and rosemary",
  },
];

export function Main() {
  return (
    <div className="MainBox">
      <Heading title="Menu" description="Check Out Tasty Menu" />
      <Whyus support={data} />
      <Underline />
    </div>
  );
}
