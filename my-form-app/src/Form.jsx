function Form({props , onchangename , onchangenumber , onchangemonth , onchangeyear , onchangecvc , onformsubmit , isformvalid}){
    const {name , number , month , year , cvc , NameCheck , NumberCheck , MonthCheck , YearCheck , CvcCheck} = props
    return (

        <form className='uppercase' onSubmit={onformsubmit}>
      <div className="group g-1">
      <label htmlFor="name">cardholder name</label>
      <input 
      type="text" 
      name="name"
      value={name}
      className='block p-2 w-80 h-10 m-2 placeholder:p-2 rounded-lg' placeholder='e.g Jane Appleseed'
      onChange={onchangename}
      />
      {NameCheck ||  <p className='error'>Please Enter Your Name</p>}
      </div>

      <div className="group g-2">
      <label htmlFor="number">card number</label>
      <input 
      type="text" 
      name="number" 
      maxLength={16}
      value={number}
      className='block p-2 w-80 h-10 m-2 placeholder:p-2 rounded-lg' placeholder='e.g 1234 5678 9123 0000'
      onChange={onchangenumber}
      />
      {NumberCheck ||  <p className='error'>Please Enter Appropriate Data : Number</p>}
      </div>

      <div className="group g-3">

      <div>
      <label htmlFor="date">exp. date (mm/yy)</label>
      <div className="input-group">
      <input 
      type="text" 
      name="month" 
      value={month}
      required
      className='p-2 w-24 h-10 m-2 placeholder:p-2 rounded-lg' placeholder='MM'
      onChange={onchangemonth}
      />



      <input 
      type="text" 
      name="year" 
      value={year}
      className='p-2 w-24 h-10 m-2 placeholder:p-2 rounded-lg' placeholder='YY'
      onChange={onchangeyear}
      required
      />
      </div>
      <div className="error-div">
      { MonthCheck ||  <p className='error'>Enter Month</p>}
      { YearCheck ||  <p className='error error-year'>Enter Year</p>}
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
      value={cvc}
      className='p-2 w-24 h-10 m-2 placeholder:p-2 rounded-lg' placeholder='e.g 123'
      onChange={onchangecvc}
      />
      </div>
      { CvcCheck ||  <p className='error'>Can't be blank</p>}
      </div>
      </div>
      <button className='btn' disabled={!isformvalid()} >Confirm</button>
    </form>
    )
}

export default Form;