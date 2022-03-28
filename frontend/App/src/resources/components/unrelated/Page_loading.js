//komponent  strony startowej
import React, { useEffect, useState } from 'react';

const Page_loading  = (props) => {
    const [animation_number, setAnimation_number] = useState(1)// zmienna do wyśfietlania lubnie flag na sronie

    useEffect(() =>{
            setAnimation_number(Math.floor(Math.random() * (4 - 1)) + 1); //losuję numer animacji
    },[])
    
    
    return(
        <section id='page_loading' className='container_page_loading'>
            <div className='container_page_loading__circle'></div>
            <div className='container_page_loading__text'>
                <span className='text circle_text'>Leading...</span>
            </div>
        </section>
    );
    // return(
    //     <section id='page_loading' className='container_page_loading'>
    //         <div className='container_page_loading__cup'></div>
    //         <div className='container_page_loading__text'>
    //             <span className='text cup_text'>Leading...</span>
    //         </div>
    //     </section>
    // );

    
};
export default Page_loading ;
