import Calender from "./Calender";
import FilterByYear from "./FilterByYear";
import "./Expense.css";

const Expense = (props) => {
  const getYear = (year) => {
    console.log(year);
  };

  return (
    <div className="expense-container">
      <FilterByYear getYear={getYear} />
      {props.expenseItemArray.map(
        ({ id, product, price, date, month, year }) => {
          return (
            <div className="expense" key={id}>
              <div className="expenseList">
                <Calender date={date} month={month} year={year} />
                <h1 className="product">{product}</h1>

                <h2 className="price">${price}</h2>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Expense;
