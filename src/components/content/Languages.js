import React, { Component } from 'react'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import typescript from '../../assets/images/typescript.png'
import javascript from '../../assets/images/javascript.png'
import nodejs from '../../assets/images/nodejs.png'
import react from '../../assets/images/react.png'

import './Languages.css'

export default class Languages extends Component {
    render() {
        return (
            <div className="languages-stack-container">
                <div className="languages-container">
                    <div className="languages-title">
                        <h1>Languages</h1>
                    </div>
                    <div className="html icon-container">
                        <img src={html} />
                        <p>HTML</p>
                    </div>
                    <div className="css icon-container">
                        <img src={css} />
                        <p>CSS</p>
                    </div>
                    <div className="javascript icon-container">
                        <img src={javascript} />
                        <p>javascript</p>
                    </div>
                </div>
                <div className="stack-container">
                    <div className="languages-title">
                        <h1>Stack</h1>
                    </div>
                    <div className="typescript icon-container">
                        <img src={typescript} />
                        <p>TypeScript</p>
                    </div>
                    <div className="node icon-container">
                        <img src={nodejs} />
                        <p>Node.js</p>
                    </div>
                    <div className="react icon-container">
                        <img src={react} />
                        <p>React</p>
                    </div>
                    <div className="react-native icon-container">
                        <img src={react} />
                        <p style={{fontSize: '12px'}}>React Native</p>
                    </div>
                </div>
            </div>
        )
    }
}