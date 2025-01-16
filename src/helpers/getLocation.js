import { useState } from "react";


export const useLocation = ()=>{
    const [latitude, setlatitude] = useState(null);
    const [longitude, setlongitude] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    const getPosition =  (position) => {
        const b_latitude =  position.coords.latitude;
        const b_longitude = position.coords.longitude;
        setlatitude(b_latitude);
        setlongitude(b_longitude);
        setisLoading(false);
    }

    function error() {
        console.log("Unable to retrieve your location");
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition, error);
    } else {
        console.log("Geolocation not supported");
    }

    return {latitude,longitude,isLoading}
    
}