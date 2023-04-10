import { useState, useEffect } from "react";
// import { FaTimes } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
export default function Card(props) {
  const [clicked, setClicked] = useState(false);
 
  console.log(clicked);
  
  function handleClick() {
    setClicked(!clicked);
  }
  useEffect(() => {
    let timeOutId = null;
    if (clicked) {
      timeOutId = setTimeout(() => {
        setClicked(!clicked);
      }, 2000);
    }
    return () => clearTimeout(timeOutId);
  }, [clicked]);

  return (
    <div className="card" onClick={handleClick}>
      <p>{props.todo}</p>
      <div className="card-icon">
        {clicked && <MdDeleteForever onClick={props.handleClick} />}
      </div>
    </div>
  );
}
