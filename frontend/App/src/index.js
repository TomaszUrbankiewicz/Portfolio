import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './resources/scss/index.scss';
import pl from './resources/languages/pl.json';
import en from './resources/languages/en.json';
import ru from './resources/languages/ru.json'
import Home from './resources/components/home/Home'
import Page_loading from './resources/components/unrelated/Page_loading'
import Language_selection_to_start from './resources/components/unrelated/Language_selection_to_start ';

const App = () => {
    const [language, setLanguage] = useState(pl)//zmienna odpowiadająca za pobieranie textów z dsanego pliku
    const [page_loading, setPage_loading] = useState(true) //czy ma sie pokazywac animacja ladowania strony
    const [show_flags, setShow_flags] = useState(true)// zmienna do wyśfietlania lubnie flag na sronie
    const [active_button, setActive_button] = useState ("pl")// aktywny button jezyka

    useEffect(() =>{ //licze czas do wylaczenia animacji ladowania
        setTimeout(()=>{
            setPage_loading(false)
        },6000)
    },[])

    const change_page_title = (param) => { // funkcja zmieniająca tytuł
        const title = document.querySelector("title");
        title.text = param.title
    }
    const change_languages = (e) => {// funkca zmianiajca jezyk
        if(e.target.id=="pl"){
            setLanguage(pl)
            window.localStorage.setItem("my_local",JSON.stringify({field_1:"pl"}))
            setActive_button("pl")
        }
        else if(e.target.id=="en"){
            setLanguage(en)
            window.localStorage.setItem("my_local",JSON.stringify({field_1:"en"}))
            setActive_button("en")
        }
        else if(e.target.id=="ru"){
            setLanguage(ru)
            window.localStorage.setItem("my_local",JSON.stringify({field_1:"ru"}))
            setActive_button("ru")
        }
    }
    
    useEffect(() =>{ // zapisanie z lokalnej pamięci języka 
        if(JSON.parse(window.localStorage.getItem('my_local'))!=null){
            if((JSON.parse(window.localStorage.getItem('my_local')).field_1)=="pl"){
                setLanguage(pl);
                setActive_button("pl")
            }
            else if((JSON.parse(window.localStorage.getItem('my_local')).field_1)=="en"){
                setLanguage(en);
                setActive_button("en")
            }
            else if((JSON.parse(window.localStorage.getItem('my_local')).field_1)=="ru"){
                setLanguage(ru);
                setActive_button("ru")
            }
            setShow_flags(false)
        }
        else{
            setLanguage(language);
            change_page_title(language)
            setActive_button("pl")
        }
    },[])

    useEffect(() =>{
        change_page_title(language)
    },[language])

    if(show_flags){
        return(
            <>
                <Page_loading page_loading={page_loading} /> 
                <Language_selection_to_start
                    change_languages={change_languages}
                />
                <Home
                    change_languages={change_languages}
                    language={language}
                    active_button={active_button}
                />
            </>
            )
        }
        else{
            return(
                <>
                    <Page_loading page_loading={page_loading} /> 
                    <Home
                        change_languages={change_languages}
                        language={language}
                        active_button={active_button}
                    />
                </>
            );
        }
};
ReactDOM.render(<App />, document.getElementById('app'));
