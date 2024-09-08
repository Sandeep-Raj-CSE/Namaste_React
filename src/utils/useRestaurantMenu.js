// use - that means hooks 

import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {


    const [resInfo, setresInfo] = useState(null)


    // fetch data

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
    
    



    return resInfo;


}


export default useRestaurantMenu;