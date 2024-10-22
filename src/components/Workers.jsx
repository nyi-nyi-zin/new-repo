const Worker = (props) => {
  const name = props.name;
  const live = props.live;
  const age = props.age;
  return (
    <div className="result">
      Name: {name}
      <br></br>
      Live: {live}
      age:{age}
    </div>
  );
};
export default Worker;
