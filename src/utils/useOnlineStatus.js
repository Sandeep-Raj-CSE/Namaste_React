// finilize the contract 

import { useEffect, useState } from "react";

// what is input or output


const useOnlineStatus = () => {

    const [OnlineStatus , setOnlineStatus] = useState(true);

    // online event listner 
    useEffect(()=> {

        window.addEventListener("offline" , () => {

            setOnlineStatus(false)

        })


        window.addEventListener("online", ()=> {
            //OnlineStatus(true);
            setOnlineStatus(true)

        })

    },[])


     // boolean 

    return OnlineStatus;
}

export default useOnlineStatus;