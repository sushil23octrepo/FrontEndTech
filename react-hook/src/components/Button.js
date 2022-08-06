import React from 'react'

function Button({handleClick,children}) {
    console.log("Rendering button-",children);
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(Button)

//React.memo prevent component from rerendering if no change on props or state