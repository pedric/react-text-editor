import React, { useState } from 'react';

const DisplayBlock = (props) => {
  
  // console.log(props);

  // makeContent = (content) => {
  //   return 
  // }

  return(
    <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
  )

}

export default DisplayBlock;