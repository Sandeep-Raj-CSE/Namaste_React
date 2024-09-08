import { useEffect } from "react";
import {CLOUD_IMAGE_URL} from "../utils/constant.js"

const RestaurantCard = ({ resData }) => {  
    return (
        <div className='res-card'>
            <img className='card-logo' alt='card-img' 
            src={CLOUD_IMAGE_URL + resData.info.cloudinaryImageId} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(',')}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};


export default RestaurantCard;