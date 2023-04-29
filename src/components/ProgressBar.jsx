import {LinearProgress} from '@mui/material'
import React from 'react'

function ProgressBar({progress}) {
  return (
    <div>
<LinearProgress variant='determinate' value={progress} style={{backgroundColor: "red", height: "14px", width: "20rem",borderRadius: "10px"}}/>
    </div>
  )
}

export default ProgressBar