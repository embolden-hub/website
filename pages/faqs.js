import Layout from '../components/layout';
import MainSection from '../components/mainSection';
import Link from 'next/link';

export default function FAQS({passwordProvided,setPasswordProvided}){
    const sections = [
        {
            title:'What do I say when I arrive and who do I ask?', 
            key:'1', 
            content:
            <div>
                <p>Embolden is a code-word scheme which means that when you arrive at the library you can ask a member of staff for ‘Eden’. This will allow you to enter discretely.</p> 
                <p>Please note, if you have booked in with an Emboldener, they will keep an eye out for you at the time you have agreed and will give you further details on how to find Embolden.</p> 
                <p>Keeping the location discrete helps to protect you and keep you safe as well as other women, children, staff and volunteers.</p>
                <p>Although the library staff and volunteers do not represent Embolden, they are a key part of Embolden and will happily show you to our hub.</p>
            </div>
        },
        {
            title:'What if somebody is already using the hub at Embolden?',
            key:'2',
            content:
            <div>
                <p>We are a quiet service and are yet to have this happen so it is unlikely. Our sessions are predominantly booked in advance.</p>
                <p>However, if we could have any super-power (besides ending violence against women and girls once and for all!) it would definitely be to double in size!</p>
                <p>We plan for unlikely though- if our main room is occupied, we can show you to a second safe space where you’ll have access to all of the same resources. You could also choose to use a computer or borrow one of our hub phones. We believe in choices!</p>
            </div>
        }, 
        {
            title:'Can I bring my children to Embolden?',
            key:'3',
            content:
            <div>
               <p>Yes, children are more than welcome under your supervision. We also have a small range of books on domestic abuse for children that you may read together should you wish to. 
                  Our soft Koala bear Cuddles and her little joey are always happy to have friends over to play. </p>
                <img style={{margin:'20px', width:'300px', height:'300px'}} src="/images/CUDDLES.jpeg"/>
            </div>
        }, 
        {
            title:'Do I need to check in at Embolden?',
            key:'4',
            content:
            <div>
                <p>It is possible to use our our hub anonymously if you wish, but we strongly suggest signing in as it can be helpful for you to record your visit.</p>
                <p>We have a special process to keep all your details safe. When you visit Embolden, an Emboldener will ask you if you would like to sign in. All entries will be placed in a lockable box for safe-keeping. </p>
                <p>In the event that our hub is unwomaned, we have a fancy (yet secure!) post box. If you wish to sign yourself in, please complete the sign in form and post it through. Our post box will be checked at the first opportunity and any contents transferred for safe keeping.</p>
            </div>
        },
        {
            title:'Can you give me advice at Embolden?',
            key:'5',
            content:
            <div>
                <p>Unfortunately, we can’t give you direct advice about what to do in your situation, but there is lots we can do. We can:</p>
                <ul>
                    <li>Refer you to other local agencies such as Women’s Aid for help</li>
                    <li>Assist you with form-filling if you would prefer to self-refer and are not feeling confident with filling out.</li>
                    <li>Check for refuge spaces.</li>
                    <li>Help you understand what help and support is available and discuss this with you.</li>
                    <li>Help you make a safety plan should you wish to leave.</li>
                    <li>Help arrange a safe time for you to speak with police at Embolden, or an outreach worker from Women’s Aid, should you wish to.</li>
                    <li>Help you fill out a Clare’s Law application if you need help or a safe place to do this.</li>
                    <li>Provide you with a safe place to meet with police if there is a Clare’s Law disclosure.</li>
                </ul>
            </div>
        }, 
        {
            title:'Can I use the toilet at Embolden?',
            key:'6',
            content:
            <div>
                <p>Yes, please ask a staff member and they will direct you to the toilets.</p>
            </div>
        },
        {
            title:'What if there isn’t a volunteer at Embolden when I arrive?',
            key:'7',
            content:
            <div>
                <p>We ask that you book a time with an Emboldener in advance if you would like in-person support. You can do this by emailing us at support@embolden-hub.org.uk. If we have no bookings, there may be times when our hub is un-womaned due to being a small voluntary service. We will still be able to offer a support call in most cases, and will accommodate last minute bookings where possible.</p>
                <p>If you have not booked and need to make a last minute, urgent call (non-emergency only) to 101 or a domestic abuse organisation, please visit our hub where you’ll find one of our Embolden phones. This can be used even when an Emboldener is not present.</p>
            </div>
        },
        {
            title:'Will what I say at Embolden be confidential?', 
            key:'8',
            content:
            <div>
                <p>
                    When speaking with a volunteer at Embolden, what you say will remain confidential, unless you consent to disclosing information to another service. However, in some cases, it may be necessary to do so, if we believe there is an imminent risk to your welfare or the welfare of a child. If this is the case, we will discuss this with you first, so you will never be caught off guard.
                </p>
            </div>
        }, 
        {
            title:'Can I meet with police at Embolden?',
            key:'9',
            content:
                <div>
                    <p>
                        Yes you can. If you would like to speak with the police and need a safe and discrete place to do it, you can arrange this at Embolden. If you would some moral support whilst speaking with police, you can request to be accompanied too.'
                    </p>
                </div>
        },
        {
            title:'Can I record my injuries at Embolden?', 
            key:'10',
            content:
                <div>
                    <p>You can document your injuries, and sometimes, damage to property, at Embolden. Your file will be stored safely for up to 5 years. Please visit Embolden or email us for more information.</p>
                    <p>We are currently planning the introduction of our POP Programme ('Power of Photography') which will extend this to include digital photography for those who are in two minds about reporting domestic violence.</p> 
                    <p>You can also fill in an online record of injuries at the following form: <Link href='https://forms.office.com/r/pr19rLrdPs'><a>https://forms.office.com/r/pr19rLrdPs</a></Link> or scan the below QR code:</p>
                    <img style={{width:'200px', height:'200px'}} src='/images/form.png'/>

                </div>
        },
        {
            title:'I have dyslexia or another reading disorder',
            key:'11',
            content:
                <div>
                    <p>
                        Contact support@embolden-hub.org.uk if you are worried about understanding the written information and books we have available and we can arrange a time to support you with them.
                    </p>
                </div>
        },
        {
            title:'Is there disabled access?',
            key:'12',
            content:
                <div>
                    <p>Although there is disabled access into the library and computer area, the hub is a bit of a squeeze (sorry!).</p> 
                    <p>If you are worried about access, please contact us on support@embolden-hub.org.uk and we can arrange a time to bring resources into the main area of the library for you.</p>
                    <p>Should you wish to make a call, you can use the library courtyard which has double doors, or you can take the phone off-site.</p>
                </div>
        },
        {
            title:'Can I bring a friend or family member with me?',
            key:'13',
            content: 
                <div>
                    <p>Yes, on the contrary, we encourage you to reach out to friends or family for support where possible.</p>
                    <p>Please only bring a female friend or family member. Due to the small space, this will need to be one extra person only.</p>
                </div>

        },
        {
            title:'Embolden is closed and I need help',
            key:'14',
            content:
                <div>
                    Please see our ‘Helplines' page. <b>Remember in an emergency, dial 999.</b>
                </div>
            
        }, 
        {
            title:'How can I remember the password to this website? Will it always be the same?',
            key:'15', 
            content: 
                <div>
                   <p>If you forget the password, type ‘Year first episode of Friends aired’ in google. The year is the password. This will hopefully help you remember. If this does not help, please ask a member of staff at the library who will be able to remind you. Or alternatively, posters in the ladies toilets in Winslow will have this displayed on the poster. 
The website is password protected to prevent identifying details about our location being leaked to perpetrators. If we need to change this password in the future, please visit the library and any member of staff will be able to give you the new password. 
                   </p>
                </div>
        },
        {
            title:'Do you have internet access at Embolden?',
            key:'16',
            content:
                <div>
                    <p>Besides the computer area for library members just outside of our Embolden room, we now have a laptop free to use for those visiting us. So if you would like to use an online chat service or other online resources you may do so!</p>
                </div>
        }, 
        {
            title:'What is your Support Call service?', 
            key:'17',
            content:
                <div>
                    <p>We are now offering a support call service for women that may be hesitant about visiting us in person or unable to do so.</p>
                    <p>To book a support call, please book through support@embolden-hub.org.uk.</p>
                    <p>We will listen to you and your feelings and discuss your options. Please note, it is not a counselling service as we are not counsellors.</p>  
                    <p>If you would like to come in and see us after speaking with us by phone, we can book you in.</p>
               </div>
        }
    ]


    const renderSection = (section) => {
        return <div className="accordion-item">
        <h2 className="accordion-header" id={`heading-${section.key}`}>
            <button className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapse-${section.key}`} 
                    aria-expanded="true" 
                    aria-controls={`collapse-${section.key}`}>
                {section.title}
            </button>
        </h2>
        <div id={`collapse-${section.key}`} 
            className="accordion-collapse collapse" 
            aria-labelledby={`heading-${section.key}`} 
            data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                    {section.content}
                </div>
            </div>
        </div>
    }
 
    const renderAccordian = () => { 
        return   <div className="accordion" id="faqAccordion">
                 {sections.map(section => renderSection(section))}
        </div>
    }

    const title = 'FAQs'; 

    return Layout(MainSection(<div className='col-xl-12'>
        <p>If you have a question that is not covered here, please feel free to email on support@embolden-hub.org.uk</p>
        {renderAccordian()}
    </div>, title), title,  passwordProvided, setPasswordProvided)
}

