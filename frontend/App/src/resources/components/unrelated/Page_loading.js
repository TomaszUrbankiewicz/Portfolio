//komponent  strony startowej
import React, { useEffect, useState } from 'react';

const Page_loading  = (props) => {
    const [animation_number, setAnimation_number] = useState(1)// zmienna do wyśfietlania lubnie flag na sronie

    useEffect(() =>{
            setAnimation_number(Math.floor(Math.random() * (4 - 1)) + 1); //losuję numer animacji
    },[])
    
    
    return(
        <section id='page_loading' className='container_page_loading_1'>
            <div className='loader'></div>
        </section>
    );

    
};
export default Page_loading ;
