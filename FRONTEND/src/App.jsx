import React, { useState  , useEffect} from "react"
import './App.css'
import { use } from "react";

function App() {

  const [amount ,setAmount] = useState(1);
  const [currencies ,setCurrencies] = useState([]);
  const [fromCurrency , setFromCurrency] = useState("");
  const [toCurrency , setToCurrency] = useState("");
  const [convertedAmount , setConvertedAmount] = useState(0);

  useEffect (() =>{
    const fetchcurrencies = async () =>{
      try{
        const response = await fetch("http://localhost:3000/api/getlist")
        const data =await response.json();
        console.log(data);
        setCurrencies(data.currencies);
        setFromCurrency(data.currencies[0].code); 
        setToCurrency(data.currencies[1].code);   
        
      }catch(error){
        console.error("Error fetching currencies:", error);
      }
    };
    fetchcurrencies();
  } , []);


  const  handleAmountChnage = (e) =>{
    setAmount(e.target.value);
  }

  const handleswap = () =>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  useEffect (() => {
    const  convertedCurrency = async () =>{
      if ( fromCurrency && toCurrency ){
        try{
          const response = await fetch("http://localhost:3000/api/convert" ,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({amount , from:fromCurrency , to:toCurrency}),
          });

          const data = await response.json();
          setConvertedAmount(data.amount);
        }catch(error){
          console.error("Error in currency conversion:", error);
        }
      }
    };
      convertedCurrency();
  },[amount , fromCurrency , toCurrency]);

  return (
    <>
    <div className="currency-converter-container">
      <h1>Currency Converter</h1>

      <div className="converter">
        {/*  from currency section */}
        <div className="currency-box">
          <input type="number" 
          placeholder="Enter Amount" 
          value={amount}
           onChange={handleAmountChnage}
          />
           <select value ={fromCurrency} 
           onChange={(e) => setFromCurrency(e.target.value)}>

            {currencies.map((currency , index) => (
              <option key= {index} value={currency.code}>
                {currency.country} ({currency.code})
              </option>
            ))}
           </select>
        </div>

        {/* arrow*/}
        <div className="arrow" onClick={handleswap}>⇌</div>

        {/*  to currency section */}
        <div className="currency-box">
          <div className="converted-box">{convertedAmount}</div>
          <select value={toCurrency} onChange={(e) =>setToCurrency(e.target.value)}>
          {currencies.map((currency , index) => (
              <option key= {index} value={currency.code}>
                {currency.country} ({currency.code})
              </option>
          ))}
          </select>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
