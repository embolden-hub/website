import Layout from '../components/layout';
import MainSection from '../components/mainSection';

export default function SafetyResources({passwordProvided,setPasswordProvided}){
    const title = "Safety Resources";
    return Layout(MainSection(<div className='col-xl-12'>
        <p>At Embolden we believe that as well as empowering women with information, safety resources can also be an important tool. Leaving an abusive relationship can be an anxious time- especially for survivors that live in fear of violent repercussions.</p>
        <p>We also know that domestic abuse can have profound psychological consequences and every woman deserves to feel safe and have as much peace of mind as possible.</p>
        <p>We are able to offer advice on keeping safe and recommend safety resources that may benefit you.</p>
        <p>We don’t think financial struggles should be a barrier to protection. We will give out free panic alarms, window alarms and other safety resources to survivors in need of them. No invasive checks, just ask.</p>
        <p>Note: We hope we never have to say no, but all resources are subject to availability. If we run out we can contact you when more become available.</p>     
    </div>, title), title, passwordProvided, setPasswordProvided)
}



