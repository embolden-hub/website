import Layout from '../components/layout';
import MainSection from '../components/mainSection';


export default function ClairesLaw(){
    const title = "Claire's Law";
    return Layout(MainSection(<div className='col-xl-12'>
            <p>Clare’s Law can help if you are concerned that your partner or the partner of a friend, family member or colleague may have a violent history against women. </p>
            <p>Clare’s Law was introduced in 2009 after Clare Wood was murdered by her partner, who, unbeknown to her, had a history of violent offences against women.</p>
            <p>You can place an application with your local police force who will do checks on the individuals past, and if there is a record of violent offences or offences that they believe may present a danger to the individuals partner or their children, this information will be shared.</p>
            <p>It is important to note that the police will decide on the best person to inform of this. If you are enquiring on behalf of somebody else, it may be that this information is disclosed to them directly. In such a case, officers will protect the identity of the applicant.</p>
            <p>Clare’s Law disclosures are confidential and you will be talked through the process. </p>
            <p>You can learn more about this process at Embolden.</p>
    </div>, title), title)
}