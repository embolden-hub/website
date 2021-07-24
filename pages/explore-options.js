import Layout from '../components/layout';
import MainSection from '../components/mainSection';

export default function ExploreOptions({passwordProvided,setPasswordProvided}){
    const title = 'Explore Options';
    return Layout(MainSection(<div className='col-xl-12'>
    <p>At Embolden we believe in empowering you to make informed decisions through information and resources. We have a range of domestic abuse and violence books, self-help books and work-books, including those from the Freedom Programme.</p>
    <p>We have note-pads and pens which you can help yourself to, should you want to jot down information or complete self-help exercises.</p>
    <p>We also have a small children's range of books such as "Anger is Okay, Violence is Not".</p>
    <p>As well as books we have leaflets and posters from other domestic abuse agencies.</p>
    <p>Embolden is a baby amongst giants and so we are happy to refer you to other amazing organisations for more support. As well as referring you directly we can also give advice on how to self-refer.</p> 
    <p>You may simply want to have a cup of tea or coffee and reflect on your options. We know this can be overwhelming.</p>
    <p>If you would like to use one of the library computers, please complete your library membership at the library desk.</p> 
    <b>We know that not everybody likes to speak with the police, but should you wish to speak with them, Embolden is a safe and discrete place to do it. If you would like to be accompanied by an Emboldener please ask and this can be arranged.</b>
    </div>, title), title,  passwordProvided, setPasswordProvided)
}