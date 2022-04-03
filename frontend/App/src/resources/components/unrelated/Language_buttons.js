//komponent  strony startowej
import React, { useEffect, useState } from 'react';

const Language_buttons  = (props) => {
    const [big_button, setBig_button] = useState(true)
    const [show_list, setShow_list] = useState(false)

//zdarzenie sprawdzające szerokośc ekranu i zmiana state big_screen
    const check_width=()=>{
        if (window.innerWidth>500){
            setBig_button(true)
        }
        else {
            setBig_button(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("resize", check_width)
        check_width();
    },[])

    const incident_show_list = () =>{
        setShow_list(true)
    }
    const incident_change_language = (e) => {
        props.change_languages(e)
        setShow_list(false)
    }
    const incident_hide_list = () => {
        setShow_list(false)
    }


    if(big_button){
        return(
            <section id='language_buttons' className="container_language_button ">
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
    }
    else{
        return(
            <section id='language_buttons' className="container_language_button_small">
                <div className='container_language_button_small__check_box_small'>
                    <div className='container_language_button_small__check_box_small__selected_language' onMouseEnter={incident_show_list} onMouseLeave={incident_hide_list} >
                        <div className='container_language_button_small__check_box_small__selected_language__box_check_languages'>
                            <strong>{props.active_button}</strong>
                        </div>
                        <div className= {(show_list) ? 'container_language_button_small__check_box_small__languages_to_choose show_list' : 'container_language_button_small__check_box_small__languages_to_choose'}>
                            <div id="pl" className='container_language_button_small__check_box_small__languages_to_choose__box_languages' onClick={incident_change_language} >
                                <strong id="pl">pl</strong>
                            </div>
                            <div id="en"  className='container_language_button_small__check_box_small__languages_to_choose__box_languages' onClick={incident_change_language}>
                                <strong id="en">en</strong>
                            </div>
                            <div id="ru"  className='container_language_button_small__check_box_small__languages_to_choose__box_languages' onClick={incident_change_language}>
                                <strong id="ru">ru</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};
export default Language_buttons ;
