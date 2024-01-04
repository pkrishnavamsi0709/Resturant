import { Heading } from "./Heading";
import { Types } from "./Types";
import { Underline } from "./Underline";
import "./components.css";

export function Menu() {
  return (
    <div className="MainBox">
      <Heading title="Menu" description="Check Out Tasty Menu" />
      <Types types={["All", "Starters", "salads", "specality"]} />
      <Underline />
    </div>
  );
}
