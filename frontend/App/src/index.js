import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './resources/scss/index.scss';
import pl from './resources/languages/pl.json';
import en from './resources/languages/en.json';
import ru from './resources/languages/ru.json'
import Home from './resources/components/home/Home'

const App = () => {
    const [language, setLanguage] = useState(pl)//zmienna odpowiadająca za pobieranie textów z dsanego pliku

    const change_page_title = (param) => { // funkcja zmieniająca tytuł
        const title = document.querySelector("title");
        title.text = param.title
    }
    const change_languages = (e) => {// funkca zmianiażca zmienną language
        console.log(e.target.id)
        if(e.target.id=="pl"){
            setLanguage(pl)
        }
        else if(e.target.id=="en"){
            setLanguage(en)
        }
        else if(e.target.id=="ru"){
            setLanguage(ru)
        }
    }

    useEffect(() =>{
        change_page_title(pl)
    },[])
    useEffect(() =>{
        change_page_title(language)
    },[language])

    return (
        <>
            <Home
                change_languages={change_languages}
                language={language}
            />
        </>

    );

};
ReactDOM.render(<App />, document.getElementById('app'));
