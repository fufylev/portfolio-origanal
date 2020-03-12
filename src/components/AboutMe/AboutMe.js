import React from 'react';
import styles from "./AboutMe.module.css";

export function AboutMe() {
    return (
        <article id='aboutMe' className={styles.aboutMe}>
            <h3 className={styles.title}>About me</h3>
            <p className={styles.text}>
                Hello! My name is <strong>Andrei Fufylev. </strong>Nice to meet you.
            </p>
            <p className={styles.text}>
                I am a motivated and results-focused professional in producing robust code with extensive
                experience in developing web-based applications by leveraging various development tools
                and frameworks, React & React Native, in particular.
            </p>
            <p className={styles.text}>
                Eager to support the dev team with
                top-notch coding skills.
            </p>
            <p className={styles.text}>
                Curious in all aspects of JavaScript patterns and complex
                interactive styled web pages developing.
            </p>
            <h5>Languages I speak:</h5>
            <p className={styles.text}>
                Advanced in both <strong>English</strong> and <strong>JavaScript</strong>
            </p>
            <h5>My stack:</h5>
            <ul className={styles.text}>
                <li><a target="_blank" rel="noopener noreferrer"
                       href="https://github.com/fufylev/VenedorGreenResponsive">HTML5 + CSS3 (SASS, LESS), BEM, Bootstrap</a></li>
                <li>JavaScript (ES5, ES6+), <a href="https://github.com/fufylev/jquery_js_vanhack_events_app"
                                               target="_blank" rel="noopener noreferrer">jQuery </a>
                    & <a href="https://github.com/fufylev/jquery_js_todo_app" target="_blank"
                         rel="noopener noreferrer">jQueryUI</a></li>
                <li>React + React Native</li>
                <li>Redux, Thunk, Saga</li>
                <li><a href="https://github.com/fufylev/node.js-25.06/tree/master/Andrey_Fufylev/CRUD_interface"
                       target="_blank" rel="noopener noreferrer">NodeJS </a>
                    - intermediate (server, http,&nbsp;
                    <a href="https://github.com/fufylev/node.js-25.06/tree/master/Andrey_Fufylev/todo_Vue_token_web_socket"
                       target="_blank" rel="noopener noreferrer">
                        web sockets</a>)
                </li>
                <li>WebPack, Gulp</li>
                <li>Trello, Scrum team work</li>
                <li>Git, GitHub</li>
                <li>Vue JS - intermediate</li>
                <li>Terminal</li>
            </ul>
        </article>
    );
};