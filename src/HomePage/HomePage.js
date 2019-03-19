import React, { Component } from 'react';
import Modal from 'react-modal';
import ReactGA, {OutboundLink} from 'react-ga';
import axios from 'axios';

import './HomePage.scss';

import Header from '../Header/Header';
import Button from '../shared/Button/Button';

Modal.setAppElement('#root');

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.cookies = props.cookies;
        
        this.state = {
            secondaryNav: [true, false, false],
            headerPosition: 'sticky',
            modalIsOpen: {
                getStarted: false,
                contactUs: false
            },
            getStartedModal: {
                email: ''
            },
            contactUsModal: {
                email: '',
                subject: '',
                body: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitEmail = this.submitEmail.bind(this);

        this.handleScroll = this.handleScroll.bind(this);
        this.navigateToSection = this.navigateToSection.bind(this);

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    } 

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        ReactGA.pageview('/');
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    /*
    *
    * Modals
    * 
    */

    openModal(modal) {
        let currentModalStates = this.state.modalIsOpen;
        currentModalStates[modal] = true;
        this.setState({ modalIsOpen: currentModalStates });
        switch(modal) {
            case 'getStarted':
                ReactGA.event({
                category: 'Button',
                action: 'Clicked Get Started Button',
                label: 'Get Started'
            });
                break;
            case 'contactUs':
                ReactGA.event({
                    category: 'Button',
                    action: 'Clicked Contact Us Button',
                    label: 'Contact Us'
                });
                break;
            default:
                break;
        }
    }
    
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal(modal) {
        let currentModalStates = this.state.modalIsOpen;
        currentModalStates[modal] = false;
        this.setState({ modalIsOpen: currentModalStates })
    }

    /*
    *
    * Form Control
    * 
    */

    handleChange(event, modal, property) {
        switch (modal) {
            case 'getStarted':
                let getStartedModal = this.state.getStartedModal;
                // Track when user starts entering email
                if (event.target.value.length == 1 && getStartedModal.email.length == 0) {
                    ReactGA.event({
                        category: 'User',
                        action: 'Started entering email',
                        label: 'Get Started Modal'
                    });
                }
                getStartedModal[property] = event.target.value;
                this.setState({getStartedModal});
                break;
            case 'contactUs':
                let contactUsModal = this.state.contactUsModal;
                contactUsModal[property] = event.target.value;
                this.setState({contactUsModal});
                break;
            default:
                break;
        }
    }

    submitEmail() {
        this.cookies.set('emailSubmitted', true);
        ReactGA.event({
            category: 'User',
            action: 'Submitted email',
            label: 'Get Started Modal'
        });
    }

    checkIfAlreadySignedUp() {
        if(this.cookies.get('emailSubmitted') == 'true') {
            return (
                <div className="container">
                    <h3>We’ll let you know when it’s ready</h3>
                    <img className="modal-content-image" src="/img/development.svg" />
                    <p>In the meantime, help us spread the word:</p>
                    <div id="modal-share-container">
                        <img className="modal-share-icon" src="/img/f-2.svg" />
                        <img className="modal-share-icon" src="/img/bird-2.svg" />
                        <img className="modal-share-icon" src="/img/mail-2.svg" />
                        <img className="modal-share-icon" src="/img/slack-2.svg" />
                        <img className="modal-share-icon" src="/img/whatsapp.svg" />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <h2>Welcome to Sarkaar!</h2>
                    <img className="modal-content-image" src="/img/greeting.svg" />
                    <p>Thanks for checking us out! We’re not quite ready yet.<br></br>Leave your email below to join our early adopters list.</p>
                    <div id="modal-email-form-container">
                        <input placeholder="Your Email" className="input modal-email-form-input" value={this.state.getStartedModal.email} onChange={(event) => this.handleChange(event, 'getStarted','email')} />
                        <Button text="Submit" className="filled-button" onClick={this.submitEmail}/>
                    </div>
                </div>
            )
        }
        
    }

    /*
    *
    * Scroll Behavior
    * 
    */

    handleScroll() {
        let scrollPosition = document.documentElement.scrollTop;
        let WhatIsThisSection = this.refs[0].offsetTop - (0.1 * window.innerHeight);
        let WhyDoWeNeedThisSection = this.refs[1].offsetTop - (0.2 * window.innerHeight);
        let HowDoesThisWork = this.refs[2].offsetTop - (0.2 * window.innerHeight);

        if (scrollPosition >= WhatIsThisSection && scrollPosition < WhyDoWeNeedThisSection) {
            let secondaryNav = [false, false, false];
            secondaryNav[0] = true;
            this.setState({ secondaryNav, headerPosition: 'fixed' });
        } else if (scrollPosition >= WhyDoWeNeedThisSection && scrollPosition < HowDoesThisWork) {
            let secondaryNav = [false, false, false];
            secondaryNav[1] = true;
            this.setState({ secondaryNav });
        } else if ((scrollPosition) >= HowDoesThisWork) {
            let secondaryNav = [false, false, false];
            secondaryNav[2] = true;
            this.setState({ secondaryNav });
        } else if (scrollPosition < WhatIsThisSection) {
            this.setState({ headerPosition: 'sticky' });
        }
    }

    navigateToSection (tab) {
        let secondaryNav = [false, false, false];
        secondaryNav[tab] = true;
        this.setState({ secondaryNav });
        window.scrollTo(0, this.refs[tab].offsetTop - (window.innerHeight * 0.15));
    }

    render() {
        return (
            <div>
                <Header position={this.state.headerPosition} />
                <Modal
                    isOpen={this.state.modalIsOpen.getStarted}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={() => this.closeModal('getStarted')}
                    contentLabel="Get Started Modal"
                    className="modal-content"
                    overlayClassName="modal-overlay"
                    >
                    <img className="modal-close-button" src="/img/x.svg" onClick={() => this.closeModal('getStarted')} />
                    {this.checkIfAlreadySignedUp()}
                </Modal>
                <Modal
                    isOpen={this.state.modalIsOpen.contactUs}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={() => this.closeModal('contactUs')}
                    contentLabel="Contact Us Modal"
                    className="modal-content"
                    overlayClassName="modal-overlay"
                    >
                        <img className="modal-close-button" src="/img/x.svg" onClick={() => this.closeModal('contactUs')} />
                        <div className="container">
                            <h3>Tell us what you think</h3>
                            <div id="modal-contact-us-form-container">
                                <input id="contact-us-email" placeholder="Your Email" className="input" value={this.state.contactUsModal.email} onChange={(event) => this.handleChange(event, 'contactUs','email')} />
                                <input id="contact-us-subject" placeholder="Subject" className="input" value={this.state.contactUsModal.subject} onChange={(event) => this.handleChange(event, 'contactUs','subject')} />
                                <textarea value={this.state.contactUsModal.body} onChange={(event) => this.handleChange(event, 'contactUs','body')} />
                                <Button id="contact-us-submit" text="Submit" className="filled-button" onClick={this.submitEmail} />
                            </div>
                        </div>
                </Modal>
                <section id="landing">
                    <div className="container">
                        <div id="landing-text">
                            <h1>Bharat is growing. We need to keep up.</h1>
                            <Button text="Get Started" className="primary-button" onClick={() => this.openModal('getStarted')} />
                        </div>
                        <div id="landing-graphic">
                            {/* <img src="/img/red_fort.svg" /> */}
                        </div>
                    </div>
                </section>
                <section id="main-content">
                    <div id="secondary-nav">
                        <div className="container">
                            <ul>
                                <li 
                                className={this.state.secondaryNav[0] ? 'active' : null} 
                                onClick={() => this.navigateToSection(0)}>
                                    <span>What Is This?</span>
                                </li>
                                <li 
                                className={this.state.secondaryNav[1] ? 'active' : null} 
                                onClick={() => this.navigateToSection(1)}>
                                    <span>Why Do We Need It?</span>
                                </li>
                                <li 
                                className={this.state.secondaryNav[2] ? 'active' : null} 
                                onClick={() => this.navigateToSection(2)}>
                                    <span>How Does It Work?</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="what-is-this" className="content" ref='0' style={{ paddingTop: this.state.headerPosition == 'fixed' ? '10vh' : '0' }}>
                        <div className="container">
                            <div className="content-image">
                                <img src='/img/dashboard.svg' />
                            </div>
                            <div className="content-text">
                                <p>
                                Sarkaar is a <b>data driven dashboard for the world’s largest democracy</b>. We aim to provide <b>transparency</b>, <b>information</b> and <b>macro level insight</b> to enable an educated electorate of the 21st Century.
                                </p>
                                <p>
                                The platform is primarily structured around two aspects:
                                    <ul>
                                        <li>Topics</li> 
                                        <li>Location</li> 
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="divider">
                        <div className="container">
                            <div className="line"></div>
                            <img src="/img/wheel.svg" />
                            <div className="line"></div>
                        </div>
                    </div>
                    <div id="why-do-we-need-it" className="content" ref='1'>
                        <div className="container">
                            <div className="content-text">
                                <p>
                                We’re living through a revolutionary time in the timescale of human evolution. Information today is everywhere and nowhere at the same time. But even with all the information out there, there simply isn’t a digestible structure for everyone to make sense of their surrounding. 
                                </p>
                                <p>
                                This has led to uninformed voters around the world. For India to build upon a stable democracy, information must be both accessible and digestible. 
                                </p>
                                <OutboundLink
                                eventLabel="Read More Button"
                                to="https://medium.com/@arpitbansal"
                                target="_blank">
                                    <Button text="Read More" className="secondary-button" />
                                </OutboundLink>
                            </div>
                            <div className="content-image">
                                <img src='/img/globe.svg' />
                            </div>
                        </div>
                    </div>
                    <div className="divider">
                        <div className="container">
                            <div className="line"></div>
                            <img src="/img/wheel.svg" />
                            <div className="line"></div>
                        </div>
                    </div>
                    <div id="how-does-it-work" className="content" ref='2'>
                        <div className="container">
                            <div className="content-image">
                                <img src='/img/team.svg' />
                            </div>
                            <div className="content-text">
                                <p>
                                Collaboration has been key to some of the greatest human achievements. We are no different.
                                </p>
                                <p>
                                Sarkaar is built and managed by a passionate group of technologists, political enthusiasts and proud citizens of India. The project is open source and we welcome all contributions.
                                </p>
                                <p>
                                Interested in helping?
                                </p>
                                <div>
                                    <Button id="contact-us-button" text="Contact Us" className="secondary-button" onClick={() => this.openModal('contactUs')}/>
                                    <OutboundLink
                                    eventLabel="Explore Github Button"
                                    to="https://github.com/abansal3/Sarkaar"
                                    target="_blank">
                                        <Button id="github-button" text="Explore GitHub" className="secondary-button"/>
                                    </OutboundLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <img id="india-1" src="/img/india-1.svg" />
                    <img id="india-2" src="/img/india-2.svg" />
                    <div className="container">
                        <div className="footer-table">
                            <div className="footer-table-column">
                                <h4>PROJECT</h4>
                                <ul>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>In The News</li>
                                    <li>Github</li>
                                </ul>
                            </div>
                            <div className="footer-table-column">
                                <h4>TOPICS</h4>
                                <ul>
                                    <li>Government Structure</li>
                                    <li>Election Cycles</li>
                                    <li>Political Parties</li>
                                    <li>Macro Trends</li>
                                </ul>
                            </div>
                            <div className="footer-table-row">
                                <div>
                                    <h4>MISC</h4>
                                    <ul>
                                        <li>Site Map</li>
                                        <li>Legal &amp; Privacy</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>SHARE</h4>
                                    <ul>
                                        <li><img src="/img/f.svg" /></li>
                                        <li><img src="/img/bird.svg" /></li>
                                        <li><img src="/img/slack.svg" /></li>
                                        <li><img src="/img/mail.svg" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p>© 2019 Sarkaar.io</p>
                    </div>
                </footer>
            </div>
        );
    }
};

export default HomePage;