import './Expenses.css'
import ExpensesList from './ExpensesList';
import Card from '../UI/Card'; 
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './ExpensesFilter.css';
import './ExpensesList.css'
import { useState } from 'react';

const Expenses = props => {

    const [selectedDate, setSelectedDate] = useState("2020");

    const onFilterSelection = selectedYear => {
        setSelectedDate(selectedYear);
        console.log(props.selectedDate)
    }

    let filteredExpenses = props.expenses.filter(v => { return v.date.getFullYear().toString() === selectedDate })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedDate={selectedDate} onFilterSelection={onFilterSelection} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}
export default Expenses;