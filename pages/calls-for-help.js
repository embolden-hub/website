import Layout from '../components/layout';
import MainSection from '../components/mainSection';

export default function CallsForHelp({passwordProvided, setPasswordProvided}){
    const title = 'Calls For Help';
    return Layout(MainSection(
        <div className='col-xl-12'>
            <p>At Embolden we have designated mobile phones that are pre-loaded with helpline contacts for agencies that can help and support you. You may also use these phones to contact the police should you wish to do so.</p>
            <p>You may use an Embolden phone inside our hub, outside in the courtyard or, if necessary, off-site.</p>
            <p>When you borrow an Embolden phone we ask that you:</p>
            <ul>
                <li>Do not delete or amend contacts</li>
                <li>Do not alter the phone in any way</li>
                <li>If you take the phone off-site, it is returned before closing time on the same day.</li>
            </ul>
        </div>
        , title)
        , title, passwordProvided, setPasswordProvided)
}





