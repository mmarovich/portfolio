import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import flag from '../../assets/images/flag-USA.png'
import WhetherYouLike from '../../assets/images/WhetherYouLikeRevised.png'
import war from '../../assets/images/War.png'

import './Projects.css';

configureAnchors({
    offset: -60,
    scrollDuration: 1000
})

export default class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <div className="projects-title">
                    <ScrollableAnchor id="projects">
                        <h1>Projects</h1>
                    </ScrollableAnchor>
                </div>

                <div className="project-container">
                    <ScrollableAnchor id="politikos">
                        <div className="politikosImage-container">
                            <a href="https://politikos.herokuapp.com/">
                                <img className="project-img" src={flag} />
                                <h1 className="politikos-title">Politikos</h1>
                                <p className="politikos-subtitle">Be involved, educate, and influence</p>
                            </a>
                        </div>
                    </ScrollableAnchor>
                    <div className="politikos-description">
                        <div className="project-title"><h2>Politikos</h2></div>
                        <p>
                            Politikos is a social fact-checking network for political discussion developed with 
                            an emphasis on accurate and meaningful conversation.
                        </p>
                        <p>
                            My focus on this project was to extend my skills as a backend developer. Utilizing Node, 
                            MongoDB, and learning about backend algorithm and usage, I was able to push my full stack 
                            development abilities through development of this CRUD application. Future features of this 
                            app will help guide users into meaningful discourse through algorithmic backend techniques.
                        </p>
                        <p>
                            After signing up and logging in, you will have the opportunity to find who your
                            representatives are, and collaborate with others about their actions.  In the future
                            this has the potential for tracking, anticipating, and influencing their actions.
                        </p>
                        <p className="skills-used">Skills used: React.js, Node.js, Typescript</p>
                        <p className="skills-used">Libraries & APIs: Google Civics and Geocoding API, Material UI</p>
                    </div>
                </div>

                <div className="project-container">
                    <ScrollableAnchor id="whether">
                        <div className="projectImage-container">
                            <a href="https://whetheryoulike.herokuapp.com/">
                                <img className="project-img" src={WhetherYouLike} />
                            </a>
                        </div>
                    </ScrollableAnchor>
                    <div className="project-description">
                        <div className="project-title"><h2>WhetherYouLike</h2></div>
                        <p>
                            WhetherYouLike was a project that I started with the simple task of displaying both
                            Celsius and Fahrenheight on the same page. As I learned more it became a project to
                            fully customize the background on my mobile device.  The project is currently
                            being converted to the React Native mobile language (thoughts of beginning a Kotlin
                            migration are also on the horizon).
                        </p>
                        <p>
                            When a user logs in, they can customize what information they want to be displayed,
                            and drag that information around on the screen.  After doing this, they can save their
                            settings and positions.
                        </p>
                        <p className="skills-used">Skills used: React.js, Node.js, Typescript</p>
                        <p className="skills-used">Libraries & APIs: Weather Underground API, Google Geocoding API, Material UI</p>
                    </div>
                </div>
                <div className="project-container">
                    <ScrollableAnchor id="war">
                        <div className="projectImage-container">
                            <a href="https://mmarovich.github.io/war/">
                                <img className="project-img" src={war} />
                            </a>
                        </div>
                    </ScrollableAnchor>
                    <div className="project-description">
                        <div className="project-title"><h2>War!</h2></div>
                        <p>
                            This is one of my first projects during the very beginning of learning javascript.
                            This is a digital rendition of <a href="https://en.wikipedia.org/wiki/War_(card_game)">
                                the card game, War</a>. It's a very simple game in which the only move required is to
                            attack.  You click the button, both sides draw a card, and the highest card keeps both
                            drawn cards.  A tie results in a higher wager of cards for the next round.
                        </p>
                        <p>
                            There is a lot of messiness in the code.  This project gave me a great understanding of
                            asynchronicity and 'callback hell' and the reasons why techniques such as promises are needed
                            to tame it.  The mistakes that I made here were important mistakes to make, and I believe
                            the skills and best practices that I have today would not be the same without this awesome,
                            neat game. It is the perfect reminder of how far I've come in such a short amount of time.
                        </p>
                        <p className="skills-used">Skills used: HTML/CSS, Javascript</p>
                        <p className="skills-used">Libraries & APIs: Deck of Cards API, Jquery</p>
                    </div>
                </div>
            </div>
        )
    }
}