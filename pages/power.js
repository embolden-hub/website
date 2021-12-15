import Layout from '../components/layout';
import MainSection from '../components/mainSection';


export default function Power({passwordProvided,setPasswordProvided}){
    const title = "Power";
    return Layout(MainSection(<div className='col-xl-12'>
           <h2>The Power Programme</h2> 
           <p>Our Power programmes have been developed by us to give women more choice, for longer, when reporting domestic abuse.</p>
           <p>We know that events are best remembered soon after they happen, but if you don’t feel ready to talk to the police, this can be difficult.</p>
           <p>We also know that bruises, marks and scars fade with time.</p> 
           <p>There is support available if you would like to report domestic abuse to the police during the reporting stage, or throughout the court process.</p>
           <h3>Power of Words (POW)</h3>
           <p>If you would like to record an incident of abuse at Embolden, you can complete an incident report form. This is best done as soon as possible after the incident as you will recall details with more clarity, but there’s no ‘deadline’. Our POW forms are designed to be written statements that will be admissible in court, similar (but not the same) as writing a witness statement with the police.</p>
           <p>We can hold on to your form for up to 5 years.</p>  
           <p>For more information on this process, please contact us at Embolden.</p> 
           <h3>Power of Photography (POP)</h3>
           <p>If you have injuries that you would like to record, you could ask a friend that you trust to take some for you. It’s important to keep the originals and do not edit them. Try to capture the injuries from a range of distances- starting from further away, followed by mid-range and finally close-up. It’s better to take too many than not enough. Avoid cluttered backgrounds where possible, a neutral coloured wall works best.</p> 
           <p>Similar to POW, if you would like your injuries photographed, recorded and stored, you can do this through POP.</p>
           <p>We have a designated camera kit at Embolden as well as ForensiGraph rulers for accurately recording injuries. We will store your photographs securely for up to 5 years, on your own unique memory card.</p>
           <p>For more information on POP, please email us at <a href="mailto:support@embolden-hub.org.uk">support@embolden-hub.org.uk</a></p>
    </div>, title), title, passwordProvided, setPasswordProvided)
}
