import Layout from '../components/layout';

export default function ContactUs(){
    const renderEmailContact = () => {}

    return Layout( <div className='row'>
    <div className='col-xl-12'>
        <h2>Contact Us</h2>
        <p>If you would like to contact Embolden, you can do so on our contact form below. Alternatively, you can email Embolden at support@embolden-hub.org.uk.</p>
            <div className='row'>
                <div className='col-xl-6'>
                    <h4>When you email us, please let us know:</h4>
                    <ul>
                        <li>The safest way to contact you (phone/email)</li>
                        <li>Safe days and times to contact you.</li>
                        <li>If you would like to arrange to meet at Embolden but it is not safe for us to contact you, please let us know which day/time you will be at Embolden (Please check library opening hours). Please give us a minimum of 36 hours notice. In most cases, we will be able to accommodate this but there may be times this is not possible.</li>
                        <li>If we call you and you would like us to use a code word or question to check that it is safe to call, please advise of which code word or question you would like and indicate which response indicates that it is not safe to talk at the moment.</li>
                    </ul>
                    <b>Remember to delete emails if you are concerned that your communications may be accessed.</b>
                </div>
                <div className='col-xl-6'>  

                </div>
            </div>
        </div>
    </div>, 'Contact Us')
}



