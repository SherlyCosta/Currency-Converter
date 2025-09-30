import { useState } from 'react'
import {InputBox} from './components/Index'
import useCurrencyInfo from './custom-hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  //use hooks
  const currencyInfo= useCurrencyInfo("usd")
  const options=currencyInfo ?  Object.keys(currencyInfo) : []

  //swap
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  // setConvertedAmount is final result will be displayed. basically the multiplication of the amount and the conversion rate.
  const convert=()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

   return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                  backgroundImage: `url("https://images.pexels.com/photos/18341554/pexels-photo-18341554.jpeg?_gl=1*1a9w806*_ga*MTk0MzQzMDUxNS4xNzU3MDUzNjY0*_ga_8JE65Q40S6*czE3NTc3NDMwMDYkbzIkZzEkdDE3NTc3NDUzMTIkajEwJGwwJGgw")`,
              }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=> setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=> setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap} //give reference of the fn
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=> setTo(currency)}
                                selectCurrency={to}
                                amountDisabled
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
