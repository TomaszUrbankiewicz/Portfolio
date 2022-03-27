//komponent  strony startowej
import React, { useEffect, useState } from 'react';
import Language_selection_to_start from "../unrelated/Language_selection_to_start "

const Home  = (props) => {
    const [show_flags, setShow_flags] = useState(true)// zmienna do wyśfietlania lubnie flag na sronie

    useEffect(() =>{
        if(JSON.parse(window.localStorage.getItem('my_local'))!=null){ //sprawdzam czy jest zmienna lokalna dojezyka
            setShow_flags(false)
        }
    },[])
    
    if(show_flags){
        return(
            <main id="main_page" className="conatainer_main">
                <Language_selection_to_start
                    change_languages={props.change_languages}
                />
                <h1>{props.language.h1}</h1>
                <p>{props.language.hp}</p> 
            </main>
        );
    }else{
        return(
            <main id="main_page" className="conatainer_main">
                <h1>{props.language.h1}</h1>
                <p>{props.language.hp}</p> 
            </main>
        );
    }
    
};
export default Home ;
