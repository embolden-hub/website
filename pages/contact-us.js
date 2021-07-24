import Layout from '../components/layout';
import MainSection  from '../components/mainSection';

export default function ContactUs(){
    const title = 'Contact'

    return Layout(MainSection(<div className='row'>
        <div className={'col-xl-12'}>
        <p>Please fill in the contact form below, or email us directly via email. We respond to emails between 9am-6pm Mon-Fri.</p>
        <p>If you would prefer to call a helpline you can visit our hub or see our helplines page.</p>
        <p>When you contact us, let us know:</p>
        <ul>
            <li>Safe ways we may contact you (a phone number or email)</li>
            <li>Safe times to contact you (eg; between 10am-4pm)</li>
        </ul>
        <p>Embolden is a walk in service and an Emboldener will usually be present. There may be times that we are ‘un-womaned’ as we are a small voluntary service. If you would like to guarantee in-person support, please contact us in advance if it is possible and safe to do this.</p>  
        <p><b>Be aware that we may fall into your junk mail.</b></p>  
        <p><b>To cover your tracks, delete sent emails, permanently delete ‘deleted’ emails and remember to delete any drafts. You may want to delete messages in your inbox if you no longer need them.</b></p>
        <ul className="contact-page__contact-list list-unstyled">
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
        <div className="col-xl-12">
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
