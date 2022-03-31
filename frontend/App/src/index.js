import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './resources/scss/index.scss';
import pl from './resources/languages/pl.json';
import en from './resources/languages/en.json';
import ru from './resources/languages/ru.json'
import Home from './resources/components/home/Home'
import Page_loading from './resources/components/unrelated/Page_loading'

const App = () => {
    const [language, setLanguage] = useState(pl)//zmienna odpowiadająca za pobieranie textów z dsanego pliku
    const [page_loading, setPage_loading] = useState(true)

    useEffect(() =>{
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
        }
        else if(e.target.id=="en"){
            setLanguage(en)
            window.localStorage.setItem("my_local",JSON.stringify({field_1:"en"}))
        }
        else if(e.target.id=="ru"){
            setLanguage(ru)
            window.localStorage.setItem("my_local",JSON.stringify({field_1:"ru"}))
        }
    }
    
    useEffect(() =>{
        if(JSON.parse(window.localStorage.getItem('my_local'))!=null){
            if((JSON.parse(window.localStorage.getItem('my_local')).field_1)=="pl"){
                setLanguage(pl);
            }
            else if((JSON.parse(window.localStorage.getItem('my_local')).field_1)=="en"){
                setLanguage(en);
            }
            else if((JSON.parse(window.localStorage.getItem('my_local')).field_1)=="ru"){
                setLanguage(ru);
            }
        }
        else{
            setLanguage(language);
            change_page_title(language)
        }
    },[])

    useEffect(() =>{
        change_page_title(language)
    },[language])


    return (
        <>
            <Page_loading page_loading={page_loading} /> 
            <Home
                change_languages={change_languages}
                language={language}
            />
            
        </>

    );

};
ReactDOM.render(<App />, document.getElementById('app'));
