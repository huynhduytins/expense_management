import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((el) => {
        return (
          <ExpenseItem
            key={el.id}
            title={el.title}
            date={el.date}
            amount={el.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
