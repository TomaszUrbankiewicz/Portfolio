import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './resources/scss/index.scss';
import pl from './resources/languages/pl.json';
import en from './resources/languages/en.json';
import ru from './resources/languages/ru.json'


//const obj = JSON.parse(text);
const App = () => {
    const [language, setLanguage] = useState(pl)

    const change_page_title = (param) => {
        const title = document.querySelector("title");
        title.text = param.title
    }
    const change_languages = (e) => {
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
            <button onClick={change_languages} id="pl">Zmień język na Polski</button> <br></br>
            <button onClick={change_languages} id="en">Zmień język na Angielski</button> <br></br>
            <button onClick={change_languages} id="ru">Zmień język na Rosyjski</button> <br></br>
            <span>{language.title}</span>
            <h1>{language.h1}</h1>
            <p>{language.hp}</p>
        </>

    );

};
ReactDOM.render(<App />, document.getElementById('app'));