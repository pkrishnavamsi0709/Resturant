import { Main } from "./components/Main";
import "./index.css";
import "./components/components.css";
import { Menu } from "./components/Menu";
import { Scroll } from "./components/Scroll";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Menu />
      <Main />
      {/* <div className="ScollerBg">
        <Scroll />
      </div> */}

      <ContactUs />
    </div>
  );
}

export default App;
