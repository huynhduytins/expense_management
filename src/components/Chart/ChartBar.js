import React, { useState, useEffect } from "react";
import "./ChartBar.css";

const CharBar = (props) => {
  const [height, setHeight] = useState("100%");

  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  useEffect(() => {
    let timer = setTimeout(() => setHeight(barFillHeight), 500);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: height }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default CharBar;
