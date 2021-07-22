import Layout from '../components/layout';
import MainSection from '../components/mainSection';
import Link from 'next/link';

export default function WhereToFindUs(){
    const title = "Where To Find Us";
    return Layout(MainSection(<div className='col-xl-12'>
        <div className='row'>
            <div className='col-xl-6'>
                <p>Embolden Support Hub is located at Winslow Community Library. The address is as follows:</p>
                <Link href="https://www.buckscc.gov.uk/services/libraries/find-a-library/winslow/">Winslow Community Library</Link><br/>
                Park Rd<br/>
                Winslow<br/>
                Buckingham<br/>
                MK18 3DN<br/>
                Winslow | Buckinghamshire Council (buckscc.gov.uk)
                <img src='/images/wis-web.jpg'/>
            </div>
            <div className='col-xl-6'>
                <h3>Opening Hours</h3>
                <p>Our opening hours are currently as follows:</p>
                <p>Monday- 10am-1pm</p>
                <p>Wednesday-10am-1pm</p>
                <p>Friday-1pm-5pm</p>
                <p>Saturday-10am-1pm</p>
                <p>Please see the ‘Helplines’ page for information on helplines that you can speak to if we are not open.</p>
            </div>
        </div>
    </div>, title), title, true)
}
