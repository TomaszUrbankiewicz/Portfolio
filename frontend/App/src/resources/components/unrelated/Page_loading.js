//komponent  strony startowej
import React, { useEffect, useState } from 'react';

const Page_loading  = (props) => {
    const [animation_number, setAnimation_number] = useState(3)// zmienna do wyśfietlania lubnie flag na sronie

    useEffect(() =>{
            setAnimation_number(Math.floor(Math.random() * (4 - 1)) + 1); //losuję numer animacji
    },[])
    
    if(animation_number==1){
        return(
            <section id='page_loading' className={(props.page_loading) ? "container_page_loading" : "container_page_loading container_page_loading-invisible"}>
                <div className='container_page_loading__circle'>
                    <div className='container_page_loading__circle__small'></div>
                    <div className='container_page_loading__circle__tiny'></div>
                </div>
                <div className='container_page_loading__text'>
                    <span className='text circle_text'>Loading...</span>
                </div>
            </section>
        );
    }
    else if(animation_number==2){
        return(
            <section id='page_loading' className={(props.page_loading) ? "container_page_loading" : "container_page_loading container_page_loading-invisible"}>
                <div className='container_page_loading__cup'></div>
                <div className='container_page_loading__text'>
                    <span className='text cup_text'>Loading...</span>
                </div>
            </section>
        );
    }
    else if(animation_number==3){
        return(
            <section id='page_loading' className={(props.page_loading) ? "container_page_loading" : "container_page_loading container_page_loading-invisible"}>
                <div className='container_page_loading__loading_bar'></div>
                <div className='container_page_loading__text'>
                    <span className='text loading_bar_text'>Loading...</span>
                </div>
            </section>
        );
    }
};
export default Page_loading ;
