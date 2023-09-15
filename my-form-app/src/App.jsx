import { useState } from 'react'
import './App.css'
import DisplayFormDetails from './DisplayFormDetails'
import Submit from './Submit'
import Form from './Form'


function App() {

  const [formDetails , setFormDetails] = useState({
    name: '',
    number: '',
    month: '',
    year:'',
    cvc:'',
    NameCheck : true,
    NumberCheck : true,
    MonthCheck : true,
    YearCheck : true,
    CvcCheck : true,
  })

  const [submit , setSubmit] = useState(false)

  const regexForNumber = /^\d{16}$/;
  const regexForMonth = /^(0[1-9]|1[0,1,2])$/
    const regexForYear = /^[00-99]{2}$/
  const regexForCvc = /^[0-9]{3}$/
  const regexForName = /^[a-z ,.'-]+$/i



  function handleNameInput(event){

    const {name , value} = event.target;
    const isvalidName = regexForName.test(value)
        setFormDetails((prevFormDetails) => {
         return {
          ...prevFormDetails , 
          [name] : value,
          NameCheck : isvalidName,
        }
        })
  }

 
  function handleNumberInput(event){
    const {name , value} = event.target;
    const isValidNumber = regexForNumber.test(value);
    console.log(isValidNumber)
        setFormDetails((prevFormDetails) => {
         return {
          ...prevFormDetails , 
          [name] : value,
          NumberCheck : isValidNumber,
        }
        })
  }

  function handleMonthInput(event){
        const {name , value} = event.target;
        const isValidMonth = regexForMonth.test(value)

        setFormDetails((prevFormDetails) => {
          return {
            ...prevFormDetails , 
            [name] : value,
            MonthCheck : isValidMonth,
          }
        })
  }

   function handleYearInput(event){
        const {name , value} = event.target;
        const isValidYear = regexForYear.test(value)

        setFormDetails((prevFormDetails) => {
          return {
            ...prevFormDetails , 
            [name] : value,
            YearCheck : isValidYear,
          }
        })
  }

  function handleCvcInput(event){
        const {name , value} = event.target;
        const isValidCvc = regexForCvc.test(value)

        setFormDetails((prevFormDetails) => {
          return {
            ...prevFormDetails , 
            [name] : value,
            CvcCheck : isValidCvc,
          }
        })
  }

  function handleSubmit(e){
    setSubmit(true)
    e.preventDefault()
    }

 
   const isFormValid = () => {
    return (
      formDetails.name !== '' && 
      formDetails.number !== '' &&
      formDetails.month !== '' &&
      formDetails.year !== '' &&
      formDetails.cvc !== ''
    );
  };

  return (

    <div className='app overflow-hidden'>
    <DisplayFormDetails props={formDetails}/>
    
    {submit ? <Submit/> : <main>
    <Form props={formDetails} 
    onchangename={handleNameInput}
    onchangenumber={handleNumberInput}
    onchangemonth={handleMonthInput}
    onchangeyear={handleYearInput}
    onchangecvc={handleCvcInput}
    onformsubmit={handleSubmit}
    isformvalid={isFormValid} />
    </main>}
    
    </div>
    
  )
}

export default App
