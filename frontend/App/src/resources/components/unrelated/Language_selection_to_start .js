//komponent do wyboru języka na start
import React, { useState } from 'react';

const Language_selection_to_start = (props) => {
    const [hide_flags, setHide_flags] = useState(true) // zmienna chowająca flagi wyboru języka 

    const choose_language = (e) =>{ // zmieniam język i chowam flagi 
        props.change_languages(e)
        setHide_flags(false)
    }

    return(
        <section id="language_selection" className={(hide_flags) ? "container_selection" : "container_selection container_selection-invisible"}>
            <div className='filter_box'></div>
            <div className='container_flag'>
                <div  className="box box_polish" >
                    <div id="pl" className='box_text_language' onClick={choose_language }>
                        <div id="pl" className='text_language'>
                            <p id="pl">wybierz język Polski</p>
                        </div>
                    </div>
                </div>
                <div className="box box_english">
                    <div id="en" className='box_text_language' onClick={choose_language}>
                            <div id="en" className='text_language'>
                                <p id="en">choose English language</p>
                            </div>
                    </div>
                </div>
                <div className="box box_russian">
                    <div id="ru" className='box_text_language' onClick={choose_language}>
                            <div id="ru" className='text_language'>
                                <p id="ru">выбрать русский язык</p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};
export default Language_selection_to_start ;
