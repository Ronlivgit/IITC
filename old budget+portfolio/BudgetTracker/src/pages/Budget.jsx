import { useEffect, useState } from "react";
import PrintBudget from '../components/Tracker/BudgetTracker'
import NavBar from "../components/Navbar"
import '../components/Tracker/BudgetTracker.css'
import LogIn from "../components/Authentication/LogIn";
import App from "../App.jsx";
import { dataBase } from '../config/firebaseConfig.js'
import {addDoc , collection, onSnapshot, setDoc , doc, getDoc, getDocs , deleteDoc} from 'firebase/firestore'


function Budget (props) {

    const [budgets,setBudget] = useState([])
    const [newBudget,newSetBudget] = useState({})

    const docRef = collection(dataBase,"Tracker");

    const budgetInput = (e) => {
        newBudget[e.target.name] = e.target.value
        newSetBudget({...newBudget})
    } 

    const budgetForm = async (e) => {
        //? docRef to refferal the fireStore collection we made (Tracker) = fireStore data's name
        //? addDoc will add the ...newBudget's value (payload now), to the collection (docRef) to store the details.
        //? payload : our newly valued Object to push in the array, syntax change, we place the BUDGET DOC inside the setBudget.
        //? await method has no catch of errors in compare to try&catch or fetch method.
        //? try and catch : being used to catch errors in things like async await code to return the error (without it, error will be general and not specific. )

        e.preventDefault();
        try {
            const budgetDoc = await addDoc(docRef,{...newBudget})
            console.log({budgetDoc});
            const trackerRef = doc(dataBase,"Tracker", budgetDoc.id);
            const newDoc = await getDoc(trackerRef)
            setBudget([...budgets, {...newDoc.data(), id:newDoc.id}])
            console.log(docRef);
        }
        catch (err){
            console.error(err);
        }
    }

    const getBudgets = async ()=>{
        try{
            const budgetDoc = await getDocs(docRef,{...newBudget})
            const docs = budgetDoc.docs.map((doc)=>{
                return {...doc.data(),id: doc.id}
            })
            console.table(docs);
            setBudget(docs)
        }
        catch (error){
            console.error(error);
        }
    }

    useEffect((e)=> {
        getBudgets()
    },[])

    //? onSnapshot : once infomartion being added, update it into my doc.
    //? after update of information we use map docs.map to re-set my data based on the last change (useful for Real Time data like chats and live feed.)
    //? 
    // useEffect(()=>{

    //     onSnapshot(docRef, (snapshot) => {
    //         setBudget(snapshot.docs.map(doc => {
    //             return {...doc.data(), id:doc.id}
    //         }))
    //     })
    // })
    //! end of onSnapshot example
    
    //? try and catch : being used to catch errors in things like async await code to return the error (without it, error will be general and not specific. )
    //? 

    //? can use the fetch syntax on addDoc, using 1 then that tells the code to keep going and then proccedd with code.
    //? syntax : addDoc( docRef, pushedObjective ), .catch errors
    // const fetchExample = async () =>{
    //     addDoc(docRef,newBudget)
    //     .then(budgetDoc => {
    //         setBudget([...budgets],{...newBudget});
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

    // }
    //! end of Fetch syntax method


    //? delete from fireStore :  trackerRef is the doc we want to delete from the fireStore, we use it to track the item
    //? then, we use await deleteDoc(trackerRef) to delete the chosen item 

    const deleteBudget = async(budget) =>{
        
        try{

            console.log(budget);
            const trackerRef = doc(dataBase,"Tracker", budget.id);
            console.log(trackerRef);
            await deleteDoc(trackerRef)
            
            //? Delete from the state (array.) :
            
            const filtered = budgets.filter((item) => {
                return item.id !== budget.id
            })
            setBudget(filtered)
        }
        catch (err){
            console.error(err);
        }
    }


    //! async = means ignore for now and keep going, after done the sync part, return to the async (if we use in const x = async () => {}) it means that function will be async.
    //! await = await used to "hold" the code until it returns what it waits for and then procceed with the code (can be used only in declared async function).
    
    return (
            props.isLoggedIn ?
        <>
            <form onSubmit={budgetForm} id="budgetForm">
                <input type="text" onChange={budgetInput} placeholder="Expense's title?" name="title" />
                <label for="type">Choose a type :</label>
                <select name="type" onChange={budgetInput}>
                    <option disabled selected></option>
                    <option value="Expense">Expense</option>
                    <option value="Income">Income</option>
                </select>
                <label for="category">Choose a reason :</label>
                <select name="category" onChange={budgetInput}>
                    <option disabled selected></option>
                    <option value="Transportation">Transportation</option>
                    <option value="Groceries">Grocery Store</option>
                    <option value="Debts">Debt payments</option>
                    <option value="Luxuries">Luxuries</option>
                    <option value="Events">Events</option>
                    <option value="Others">Others</option>
                </select>
                <input type="number" onChange={budgetInput} placeholder="Expense's amount ?" name="amount" />
                <button type="submit">Submit</button>
            </form>  
        
            {budgets.map((item,index) => {
                return <PrintBudget delrow={deleteBudget} tracker={item} key={index} />
            })}
        </>
        :
        <h1>PLEASE LOG IN TO USE APP!!</h1>
    )
    
}

export default Budget


// backup :

// useEffect ( () => {
//     const budgetData = JSON.parse(localStorage.getItem("budgetArray"))
//     if(budgetData ) {
//         setBudget(budgetData)
//     }
// },
// [])

// useEffect (() => {
//     localStorage.setItem("budgetArray", JSON.stringify(budgets))

// },
// [budgets])