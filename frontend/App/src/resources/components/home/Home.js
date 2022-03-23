//komponent  strony startowej
import React  from 'react';
import Language_selection_to_start from "../unrelated/Language_selection_to_start "

const Home  = (props) => {
    
    return(
        <main id="main_page" className="conatainer_main">
            <Language_selection_to_start
                change_languages={props.change_languages}
            />
            <h1>{props.language.h1}</h1>
            <p>{props.language.hp}</p> 
        </main>
    );
};
export default Home ;
