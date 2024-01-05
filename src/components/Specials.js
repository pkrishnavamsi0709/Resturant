import { Heading } from "./Heading";
import SpecialsMain from "./SpecialsMain";
import "./components.css";

function Specials() {
  return (
    <div className="MainBox">
      <Heading title="SPECAILS" description="Check Out Tasty Menu" />
      <SpecialsMain />
    </div>
  );
}

export default Specials;
