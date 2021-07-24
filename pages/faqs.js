import Layout from '../components/layout';
import MainSection from '../components/mainSection';

export default function FAQS({passwordProvided,setPasswordProvided}){
    const sections = [
        {
            title:'What do I say when I arrive and who do I ask?', 
            key:'1', 
            content:
            <div>
                <p>Embolden is a code-word scheme which means that when you arrive at the library you should try to ask a member of staff for ‘Eden’.</p>
                <p>This will give you the privacy of being able to ask for help without other library members aware.</p>
                <p>Keeping the location discrete helps to protect you and keep you safe as well as other women, children, staff and volunteers.</p>
                <p>If you forget though, you can just ask for our hub or support hub.</p>
                <p>Although the library staff and volunteers do not represent Embolden, they are a key part of Embolden and will happily show you to our hub.</p>
            </div>
        },
        {
            title:'What if somebody is already using the hub at Embolden?',
            key:'2',
            content:
            <div>
                <p>If we could have any super-power (besides ending violence against women and girls once and for all!) it would definitely be to double in size!</p>
                <p>Our main hub room is a bit of a squeeze, so is only big enough for one survivor at a time. Luckily, we can show you to a second room if this room is occupied. It won’t be quite as ‘Embolden’ but you’ll still have access to all the same resources.</p>
                <p>If our hub is engaged, or both rooms engaged, you may also choose to use a computer or take one of our phones outside to the courtyard or off-site. We believe in choices!</p>
            </div>
        }, 
        {
            title:'Can I bring my children to Embolden?',
            key:'3',
            content:
            <div>
               <p>Yes, children are more than welcome under your supervision. We also have a small range of books on domestic abuse for children that you may read together should you wish to. 
                  Our soft Koala bear Cuddles and her little joey are always happy to have friends over to play. </p>
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
                <p>There will always be a member of staff or volunteer from the library to show you to the hub.</p>
                <p>Unfortunately, there will be times when our hub is un-womaned for now and so make yourself at home in our hub (you can have a tea, coffee or a cold drink!).</p>
                <p>If you are feeling anxious, stressed or nervous why not try out something from our basket of fidget toys?</p>
                <p>If you would like to have a chat in person, we recommend emailing ahead of your visit to support@embolden-hub.org.uk so we can arrange a suitable time with you. You can do this on one of the library computers if you need to. Please see the ‘Contact Us’ page for how to contact us safely.</p>
                <p>If you would like to bring one friend or family member (women only please) you are welcome to do so.</p>
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
                    <p>If you have not been seen at a hospital or doctors or otherwise reported your injuries, you can fill out an incident form that we can store safely. With this, you can document what, when, where, how and any other details that you remember that may prove important if you report domestic violence. For this, we will need to take your details so that we can identify which form belongs to whom.</p>
                    <p>In the near future we may introduce a service where, with your consent, you can have injuries or marks photographed, documented and held securely. For now, if you would like some guidance on how to best capture and store photos, we can guide you on this.</p>
                </div>
        },
        {
            title:'I have a dyslexia or another reading disorder',
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
                    Please see our ‘Helplines and Chat’ page. <b>Remember in an emergency, dial 999.</b>
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

