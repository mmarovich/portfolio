import React, { Component } from 'react';
// import portfolio from '../portfolio.json';

import './Bio.css';

class Bio extends Component {
    render() {
        return (
            <div className="bio">
                {/* <div className="image-container">
                    <img className="max" src={portfolio.image} />
                </div> */}

                <div className="introduction-container">
                    <div className="introduction">
                        <p>Welcome to my website! I'm proud to say that
                        I spent several months completing
                        the full-stack web development program at 
                        <a href="http://www.thinkful.com"> Thinkful.</a> They have given me the opportunity
                        to advance in a field that I truly love.  My goal
                        as a web developer is to continue to grow beyond what
                        I already know.  Actually, this is a mantra for life.
                    </p>
                        <p>I have experience in the healthcare, teaching, music, and
                        retail fields. As a web dev I consider it very important
                        to take the lessons that I learned in communication,
                        compassion, responsibility, and humility with me into my new
                        passion.  True productivity is in the way we treat each
                        other, and our patience to bring everyone around us up to
                        speed is a critical component to every team.
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio;