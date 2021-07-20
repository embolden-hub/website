import Layout from '../components/layout';
import MainSection from '../components/mainSection';
import Link from 'next/link';

export default function WhereToFindUs(){
    const title = "Where To Find Us";
    return Layout(MainSection(<div className='col-xl-12'>
        <h2>Where to find us</h2>
        <p>Embolden Support Hub is located at Winslow Community Library. The address is as follows:</p>
        <div className='row'>
            <div className='col-xl-6'>
                <Link href="https://www.buckscc.gov.uk/services/libraries/find-a-library/winslow/">Winslow Community Library</Link><br/>
                Park Rd<br/>
                Winslow<br/>
                Buckingham<br/>
                MK18 3DN<br/>
                Winslow | Buckinghamshire Council (buckscc.gov.uk)
            </div>
            <div className="col-xl-6">
                <img src='/images/wis-web.jpg'/>
            </div>
        </div>
    </div>, title), title, true)
}



