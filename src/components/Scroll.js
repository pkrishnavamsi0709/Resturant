import { useState } from "react";
import { Carousel } from "./Carousel";
import "./components.css";
import { Heading } from "./Heading";

export function Scroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Birthday Parties",
      photoName: "images/event1.png",
      price: "23",
    },
    {
      title: "Coustom Parties",
      photoName: "images/event2.png",
      price: "11",
    },
    {
      title: "private Parties",
      photoName: "images/event3.png",
      price: "19",
    },
  ];

  function app(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    console.log(newIndex);
    setActiveIndex(newIndex);
  }
  return (
    <>
      <Heading title="Menu" description="Check Out Tasty Menu" />
      <div>
        <div className="eventHeader"></div>
        <div className="App">
          <div className="carousel">
            <div
              className="inner"
              style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
              {items.map((item) => {
                return <Carousel item={item} width={"100%"} />;
              })}
            </div>

            <div className="carousel-buttons">
              <div className="indicators">
                {items.map((item, index) => {
                  return (
                    <button
                      className="indicator-buttons"
                      onClick={() => {
                        app(index);
                      }}
                    >
                      <span
                        className={`material-symbols-outlined ${
                          index === activeIndex
                            ? "indicator-symbol-active"
                            : "indicator-symbol"
                        }`}
                      >
                        O
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
