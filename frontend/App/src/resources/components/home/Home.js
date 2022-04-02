//komponent  strony startowej
import React, { useEffect, useState } from 'react';
import Language_buttons from "../unrelated/Language_buttons"

const Home  = (props) => {

        return(
            <main id="main_page" className="conatainer_main">
                <Language_buttons
                    change_languages={props.change_languages}
                    active_button={props.active_button}
                />
                <h1>{props.language.h1}</h1>
                <p>{props.language.hp}</p> 
            </main>
        );
};
export default Home ;
