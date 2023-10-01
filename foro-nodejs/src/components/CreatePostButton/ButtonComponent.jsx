import React from 'react'

function ButtonComponent({ onClick }) {
    return (
      <button onClick={onClick} variant="gradient">
      Create Post
      </button>
    );
  }
  

export default ButtonComponent
