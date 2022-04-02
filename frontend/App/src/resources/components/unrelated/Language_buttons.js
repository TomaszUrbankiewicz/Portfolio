//komponent  strony startowej
import React, { useEffect, useState } from 'react';

const Language_buttons  = (props) => {
    
    return(
        <section id='language_buttons' className="container_language_button">
                <div className='container_language_button__check_box'>
                        <div id="pl" onClick={props.change_languages} className={(props.active_button=="pl") ? 'container_language_button__check_box__box_pl box_text active' : "container_language_button__check_box__box_pl box_text"}>
                            <strong id="pl">pl</strong>
                        </div>
                        <div id="en" onClick={props.change_languages} className={(props.active_button=="en") ? 'container_language_button__check_box__box_en box_text active' : "container_language_button__check_box__box_en box_text"}>
                            <strong id="en">en</strong>
                        </div>
                        <div id="ru" onClick={props.change_languages} className={(props.active_button=="ru") ? 'container_language_button__check_box__box_ru box_text active' : "container_language_button__check_box__box_ru box_text"}>
                            <strong id="ru">ru</strong>
                        </div>
                </div>
        </section>
    );
};
export default Language_buttons ;
