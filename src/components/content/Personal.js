import React, { Component } from 'react'

import './Personal.css'

export default class Personal extends Component {
    render() {
        return (
            <div className="personal-container">
                <h1>Personal</h1>
                <div className="current">
                    <p>Currently, I'm living in Hammond, IN where I enjoy
                        spending time with my friends and making regular visits
                        to the great city of Chicago for coding meetups. I spent
                        10 years in New Hampshire with my family, where I enjoyed
                        regular hikes up Mt. Monadnock and occasional drives out
                        to the east coast.
                    </p>
                    <p className="skills-used">Hobbies: Tennis, Cooking, Board Games, Music, Reading</p>
                </div>
            </div>
        )
    }
}