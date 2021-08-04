import "./FilterByYear.css";

const FilterByYear = (props) => {
  const years = [
    {
      value: "2021",
      year: "2021"
    },
    {
      value: "2020",
      year: "2020"
    },
    {
      value: "2019",
      year: "2019"
    },
    {
      value: "2018",
      year: "2018"
    }
  ];

  const handleChange = (event) => {
    props.getYear(event.target.value);
  };
  return (
    <div className="dropdown-container">
      <div>
        <h1>Filter by year</h1>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <select className="dropdown" onChange={handleChange}>
          {years.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterByYear;
