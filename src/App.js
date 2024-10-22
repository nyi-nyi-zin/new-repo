import { useState } from "react";
import Form from "./components/Form";
import Worker from "./components/Workers";

function App() {
  const [workers, setWorkers] = useState([]);

  const addWorker = (workerInfo) => {
    setWorkers([...workers, workerInfo]);
  };

  let content = <p>Please Add New Workers</p>;

  if (workers.length > 0) {
    content = workers.map((worker) => (
      <Worker
        name={worker.name}
        live={worker.live}
        age={worker.age}
        key={worker.name}
      />
    ));
  }

  return (
    <>
      <div className="main-div">
        <Form addWorker={addWorker} />
        <div>{content}</div>
      </div>
    </>
  );
}

export default App;
