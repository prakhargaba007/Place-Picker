import { useEffect, useState } from "react";

const timer = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  const [remainingTime, setRemainingTime] = useState(timer)
  
  useEffect(() => {
    let intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10)
    }, 10);
    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    console.log("h1");
    const confirm = setTimeout(() => {
      onConfirm()
    }, timer);

    return () => {
      console.log("h2");
      clearTimeout(confirm)
    }
  }, [])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress id="hi" value={remainingTime} max={timer} />
    </div>
  );
}
