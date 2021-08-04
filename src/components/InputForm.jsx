import "./InputForm.css";
import React, { useState } from "react";

const InputForm = (props) => {
  //USING SINGLE STATE
  // const [inputData,setInputData] = useState({
  //   enteredTitle:"",
  //   enteredPrice:"",
  //   enteredDate:""
  // })

  // const titleChangeHandler = (event) =>{
  //  setInputData(
  //    (prevState) =>({...prevState, enteredTitle:event.target.value})
  //  )
  // }

  // USING MULTIPLE STATES
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const titleChangeHandler = (event) => {
    return setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    return setEnteredDate(event.target.value);
  };

  const priceChangeHandler = (event) => {
    return setEnteredPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      product: enteredTitle,
      price: enteredPrice,
      date: enteredDate
    };

    props.setExpenseItemArray([expenseData, ...props.expenseItemArray]);

    return expenseData;
  };

  return (
    <div>
      <form className="container" onSubmit={submitHandler}>
        <input
          className="inputTitle"
          type="text"
          placeholder="Enter Title"
          onChange={titleChangeHandler}
        />

        <input
          className="inputPrice"
          type="number"
          placeholder="Price"
          onChange={priceChangeHandler}
        />

        <input className="inputDate" type="date" onChange={dateChangeHandler} />

        <button className="newExpenseButton" type="submit">
          New Expense
        </button>
      </form>
    </div>
  );
};

export default InputForm;
