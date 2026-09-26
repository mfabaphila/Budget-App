import "./App.css"
import {useState} from "react"

export default function App(){
  const [salary, setSalary] = useState("")
const [freelance, setFreelance] = useState("")
const [business, setBusiness] = useState("")
const [investments, setInvestments] = useState("")
const [rent, setRent]=useState("")
const [groceries, setGroceries] = useState("")
const [transport, setTransport] = useState("")
const[electricity, setElectricity] = useState ("")

const totalIncome = Number(salary) + Number(freelance) + Number(business) + Number(investments)
const totalExpenses =  Number(rent) + Number(groceries) + Number(transport) + Number(electricity)
const balance = totalIncome-totalExpenses
const balancepercentage = totalExpenses/totalIncome*100

return(
 <div className="budget">
  <h1>Thee Budget App</h1>
  
  <fieldset className="income">
    <legend>Enter Your Incomes</legend>
    <label>Salary</label>
<input 
type ="number"
placeholder="Enter a Salary"
value={salary}
onChange = {(e)=>setSalary(e.target.value)}

/>

<label>Freelance</label>
<input
  type="number"
  placeholder="Enter Freelance Income"
  value={freelance}
  onChange={(e) => setFreelance(e.target.value)}
/>

<label>Business</label>
<input
  type="number"
  placeholder="Enter Business Income"
  value={business}
  onChange={(e) => setBusiness(e.target.value)}
/>

<label>Investments</label>
<input
  type="number"
  placeholder="Enter Investment Income"
  value={investments}
  onChange={(e) => setInvestments(e.target.value)}
/>
  </fieldset>

  <fieldset>
    <legend>Enter Your Expenses</legend>
    <label>Rent</label>
    <input
    type ="number"
    placeholder="Enter your Rent"
    value={rent}
    onChange ={(e)=>setRent(e.target.value)}
    />

<label>Groceries</label>
<input
  type="number"
  placeholder="Enter your Groceries"
  value={groceries}
  onChange={(e) => setGroceries(e.target.value)}
/>

<label>Transport</label>
<input
  type="number"
  placeholder="Enter your Transport"
  value={transport}
  onChange={(e) => setTransport(e.target.value)}
/>

<label>Electricity</label>
<input
  type="number"
  placeholder="Enter your Electricity"
  value={electricity}
  onChange={(e) => setElectricity(e.target.value)}
/>
  </fieldset>
  <fieldset className="results">
    <p>Total Income: R{totalIncome}</p>
    <p>Total Expenses: R{totalExpenses}</p>
    <p> Balance: R{balance}</p>
    <p>Balance percentage {balancepercentage}% </p>
  </fieldset>
  </div>
  
)

};