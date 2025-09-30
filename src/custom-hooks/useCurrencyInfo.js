import { useEffect, useState } from "react";

//customised hook
function useCurrencyInfo(currency){
    const [data, setData]= useState({}); //given an empty object as initial value
    //call an API
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
        //instead of usd you can say "inr" that will give you the details abt inr
        //using fetch you can do chaining by putting ".then" after the fetch
        .then((res)=> res.json())  //response is converted to json format
        .then((res)=>setData(res[currency]))//hold the json response. if you give currency as inr then it will give you the details abt inr, if you give as usd then it will give you the details abt usd. basically usd and inr are key values in the json response. and can access the object using a square bracket or dot notation.
        console.log(data);
        
    },[currency]) //useEffect hook take 2 parameters, 1st is the callback fun and 2nd parameter is the the dependency array. dependency array mean if any value in the array changes then only the useEffect will run again. if we pass empty array then it will run only once when the component mounts.
    console.log(data);
    return data; //return the data
}
export default useCurrencyInfo;