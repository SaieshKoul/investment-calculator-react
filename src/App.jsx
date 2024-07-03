import Header from "./Header"
import Results from "./Results"
import { useState } from "react"
import UserInput from "./UserInput"

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })
  
  const isValid = userInput.duration >= 1

  function handleChange(evt) {
    const changedField = evt.target.name
    const newValue = evt.target.value

    setUserInput(currData => {
      currData[changedField] = +newValue
      return { ...currData }
    })
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} inputChange={userInput} />
      {isValid ? <Results displayInput={userInput}/> : <p className="center"> Duration must be greater or equal to 1 </p>}
    </>
  )
}


