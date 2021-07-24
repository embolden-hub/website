import Layout from '../components/layout';

export default function Home({passwordProvided,setPasswordProvided}){
    return Layout(<div className="row">
        <div className="col-xl-12" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img style={{height:'15em', width:'100%'}}  src={'images/logo-purple-no-back.svg'}></img>
        </div>
        <div className='col-xl-12' style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <h2>We Believe</h2>
            <p>Embolden: To give someone courage or confidence, to instil boldness courage or resolution enough to overcome timidity or misgiving.</p>
            <p>Emboldener: Someone who emboldens.</p>
            <p>At Embolden, empowering survivors through information, support and kindness is at the heart of what we do.</p>
            <h3>E for Embolden, E for Equality</h3>
            <p>Part of our ethos is the belief that every woman and child should not only feel and be safe and respected but worthy, celebrated, empowered and emboldened.</p>
            <p>This means being a place that caters to all, as much as we are able, and a service that begins and ends with equality amongst women of all races, ethnicities, religions, classes, abilities and sexual orientation.</p>
            <p>We hope for a day where inclusivity is normal enough to not have to highlight.</p>
            <p>But we recognise that equality does not mean treating everybody the same; equality can only be achieved if everyone starts from the same place.</p>
            <p>At Embolden, we have an LBT Emboldener (lesbian/bi-sexual/trans) for LBT women, and an Abilities Emboldener, to keep our support accessible to survivors with learning disabilities or physical disabilities.</p>
            <p>Embolden is a baby amongst giants and so we will help signpost you to an organisation that suits your individual needs. We stand with all organisations that share this ethos, and their work and dedication has inspired us.</p>
            <h3>Feminism</h3>
            <p>We believe that if you don’t get a problem from its roots, it will continue to grow. We empathise with the struggle that women have endured from patriarchy, sexism and male violence toward women and girls.</p>
            <p>We strive to make a difference on a local level and will be implementing a plan in the near future, starting at the roots.</p>
        </div>
    </div>, 'Home', passwordProvided, setPasswordProvided)
}


