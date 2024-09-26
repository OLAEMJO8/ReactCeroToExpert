import React from "react";
import PropTypes from "prop-types";
const CounterApp = ({ value }) => {
  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
    </div>
  );
};

export default CounterApp;

CounterApp.prototype = {
  value: PropTypes.number.isRequiered,
};
