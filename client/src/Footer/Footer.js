import React, {Component} from 'react';
import ReactGA, {OutboundLink} from 'react-ga';

import './Footer.scss'

class Footer extends Component {
    render () {
        return (
            <footer>
                <img id="india-1" src="/img/india-1.svg" />
                <img id="india-2" src="/img/india-2.svg" />
                <div className="container">
                    <div className="footer-table">
                        <div className="footer-table-column">
                            <h4>PROJECT</h4>
                            <ul>
                                <li onClick={() => {
                                    ReactGA.event({
                                        category: 'Outbound',
                                        action: 'Click',
                                        label: 'About Link'
                                    });
                                }}>About</li>
                                <li onClick={() => {
                                    ReactGA.event({
                                        category: 'Outbound',
                                        action: 'Click',
                                        label: 'Blog Link'
                                    });
                                }}>Blog</li>
                                <li onClick={() => {
                                    ReactGA.event({
                                        category: 'Outbound',
                                        action: 'Click',
                                        label: 'News Link'
                                    });
                                }}>In The News</li>
                                <li onClick={() => {
                                    ReactGA.event({
                                        category: 'Outbound',
                                        action: 'Click',
                                        label: 'Github Link'
                                    });
                                }}>Github</li>
                            </ul>
                        </div>
                        <div className="footer-table-column">
                            <h4>TOPICS</h4>
                            <ul>
                                <li onClick={() => {
                                    ReactGA.event({
                                        category: 'Topic',
                                        action: 'Topic Selected - Footer',
                                        label: 'Government Structure'
                                    });
                                }}>Government Structure</li>
                                <li onClick={() => {
                                    ReactGA.event({
                                        category: 'Topic',
                                        action: 'Topic Selected - Footer',
                                        label: 'Election Cycle'
                                    });
                                }}>Election Cycles</li>
                                <li onClick={() => {
                                    ReactGA.event({
                                        category: 'Topic',
                                        action: 'Topic Selected - Footer',
                                        label: 'Political Parties'
                                    });
                                }}>Political Parties</li>
                                <li onClick={() => {
                                    ReactGA.event({
                                        category: 'Topic',
                                        action: 'Topic Selected - Footer',
                                        label: 'Macro Trends'
                                    });
                                }}>Macro Trends</li>
                            </ul>
                        </div>
                        <div className="footer-table-row">
                            <div>
                                <h4>MISC</h4>
                                <ul>
                                    <li onClick={() => {
                                        ReactGA.event({
                                            category: 'Outbound',
                                            action: 'Click',
                                            label: 'Sitemap'
                                        });
                                    }}>Site Map</li>
                                    <li onClick={() => {
                                        ReactGA.event({
                                            category: 'Outbound',
                                            action: 'Click',
                                            label: 'Legal & Privacy'
                                        });
                                    }}>Legal &amp; Privacy</li>
                                </ul>
                            </div>
                            <div>
                                <h4>SHARE</h4>
                                <ul>
                                    <li>
                                        <OutboundLink
                                        eventLabel="Facebook Share - Footer"
                                        to="https://www.facebook.com/sharer/sharer.php?u=https%3A//sarkaar.io"
                                        target="_blank">
                                            <img src="/img/f.svg" />
                                        </OutboundLink>
                                    </li>
                                    <li>
                                        <OutboundLink
                                        eventLabel="Twitter Share - Footer"
                                        to={"https://twitter.com/intent/tweet?text=" + encodeURI("Check out the world's first data driven dashboard for democracy") + "&url=https://sarkaar.io&hashtags=india,politics,dashboard"}
                                        target="_blank">
                                            <img src="/img/bird.svg" />
                                        </OutboundLink>
                                    </li>
                                    <li>
                                        <OutboundLink
                                        eventLabel="Email Share - Footer"
                                        to="mailto:?&subject=Check this out!&body=Check%20out%20the%20world's%20first%20data%20driven%20dashboard%20for%20democracy%0A%0Ahttps%3A//sarkaar.io"
                                        >
                                            <img src="/img/mail.svg" />
                                        </OutboundLink>
                                    </li>
                                    <li>
                                        <OutboundLink
                                        eventLabel="Whatsapp Share - Footer"
                                        to="whatsapp://send?text=Check out the world's first data driven dashboard for democracy https://sarkaar.io"
                                        target="_blank">
                                            <img src="/img/whatsapp.svg" />
                                        </OutboundLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p>© 2019 Sarkaar.io</p>
                </div>
            </footer>
        )
    }
}

export default Footer;