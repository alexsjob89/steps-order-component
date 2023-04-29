import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import ProgressBar from './ProgressBar'

function Checkout({order, updateOrder}) {

const [progress, setProgress] = useState(0)
const history = useHistory()

const handleCheckout = () => {
 setProgress(50)
 setTimeout(() => {
  updateOrder({status: 'Checked Out'})

  history.push('/review')
 }, 1000)
}

  return (
    <div>
    <ProgressBar progress={progress}/>
<h1>Checkout</h1>
<p>Order status: {order.status}</p>
<button onClick={handleCheckout}>Procced to Checkout</button>
    </div>
  )
}

export default Checkout