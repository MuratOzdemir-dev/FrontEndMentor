import React, { useState, useEffect } from "react";
import Slider from "react-input-slider";

const Main = () => {
  const [state, setState] = useState({ x: 50 });
  const [payment, setPayment] = useState(8);
  const [isDiscount, setIsDiscount] = useState(false);

  const handleCheck = (e) => {
    setIsDiscount(e.target.checked);
  };

  useEffect(() => {
    if (state.x < 5) {
      setPayment(() => (isDiscount ? (8 / 100) * 75 : 8));
    } else if (state.x < 10) {
      setPayment(() => (isDiscount ? (12 / 100) * 75 : 12));
    } else if (state.x < 50) {
      setPayment(() => (isDiscount ? (16 / 100) * 75 : 16));
    } else if (state.x < 100) {
      setPayment(() => (isDiscount ? (24 / 100) * 75 : 24));
    } else {
      setPayment(() => (isDiscount ? (36 / 100) * 75 : 36));
    }
  }, [state, isDiscount]);

  return (
    <main className="main container">
      <h4 className="main__title">
        {state.x === 100 ? "1M" : `${state.x * 10}K`} PAGEVIEWS
      </h4>
      <div className="main__slider">
        <Slider
          styles={{
            track: {
              backgroundColor: "hsl(223, 50%, 87%)",
              width: "100%",
              margin: "2rem 0",
              cursor: "ew-resize",
            },
            active: { backgroundColor: "hsl(174, 77%, 80%)" },
            thumb: {
              display: "flex",
              justifyCcontent: "center",
              alignItems: "center",
              backgroundColor: "hsl(174, 86%, 45%)",
              width: "39px",
              height: "39px",
              boxShadow: "0px 10px 35px hsl(174, 86%, 45%)",
              cursor: "ew-resize",
            },
          }}
          axis="x"
          xstep={1}
          xmin={1}
          xmax={100}
          x={state.x}
          onChange={({ x }) => setState({ x })}
        />
      </div>
      <div className="main__price">
        <strong>${payment}.00</strong>
        <span>/ month</span>
      </div>
      <div className="main__check">
        <label>
          Month
          <input
            type="checkbox"
            onChange={handleCheck}
            className="main__check__switch"
          />
          Year <span className="main__check__discount">-25%</span>
        </label>
      </div>
      <hr />
      <div className="main__footer">
        <div className="main__footer__text">
          <p>
            <span className="icon">&#x2713;</span>Unlimited Websites
          </p>
          <p>
            <span className="icon">&#x2713;</span>100% Data ownership
          </p>
          <p>
            <span className="icon">&#x2713;</span>Email reports
          </p>
        </div>
        <button className="main__footer-btn">Start my trial</button>
      </div>
    </main>
  );
};

export default Main;
