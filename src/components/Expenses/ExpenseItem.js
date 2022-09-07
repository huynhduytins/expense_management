import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <li>
      <Card
        className="expense-item"
        onClick={() => props.handleDelete(props.key)}
      >
        <ExpenseDate date={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
