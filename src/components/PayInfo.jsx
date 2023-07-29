import React, { useState } from 'react'
import iconClock from "../icons/Icon Clock.svg"
import razorpay from "../icons/Razorpay Icon.png"
import "./PayInfo.css"
import checked from "../icons/RadioButton.png"


const PayInfo = () => {
  const num = 18321;
  const formatedNum = num.toLocaleString();
  const [coursePrice,setCoursePrice] = useState(179);
  const [amount,setAmount] = useState(formatedNum);
  const [selectedOption,setSelectedOption] = useState(179);
  // const [count,setCount] = useState(1);
  // // setCoursePrice(selectedOption);
  // const count = 1;
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setCoursePrice(event.target.value);
    setAmount((18500-event.target.value).toLocaleString());
    // setCount(1);
  };


  // console.log(selectedOption)

  function changeHandler(){

  }

 

  return (
    <div className='top-level-1'>

      <div className='pay-header'>
        <div className='pay-header-content'>
          <p>1</p>
          <p>Sign Up</p>
        </div>
        <div className='pay-header-content'>
          <p>2</p>
          <p>Subscribe</p>
        </div>
      </div>

      <div className='plan'>
        <h3>Select your subcription plan</h3>
      </div>

      <div>
        <form className='form-style'>
          <div className='form-field'>
            <div className='input-field'>
            <div className='offer'>offer expired</div>
              <input 
                type='radio'
                value={99}
                id='expired'
                className='sample-1'
                disabled
              />
              <label htmlFor='expired' >12 Months Subscription</label>
            </div>
            <div className='price-div'>
              <div className='total-price'>
                <p>Total</p>
                <h4>₹ 99</h4>
              </div>
              <div className='monthly-price'>
                <p>₹ 8</p>
                <p>/mo</p>
              </div>
            </div>
          </div>

          <div className='form-field-1'>
            <div className='input-field-1'>
            <div className='offer-2'>Recommended</div>
              <input 
                type='radio'
                value={179}
                id='option1'
                // checked={selectedOption === 179 && count }
                onChange={handleOptionChange}
                name="plan"
                className='sample'
                defaultChecked
              />
              {/* <span><img src={checked} className='icon-checked' /></span> */}
              <label htmlFor='option1' >12 Months Subscription</label>
            </div>
            <div className='price-div-1'>
              <div className='total-price-1'>
                <p>Total</p>
                <h4>₹ 179</h4>
              </div>
              <div className='monthly-price-1'>
                <p>₹ 15</p>
                <p>/mo</p>
              </div>
            </div>
          </div>

          <div className='form-field-2'>
            <div className='input-field-1'>
            
              <input 
                type='radio'
                value={149}
                id='option2'
                // checked={selectedOption === 149}
                onChange={handleOptionChange}
                className='sample'
                name="plan"
              />
              <label htmlFor='option2' >6 Months Subscription</label>
            </div>
            <div className='price-div-1'>
              <div className='total-price-1'>
                <p>Total</p>
                <h4>₹ 149</h4>
              </div>
              <div className='monthly-price-1'>
                <p>₹ 25</p>
                <p>/mo</p>
              </div>
            </div>
          </div>

          <div className='form-field-2'>
            <div className='input-field-1'>
              <input 
                type='radio'
                value={99}
                id='option3'
                // checked={selectedOption === 99}
                onChange={handleOptionChange}
                className='sample'
                name="plan"
              />
              <label htmlFor='option3' >3 Months Subscription</label>
            </div>
            <div className='price-div-1'>
              <div className='total-price-1'>
                <p>Total</p>
                <h4>₹ 99</h4>
              </div>
              <div className='monthly-price-1'>
                <p>₹ 33</p>
                <p>/mo</p>
              </div>
            </div>
          </div>
          
        </form>

        <div className='line'>
          <div className='subs-fee'>
            <p>Subscription Fee</p>
            <p>₹ 18,500</p>
          </div>
          <div className='limited-offer'>
            <div className='discount-amount'>
              <h5>Limited time offer</h5>
              <p>- ₹{amount}</p>
            </div>
            <div className='clock'>
              <img src={iconClock} />
              <p>Offer valid till 25th August 2023</p>
            </div>
          </div>

          <div className='total-price'>
            <div className='total-gst'>
              <h2>Total</h2>
              <p>(Incl. of 18% GST)</p>
            </div>
            <div className='course-price'>₹{coursePrice}</div>
          </div>
        </div>

        <div className='btns'>
          <button className='cancel'>
            Cancel
          </button>
          <button className='pay'>
            Proceed To Pay
          </button>
        </div>

        <div>
          <img src={razorpay} />
        </div>
      </div>
    </div>
  )
}

export default PayInfo