import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import Resturantmenu from "../Design/Resturantmenu.css"

const ResturantMenu = () =>{

    const [resInfo, setresInfo] = useState(null);

    const {resId} = useParams()


    useEffect(()=>{
        fetchMenu();
    },[])


    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9635207&lng=77.5821062&restaurantId="
            +resId
            +"&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

       // console.log(json);

        setresInfo(json.data);
    }


    if(resInfo === null){
        return <Shimmer/>
    }


    const {name,  
        costForTwoMessage , 
        cuisines            } =  resInfo?.cards[2]?.card?.card?.info

    const {itemCards
    } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    console.log(itemCards)
    





  return (
    <div className="res-menu">

        <h1 className="res-name">{name}</h1>



        <h3 className="res-cuisine">{cuisines.join(",") }</h3>
        <h3 className="res-cotm">{costForTwoMessage}</h3>

        <ul className="res-itemcard">

        {itemCards.map((item)=> (
            <li key={item.card.info.id}>{item?.card?.info?.name} - {"Rs"} {
                item?.card?.info?.defaultPrice/100 || item.card.info.finalPrice/100
                }</li>
         ))}
            
        </ul>

    </div>
  )

}

export default ResturantMenu;


