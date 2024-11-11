import React from "react";

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

export default Btn;
