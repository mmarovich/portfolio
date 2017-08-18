import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import flag from '../../assets/images/flag-USA.png'
import WhetherYouLike from '../../assets/images/WhetherYouLikeRevised.png'

import './Projects.css';

configureAnchors({
  offset: -60, 
  scrollDuration: 1000})

export default class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <div className="projects-title">
                    <h1>Projects</h1>
                </div>
                
                <div className="politikos-container">
                    <ScrollableAnchor id="politikos">
                    <div className="politikosImage-container">
                        <img src={flag} />
                        <h1 className="politikos-title">Politikos</h1>
                        <p className="politikos-subtitle">Be involved, educate, and influence</p>
                    </div>
                    </ScrollableAnchor>
                    <div className="politikos-description">
                        <p>Politikos is a project inspired by the current political climate in the world.
                            With an objective to create more informed citizens with an emphasis on fact-checking,
                            this project is just at its infancy, but has the potential to blossom into something
                            so much more.
                        </p>
                        <p>After signing up and logging in, you will have the opportunity to find who your
                            representatives are, and collaborate with others about their actions.  In the future
                            I want to create features for tracking, anticipating, and influencing their actions.
                        </p>
                    </div>
                </div>
                
                <div className="whether-container">
                    <ScrollableAnchor id="whether">
                    <div className="whetherImage-container">
                        <img className="whether-img" src={WhetherYouLike} />
                    </div>
                    </ScrollableAnchor>
                    <div className="whether-description">
                        <p>WhetherYouLike was a project that I started with the simple task of displaying both
                            Celcius and Fahrenheight on the same page. As I learned more it become a project to 
                            fully customize one's background on their mobile device.  The project is currently 
                            being converted to the React Native mobile language (thoughts of beginning a Kotlin
                            migration are also on the horizon).
                        </p>
                        <p>When a user logs in, they can customize what information they want to be displayed,
                            and drag that information around on the screen.  After doing this, they can save their
                            settings and positions.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}