import "./Calender.css";

const Calender = (props) => {
  return (
    <div className="calender">
      <h3>{props.date}</h3>
      <h2>{props.month}</h2>
      <h4>{props.year}</h4>
    </div>
  );
};

export default Calender;
