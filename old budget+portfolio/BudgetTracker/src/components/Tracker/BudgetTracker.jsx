import Budget from "../../pages/Budget"
import './BudgetTracker.css'


function PrintBudget (props) {
    return (
        <>
            <div className="transactionDiv">
                <h2>Title : {props.tracker.title}</h2>
                <p>Type : {props.tracker.type}</p>
                <p>Amount : {props.tracker.amount} Shekels</p>
                <p>Category : {props.tracker.category}</p>
                <button className="removeBtn" onClick={()=>props.delrow(props.tracker)}>Press to remove</button>
            </div>
        </>
    )
}


export default PrintBudget