import React from 'react'
import sellCar from "../assets/images/sell-car.png";
import "../styles/sell-car.css"
import TrackingChart from '../charts/TrackingChart';
const SellCar = () => {
  return (
    <div className="sell__car">
      <div className="sell__car-top">
        <div className="sell__car-img">
          <h2>2022 Mercedes Benz</h2>
          <img src={sellCar} alt="" />
        </div>
        <div className="tracking__history">
          <h3>Tracking History</h3>
          <TrackingChart/>
        </div>
      </div>
    </div>
  )
}

export default SellCar