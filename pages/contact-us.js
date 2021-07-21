import Layout from '../components/layout';
import MainSection  from '../components/mainSection';

export default function ContactUs(){
    const renderEmailContact = () => {}
    const title = 'Contact Us'

    return Layout(MainSection(<div className='row'>
         <p>If you would like to contact Embolden, please fill in the form below. Alternatively there is also an email address you can email directly.</p>
         <p>When you email us, please let us know: The safest way to contact you (phone/email), Safe days and times to contact you, If you would like to arrange to meet at Embolden but it is not safe for us to contact you, please let us know which day/time you will be at Embolden (Please check library opening hours). Please give us a minimum of 36 hours notice. In most cases, we will be able to accommodate this but there may be times this is not possible,
            If we call you and you would like us to use a code word or question to check that it is safe to call, please advise of which code word or question you would like and indicate which response indicates that it is not safe to talk at the moment. </p>
         <b>Remember to delete emails if you are concerned that your communications may be accessed.</b>
         <div className="col-xl-6 col-lg-6">
                <div className="contact-page__contact-info">
                        <ul className="contact-page__contact-list list-unstyled">
                            <li>
                                <div className="icon">
                                    <span className="icon-chat"></span>
                                </div>
                                <div className="text">
                                    <p>Call Anytime</p>
                                    <a href="tel:92 666 888 0000">92 666 888 0000</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-message"></span>
                                </div>
                                <div className="text">
                                    <p>Send Email</p>
                                    <a href='mailto:support@embolden-hub.org.uk'>support@embolden-hub.org.uk</a>
                                </div>
                            </li>
                        </ul>
                    </div>
        </div>
        <div className="col-xl-6 col-lg-6">
        <div className="contact-page__form">
            <form action="https://mailthis.to/Embolden-Hub" encType="multipart/form-data" method="POST"  className="contact-page__main-form contact-form-validated">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact-page__input-box">
                                <input type="text" placeholder="Your name" name="name"/>
                        </div>
                    </div>
                </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-page__input-box">
                                    <input type="email" placeholder="Email address" name="_replyto"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-page__input-box">
                                    <textarea name="message" placeholder="Write message"></textarea>
                                </div>
                                <input type="hidden" name="_subject" value="Contact form submitted"/>
                                <input type="hidden" name="_after" value="https://embolden-hub.org.uk/confirm-email-sent"/>
                                <input type="hidden" name="_honeypot" value=""/>
                                <input type="hidden" name="_confirmation" value=""/>
                                <button type="submit" className="thm-btn contact-page__btn"><i className="fas fa-arrow-circle-right"></i>Send a Message</button>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
    </div>, title), title)   
}
