import './App.css'

function DisplayFormDetails({props}){
    const {name , number , month , year , cvc} = props
    const numArray = number.split('');
    return (
        <div className="display h-screen relative">
            <div className="frontCard absolute top-28 left-40 ">
                <div className="front-details-parent relative text-white">
                <h4 className='cardname text-1xl font-semibold absolute top-4 left-4'>MASTER CARD</h4>
                <h2 className='number font-medium tracking-wider text-3xl absolute bottom-20 left-8'>{number ?
                <div className='display-number'>
                <p>{numArray[0]}{numArray[1]}{numArray[2]}{numArray[3]}</p>
                <p>{numArray[4]}{numArray[5]}{numArray[6]}{numArray[7]}</p>
                <p>{numArray[8]}{numArray[9]}{numArray[10]}{numArray[11]}</p>
                <p>{numArray[12]}{numArray[13]}{numArray[14]}{numArray[15]}</p>

                </div>
                 : '0000 0000 0000 0000'}</h2>
                <p className='name font-medium tracking-wider text-sm absolute bottom-6 left-10 uppercase'>{name ? name : 'Jane Appleseed'}</p>
                <p className='date font-medium tracking-wider text-sm absolute bottom-6 right-10'> {month ? month : '00'} / {year ? year : '00'} </p>
                </div>
            </div>

            <div className="backCard absolute top-96 mt-2 left-60">
                <div className="back-details-parent relative">
                    <p className='cvc font-medium text-sm absolute text-white'>{cvc ? cvc : '000'}</p>
                </div>
            </div>
        </div>
    )
}

export default DisplayFormDetails;