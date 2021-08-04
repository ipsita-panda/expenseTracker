import "./styles.css";
import expenseItem from "./expenseItem";
import Expense from "./components/Expense";

import InputForm from "./components/InputForm";
import { useState } from "react";

export default function App() {
  const [expenseItemArray, setExpenseItemArray] = useState(expenseItem);
  return (
    <div>
      <InputForm
        expenseItemArray={expenseItemArray}
        setExpenseItemArray={setExpenseItemArray}
      />
      <Expense expenseItemArray={expenseItemArray} />
    </div>
  );
}
