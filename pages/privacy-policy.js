import Layout from '../components/layout';
import MainSection from '../components/mainSection';

export default function PrivacyPolicy(){
    const title = "Privacy Policy";
    return Layout(MainSection(<div className='col-xl-12'>
        <h3>Who we are</h3>
                <p>
                Embolden is a charitable unincorporated association in England. We are not a registered company or charity. Our work is purely voluntary and we do not profit. 
Information.
                </p>
                <p>
                Embolden Support Hub will only collect and store information that you have chosen to provide via the contact form, or via email.
Where a volunteer application is deemed unsuitable, the application will be permanently deleted and no longer obtainable.
Applications that are characteristically suitable for future vacancies will be deleted after a period of 3 months, after which the volunteer will need to re-express interest by completing a further application. 
All data held is stored on a password protected computer that has up to date anti-virus software. Information is also stored on a designated Embolden phone. 
We will never sell or swap your details. 
We endeavour to respect and protect confidentiality but in rare cases it may be necessary to share your information to other agencies without your consent. 
If ordered by the court to provide information, we would be legally obliged to provide this. 
Furthermore, if information was disclosed that related to national security, namely, terrorism disclosures, it would be necessary for us to inform authorities. 
Lastly, if we believed that yourself, another adult, child or young person was at significant risk of harm or that there was imminent danger, we would have a duty to act. Where possible we would always strive to inform you beforehand so that you are not caught off guard. 
There are some circumstances where we may need to act and breach this confidentiality without first informing you. This mostly applies to cases where we are unable to reach you and have concern for your safety or the safety of another adult, young person or child. This may be because we have tried to reach you but were unsuccessful or because we do not have a safe means of contacting you.
                </p>
                <h3>The type of information collected</h3>
                <p> We may collect some, or all of the following data:</p>
                <ul>
                <li>Your name</li>
                <li>Your contact number(s)</li>
                <li>Your email address</li>
                <li>Your address</li>
                <li>Your sex</li>
                <li>Your date of birth</li>
                <li>Other personal information you choose to provide</li>
                <li>Employment status (Volunteers only)</li>
                <li>Job experience (Volunteers only)</li>
                <li>Unspent criminal convictions (Volunteers only)</li>
                <li>Pending court cases (Volunteers only)</li>
                </ul>
                <p><b>We will never ask you to provide bank or payment details.</b></p>
                <h3>How long is my data stored for? </h3>
                <p>There is no set length of time that your data is stored for. </p>
                <p>It may be necessary to delete data sporadically for space conserving purposes, in which case, older data of users that are no longer using or participating in our services will be deleted first. </p>
                <h3>Rights to Data </h3>
                <p>You have the right to access any data held about you. There is no cost for this service but to access this you must submit a request in writing along with evidence of your identity. </p>
                <p>If you would like to withdraw consent to us having your information and would like this deleted, we can do this providing there is no lawful reason why it should be kept. </p>
                <p>Please email <a href="mailto:support@embolden-hub.org.uk">support@embolden-hub.org.uk</a>. if you would like to submit a request. </p>
    </div>, title), title)
}