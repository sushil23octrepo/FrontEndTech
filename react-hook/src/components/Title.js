import React from 'react'

function Title() {
    console.log("Rendered title")
  return (
    <h2>Use Callback hook</h2>
  )
}

export default React.memo(Title)