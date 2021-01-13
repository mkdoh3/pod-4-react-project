import React from 'react';

const Picture = props => {
  console.log(props);
  return (
    <div><img src={props.src}></img></div>
  )
}

export default Picture;