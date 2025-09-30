import React, {useId} from 'react'

//useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisabled=false,
    currencyDisabled=false,
    className = "",
}) {
    const amountInputId = useId();  // this will generate a unique id for the amount input field. this is useful for accessibility purposes, so that screen readers can read the label and the input field together.


    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label} 
                    {/* wrap label to get the value from the variable */}
                    {/* bind "amountInputId" label using htmlfor, to the label */}
                </label>
                <input
                // also bind with input using id, so that screen readers can read the label and the input field together.
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} //if the amount changes it will call the function. to use the onchange method where the other components are aware of the changes. fire an event and call onAmountChange method. since you cant pass a default value to the onAmountChange function, so its likely to crash if you dont pass a value to it. so we use "&&" 2 amphecent signs to check if the function exists or not. if it exists then call it otherwise do nothing.its a checker to check if it exists and the n only to call it. note: most of the time js takes strings inside an event. so have to wrap inside a Number to convert it to a number.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} //same as above comment
                    disabled={currencyDisabled}
                    >
                    
                    
                        {currencyOption.map((currency)=>(
                            //if you want performance in your loop to repeat the elements, then u have to pass the key value. remeber the key in loops in react.
                            <option key={currency} value ={currency}> 
                                {currency}
                            {/* this is the value that will be passed to the onCurrencyChange function. */}
                            {/* if you want to pass a default value to the onCurrencyChange function, then you have to pass it as a prop to the component. */}
                            {/* this is the value that will be displayed in the select box. */}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;




