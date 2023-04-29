import React,{useState} from "react";
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import './App.css';
import Checkout from "./components/Checkout";
import OrderPlaced from './components/OrderPlaced';
import Review from "./components/Review";

function App() {
const [order, setOrder] = useState({})

const updateOrder = (updatedOrder) => {
setOrder({...order, ...updatedOrder})
}

  return (
    <div className="App" style={{
      position: "absolute",
      margin: "auto",
      top: "25%",
      left: "40%",
      padding:"40px",
      borderRadius:"15px"}}>
<Router>
  <Switch>
    <Route path='/' exact>
      <OrderPlaced updateOrder={updateOrder}/>
    </Route>
    <Route path='/checkout'>
      <Checkout order={order} updateOrder={updateOrder}/>
    </Route>
    <Route path='/review'>
      <Review order={order}/>

    </Route>
  </Switch>
</Router>
    </div>
  );
}

export default App;
