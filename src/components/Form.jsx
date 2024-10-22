import { useRef, useState } from "react";

const Form = (props) => {
  const nameRef = useRef("");
  const liveRef = useRef("");
  const ageRef = useRef("");

  const addUser = (event) => {
    event.preventDefault();

    if (
      nameRef.current.value.trim().length === 0 ||
      liveRef.current.value.trim().length === 0 ||
      ageRef.current.value.trim().length === 0
    ) {
      alert("Add FUll detail");
      return;
    }

    const data = {
      name: nameRef.current.value,
      live: liveRef.current.value,
      age: ageRef.current.value,
    };

    props.addWorker(data);
  };

  return (
    <>
      <form className="input-box" onSubmit={addUser}>
        <input type="text" placeholder="name" ref={nameRef} />

        <input type="text" placeholder="live" ref={liveRef} />

        <input type="text" placeholder="age" ref={ageRef} />

        <button type="submit">Add User</button>
      </form>
    </>
  );
};
export default Form;
