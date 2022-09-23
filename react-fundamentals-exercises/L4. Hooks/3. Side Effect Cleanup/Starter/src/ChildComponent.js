import React, { useState, useEffect } from "react";

function ChildComponent() {
  const [color, setColor] = useState("red");
  
  
  useEffect(() => {
    let mounted = true;

    setTimeout(() => {
      if (mounted) {
        setColor("green");
      }
       
      else{// for testing
        console.log('cancled')
      }
    }, 3000);

    return () => {
      mounted = false;
    };
  });


  return <p style={{ color }}>{color}</p>;
}


export default ChildComponent;