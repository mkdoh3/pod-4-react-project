import React from 'react';

const Picture = props => {
  console.log(props);
  return (
    <div><img src={props.images.message}></img></div>
  )
}

export default Picture;