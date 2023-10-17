import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditingForm, setIsEditingForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random(), toString
        };
        props.onAddExpense(expenseData)
        console.log(expenseData)
    }

    const handleAddNewExpenseClick = () => {
        setIsEditingForm((prevState) => setIsEditingForm(!prevState))
    }

    const content = isEditingForm ?
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelHandler={handleAddNewExpenseClick} />
        </div>
        :
        <div className="new-expense"><button onClick={handleAddNewExpenseClick}>Add new expense</button></div>

    return (
        <div>
            {content}
        </div>
    )
};

export default NewExpense;