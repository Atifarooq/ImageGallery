import React from 'react';

const Asidebar = props => {
  return (
    <aside className="asidebar">
      {props.children}
    </aside>
  );
}

export default Asidebar;
