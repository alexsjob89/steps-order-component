import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import ProgressBar from './ProgressBar'

function OrderPlaced({updateOrder}) {

 const [progress, setProgress] = useState(0)
const history = useHistory()

const handlePlaceOrder = () => {
 setProgress(50)
 setTimeout(() => {
  updateOrder({status: 'Order Placed'})

  history.push('/checkout')
 }, 1000)
}

  return (
    <div>
<ProgressBar progress={progress} style={{position: "absolute"}}/>
<h1>Order Placed</h1>
<button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  )
}

export default OrderPlaced