import Layout from '../components/layout';

export default function Home(){
    return Layout(<div className="row">
        <div className="col-xl-12" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img style={{height:'15em', width:'100%'}}  src={'images/logo-purple-no-back.svg'}></img>
        </div>
        <div className='col-xl-12' style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <h2>We Belive</h2>
            <p>At Embolden, we believe in emboldening women by providing a safe, discrete place within the community to explore options and make calls for help. We aim to empower through information, support and kindness.  
Every woman regardless of race, ethnicity, class, religion, sexual orientation and ability deserves to feel safe and respected. </p>
            <p>The links in the menu above provide useful information and advice to help with any situation you may find your self in. </p>
        </div>
    </div>, 'Home', true)
}


