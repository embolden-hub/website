import Layout from '../components/layout';
import MainSection from '../components/mainSection';

export default function HowYouCanHelp({passwordProvided,setPasswordProvided}){
    const title = 'How Can You Help'; 

    return Layout(MainSection(<>
        <div className="col-xl-12">
            <h3>Like our cause and want to give us a helping hand? There are a few things you can do to help us: </h3>
            <b style={{width:'100%', display:'flex', justifyContent:'center'}}> Time </b>
            <p>If you would like to volunteer with Embolden, please contact support@embolden-hub.org.uk and mark the email as “Volunteering”. We can let you know of any roles available and provide you with an application form. We especially welcome applications from those with experience in similar work roles. </p>
            <b style={{width:'100%', display:'flex', justifyContent:'center'}}> Gifting </b>
            <p>We have an Amazon Wishlist that is updated regularly. We like this way of donating as it puts the power in your hands and gives you the chance to donate knowing exactly how it will help.</p>  
            <b style={{width:'100%', display:'flex', justifyContent:'center'}}> Grants </b>
            <p>We rely solely on donations. If you would like to hear more or have a chat with the intention of giving us a grant we would (of course!) be more than happy to receive an email at support@embolden-hub.org.uk.</p> 
            <b style={{width:'100%', display:'flex', justifyContent:'center'}}> Awareness </b>
            <p>If you are an agency or professional and would like to download one of our posters, please email support@embolden-hub.org and we can send you our most up to date poster. This can be used to remind staff about Embolden, or hang inside ladies toilets. 
Spread the word about Embolden by telling your female friends, family and co-workers about Embolden. Especially those you suspect are suffering from domestic abuse. Remember that not everyone speaks openly about domestic abuse and so there is benefit in spreading awareness to all women. 
Please remember that to keep women, children and staff and volunteers safe, it’s really important that we spread awareness carefully and keep Embolden’s location as discrete as possible. 
For this reason, we do not have any social media and this website is password protected.</p>
        </div>
    </>, title), title, passwordProvided, setPasswordProvided)
}

