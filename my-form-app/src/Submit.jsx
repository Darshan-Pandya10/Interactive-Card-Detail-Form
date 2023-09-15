 import image from './assets/check.svg'
 
 function Submit(){
    return (
        <main className="submit">
            <img className='img' src={image} alt="" />
            <h1>THANK YOU!</h1>
            <h4>We've added your card details</h4>
            <button className=" btn ctn-btn">Continue</button>
        </main>
          
    )
 }

 export default Submit;
 
