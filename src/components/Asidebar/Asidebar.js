import React from 'react';

const Asidebar = props => {
  return (
    <aside className="flex asidebar" role="contentinfo" aria-label="Side Bar">
      {props.children}
    </aside>
  );
}

export default Asidebar;
