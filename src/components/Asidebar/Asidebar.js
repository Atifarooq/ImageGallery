import React from 'react';

const Asidebar = props => {
  return (
    <aside className="flex asidebar">
      {props.children}
    </aside>
  );
}

export default Asidebar;
