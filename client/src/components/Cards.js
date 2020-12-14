import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default class Cards extends Component {
    slide = () => {
        var container = document.getElementById('container');
        this.sideScroll(container,'right',510,5);
    }
    slideBack = () => {
        var container = document.getElementById('container');
        this.sideScroll(container,'left',510,5);
    }
    sideScroll = (element,direction,distance,step) => {
        let scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction === 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, 0.01);
    }
    render() {
        return (
            <div className="cards-section">
                        <div className="cards-title">
                            <h2>Find by Category</h2>
                        </div>
                        <div className="cards-container">
                            <div onClick={this.slideBack} id="slideBack" type="button"><FontAwesomeIcon className="icons" icon={faArrowLeft} /></div>
                            <div className="scroll-pane mt-4" id="container">
                                <ul className="photos">
                                    <li>
                                        <div id="arts" className="card">
                                            <Link to='/Art'><div className="card-button">Arts</div></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div id="sports" className="card">
                                        <Link to='/Sport'><div className="card-button">Sports</div></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div id="breweries" className="card">
                                        <Link to='/Food'><div className="card-button">Breweries/Food</div></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div id="animals" className="card">
                                        <Link to='/Entertainment'><div className="card-button">Entertainment</div></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div id="tours last-card" className="card">
                                        <Link to='/Tour'><div className="card-button">Tours</div></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div onClick={this.slide} id="slide" type="button"><FontAwesomeIcon className="icons" icon={faArrowRight} /></div>
                        </div>
                    </div>
        )
    }
}
