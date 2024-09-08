// // Bhai naya code
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData"; // Assuming the restaurantList is defined in a separate file
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyParts = () => {
    const [restdata, setrestdata] = useState([]); // This holds the data to display

    const [allRestaurants, setAllRestaurants] = useState([]); // This holds the full list of restaurants


    const [searchtext, setsearchtext] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const dataapi = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9635207&lng=77.5821062&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await dataapi.json();


        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

        // Uncomment this line once the data structure is confirmed
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setrestdata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    
    if (restdata.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className='bodyse'>
            <div className='fiter'>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchtext}
                        onChange={(e) => setsearchtext(e.target.value)}
                    />
                    <button onClick={()=>{
                         const filteredres = allRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );
                        setrestdata(filteredres);
                    }}>Search</button>
                    <button className="top-rated" onClick={()=>{
                        const filterlist = allRestaurants.filter(res => res.info.avgRating > 4.3);
                        setrestdata(filterlist);
                    }}>
                        Top Rated Restaurant
                    </button>
                </div>
            </div>
            <div className='res-cardContainer'>
                {restdata.map((restaurant) => (
                <Link 
                key={restaurant.info.id}
                 to={"/restaurants/" + restaurant.info.id }>    
                 <RestaurantCard  resData={restaurant} /> 
                 </Link>
                ))}
            </div>
        </div>
    );
};

export default BodyParts;
