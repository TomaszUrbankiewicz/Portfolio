//komponent  strony startowej
import React, { useEffect, useState } from 'react';

const Home  = (props) => {

        return(
            <main id="main_page" className="conatainer_main">
                <h1>{props.language.h1}</h1>
                <p>{props.language.hp}</p> 
            </main>
        );
};
export default Home ;
