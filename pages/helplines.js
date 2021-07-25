import Layout from '../components/layout';
import MainSection from '../components/mainSection';

export default function HelpLines({passwordProvided,setPasswordProvided}){
    const contacts = [
        {
            title:'Aylesbury Women’s Aid', 
            website:'www.aylesburywomensaid.org.uk',
            telephone: '01296437777',
            email: 'helpline@womensaid.org.uk', 
            otherDetails:<div>Helpine open 10am - 4pm, Monday to Friday except bank holidays</div>
        }, 
        {
            title:'Refuge', 
            website:'www.refuge.org.uk',
            telephone: '08082000247',
            otherDetails:<div>Online chat and contact form available</div>
        },
        {
            title:'Victims First',
            website:'www.victimsfirst.org.uk',
            telephone:'03001234148', 
        },
        {
            title:'Aylesbury Vale & Milton Keynes Sexual Assault & Abuse Support Service (AVMK SAASS)', 
            website:'https://avmksaass.org.uk',
            telephone: '01296 392 468',
            email: 'support@wavmksaass.org.uk', 
        },
        {
            title:'Forced Marriage Unit', 
            telephone: '0207 008 0151',
            email:'fmu@fco.gov.uk'
        },
        {
            title:'Karma Nirvana (Supporting those worried about honour based abuse and forced marriage)', 
            website:'www.karmanirvana.org.uk',
            telephone: '0800 5999 247',
            email: 'helpline@womensaid.org.uk', 
            otherDetails:<div>Helpline open Mon - Fri 9.00am - 5.00pm</div>
        }, 
        {
            title:'Galop (LGBT)', 
            website:'www.galop.org.uk',
            telephone: '0800 999 5428',
            email: 'help@galop.org.uk', 
        }, 
        {
            title:'Opoka (Polish women)', 
            website:'www.opoka.org.uk',
            telephone: '0300 365 1700',
            email: 'helpline.opoka@gmail.com', 
        },
        {
            title:'Flag DV', 
            website:'www.flagdv.org.uk',
            telephone: '01635 015854',
            email: 'hello@flagdv.org.uk',   
        },
        {
            title:'National Centre for Domestic Violence',
            website: 'ncdv.org.uk',
            email: 'office@ncdv.org.uk',
            telephone: '08009702070',
            otherDetails:<div>You can also text to 60777</div>
        },
        {
            title: 'Rights of Women',
            email: 'info@row.org.uk',
            otherDetails: 
            <div>
                <ul>
                <li>020 7251 6577 (Family Law)</li>
                <li>020 7118 0267 (Immigration and Asylum Law)</li>
                </ul>
            </div>
        },
        {
            
            title:'Domestic Violence Assist',
            website: 'https://www.dvassist.org.uk/police-referral-form',
            telephone: '0800 195 8699',
            otherDetails:<div>Non-molestation orders, prohibited steps orders and occupation orders</div>
        },
        {
            title:' LIZ GOUGH – ENCOUNTER COMPASSION',
            website: 'ww.encountercompassion.org',
            otherDetails:<div>
                  Former midwife, and now counsellor and psychotherapist experienced in trauma, sexual assault, abuse, modern slavery and other areas
            </div>

        }
    ]


    const renderItem = (key, value) => { 
        const getHref = () => key === 'Email' ? `mailto:${value}`: key === 'Telephone' ? `tel:${value}` : value;
        return <li>
                    <div className="left"> <p>{key}:</p> </div>
                    <div className="right"><h5><a href={getHref()}>{value}</a></h5></div>
              </li>
    }

    const renderCard = (item) => { 
       return  <div key={item.title} className={'col-xl-6'}>
           <div className="event-details__right-sidebar" 
                    style={{margin:'5px', minHeight:'330px', display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                    <div className="event-details__right-sidebar-title">
                        <h4>{item.title}</h4>
                    </div>
                    <ul className="event-details__right-sidebar-list list-unstyled">
                        {item.website ? renderItem('Website', item.website) : null}
                        {item.email ? renderItem('Email', item.email) : null}
                        {item.telephone ? renderItem('Telephone', item.telephone) : null}
                    </ul>
                    {item.otherDetails ? <p>{item.otherDetails}</p> : <></> }
            </div>
       </div>
       
    }

    const title = 'Helplines';
    return Layout(MainSection(<div className='row'>
        {contacts.map(renderCard)}
    </div>, title), title, passwordProvided, setPasswordProvided)
}