// No JSX, so no need to import React
import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  /* add some state just to get this component to rerender */
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    /* wire up event listener */
    window.addEventListener("popstate", onLocationChange);

    /* for if we ever decide to not show the Route component */
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  
  return currentPath === path ? children : null;
};

export default Route;
