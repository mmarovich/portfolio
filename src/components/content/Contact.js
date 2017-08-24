import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

import './Contact.css'

configureAnchors({
  offset: -60, 
  scrollDuration: 1000})

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <ScrollableAnchor id="contact">
                    <h1>Contact & Social</h1>
                </ScrollableAnchor>
                <div className="contact-info-container">
                    <div className="contact-info">
                        <h4 className="info">(603) 439-1948</h4><br />
                        <a href="mailto:mmarovich@gmail.com"><h4 className="info">mmarovich@gmail.com</h4></a><br />
                        <a href="https://www.linkedin.com/in/mmarovich"><h4 className="info">LinkedIn</h4></a><br />
                        <a href="https://github.com/mmarovich"><h4 className="info">Github</h4></a>
                    </div>
                </div>
            </div>
        )
    }
}