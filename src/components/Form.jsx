import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [age, setAge] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const liveHandler = (event) => {
    setLive(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUser = (event) => {
    event.preventDefault();

    if (
      name.trim().length === 0 ||
      live.trim().length === 0 ||
      age.trim().length === 0
    ) {
      alert("Add FUll detail");
      return;
    }

    const data = {
      name,
      live,
      age,
    };

    props.addWorker(data);

    setName("");
    setLive("");
    setAge("");
  };

  return (
    <>
      <form className="input-box" onSubmit={addUser}>
        <input
          type="text"
          placeholder="name"
          onChange={nameHandler}
          value={name}
        />
        <input
          type="text"
          placeholder="live"
          onChange={liveHandler}
          value={live}
        />
        <input
          type="text"
          placeholder="age"
          onChange={ageHandler}
          value={age}
        />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};
export default Form;
