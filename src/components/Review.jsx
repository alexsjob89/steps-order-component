import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import ProgressBar from './ProgressBar'


function Review({order}) {
const [progress, setProgress] = useState(0)

const history = useHistory()

const handleBackTo = () => {
 setProgress(100)
setTimeout(() => {
  history.push('/')
}, 1000)
}

  return (
    <div>
    <ProgressBar progress={progress}/>

<h1>Review</h1>
<p>Order status: {order.status}</p>
<button onClick={handleBackTo}>Back</button>
    </div>
  )
}

export default Review