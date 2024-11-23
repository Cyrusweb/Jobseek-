import React from "react";
import PropTypes from "prop-types";
function Btn(props) {
  const { className } = props;
  return (
    <>
      <main>
        <button className={`vl ${className}`}>
          <span className="inner">Sign up</span>
        </button>
      </main>
    </>
  );
}

Btn.propTypes = {
  className: PropTypes.string,
};

export default Btn;
