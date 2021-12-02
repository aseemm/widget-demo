import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    /* handle command clicks, windows and mac */
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    /* to update URL */
    window.history.pushState({}, "", href);

    /* emit event */
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
