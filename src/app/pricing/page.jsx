import React from 'react';
import PriceHead from '../components/pricing/PriceHead';
import Result  from '../components/pricing/Results';


export const metadata = {
  title: "Expedify Pricing",
};




export default function expedifyPricing() {
  return (
    <>
       <PriceHead/>
       <Result/>
    </>
  )
}
 

