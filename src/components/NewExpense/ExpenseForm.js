import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // --- SINGLE STATE SOLUTION ---
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value)
        // --- ALTERNATIVE TO MULTIPLE STATE OPTION ---
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // --- IF DEPENDING ON PEREVIOUS STATE E.G. A COUNTER ---
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
    }

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: ''
        // })
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: ''
        // })
    }

    // const inputChangeHandler = (id, value) => {
    //     if (id === 'title') {
    //         setEnteredTitle(value)
    //     } else if (id === 'amount') {
    //         setEnteredAmount(value)
    //     } else if (id === 'date') {
    //         setEnteredDate(value)
    //     }
    // }

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    {/* <input type="text" onChange={(event) => { inputChangeHandler('title', event.target.value) }} /> */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;