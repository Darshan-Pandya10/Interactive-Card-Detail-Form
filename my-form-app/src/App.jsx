import { useState } from 'react'
import './App.css'
import DisplayFormDetails from './DisplayFormDetails'
import Submit from './Submit'


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

  const regexForNumber = /^[0-9]{16}$/;
  const regexForMonth = /^(0[1-9]|1[0,1,2])$/
    const regexForYear = /^[00-99]{2}$/
  const regexForCvc = /^[0-9]{3}$/
  const regexForName = /^[a-z ,.'-]+$/i



  function handleNameChange(event){

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

 
  function handleChange(event){
    const {name , value} = event.target;
    const isValidNumber = regexForNumber.test(value);

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
    console.log(submit)
    console.log('clicked')
      return (
      <main>
        {submit && <Submit/>}
        </main>
        )   
    }


  //  const isFormValid = () => {
  //   return (
  //     formDetails.name !== '' &&
  //     formDetails.number !== '' &&
  //     formDetails.month !== '' &&
  //     formDetails.year !== '' &&
  //     formDetails.cvc !== ''
  //   );
  // };

  return (
    <div className='app overflow-hidden'>
    <DisplayFormDetails props={formDetails}/>
    <main>
    <form className='uppercase' onSubmit={handleSubmit}>

      <div className="group g-1">
      <label htmlFor="name">cardholder name</label>
      <input 
      type="text" 
      name="name"
      value={formDetails.name}
      className='block p-2 w-80 h-10 m-2 placeholder:p-2 rounded-lg' placeholder='e.g Jane Appleseed'
      onChange={handleNameChange}
      />
      {formDetails.NameCheck ||  <p className='error'>Please Enter Your Name</p>}
      </div>

      <div className="group g-2">
      <label htmlFor="number">card number</label>
      <input 
      type="text" 
      name="number" 
      maxLength={16}
      value={formDetails.number}
      className='block p-2 w-80 h-10 m-2 placeholder:p-2 rounded-lg' placeholder='e.g 1234 5678 9123 0000'
      onChange={handleChange}
      />
      {formDetails.NumberCheck ||  <p className='error'>Please Enter Appropriate Data : Number</p>}
      </div>

      <div className="group g-3">

      <div>
      <label htmlFor="date">exp. date (mm/yy)</label>
      <div className="input-group">
      <input 
      type="text" 
      name="month" 
      value={formDetails.month}
      required
      className='p-2 w-24 h-10 m-2 placeholder:p-2 rounded-lg' placeholder='MM'
      onChange={handleMonthInput}
      />



      <input 
      type="text" 
      name="year" 
      value={formDetails.year}
      className='p-2 w-24 h-10 m-2 placeholder:p-2 rounded-lg' placeholder='YY'
      onChange={handleYearInput}
      required
      />
      </div>
      <div className="error-div">
      { formDetails.MonthCheck ||  <p className='error'>Enter Month</p>}
      { formDetails.YearCheck ||  <p className='error error-year'>Enter Year</p>}
      </div>
     
      </div>


      <div>
      <label htmlFor="cvc">cvc</label>
      <div className="input-group">
      <input 
      type="text" 
      name="cvc" 
      maxLength={3}
      required
      value={formDetails.cvc}
      className='p-2 w-24 h-10 m-2 placeholder:p-2 rounded-lg' placeholder='e.g 123'
      onChange={handleCvcInput}
      />
      </div>
      { formDetails.CvcCheck ||  <p className='error'>Can't be blank</p>}
      </div>
      </div>
      <button className='btn' >Confirm</button>
    </form>
    </main>
    </div>
  )
}

export default App
// disabled={!isFormValid()}