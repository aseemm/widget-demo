import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  /* run only once when component gets created */
  useEffect(() => {
    const onBodyClick = (event) => {
      // console.log(event.target);
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    /* Listeners with addEventListener will get called before any React listeners */
    document.body.addEventListener("click", onBodyClick, { capture: true });

    /* cleanup if components gets removed */
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      /* don't render anything */
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          // console.log("Item clicked");
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            // console.log("Dropdown clicked");
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
