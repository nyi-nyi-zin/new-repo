const Worker = (props) => {
  const name = props.name;
  const live = props.live;
  const age = props.age;
  return (
    <div className="result">
      Name: {name}
      <br />
      Live: {live}
      <br />
      Age:{age}
    </div>
  );
};
export default Worker;
