import Layout from '../components/layout';
import MainSection from '../components/mainSection';
import Link from 'next/link';

export default function WhereToFindUs({passwordProvided,setPasswordProvided}){
    const title = "Find Us";
    return Layout(MainSection(<div className='col-xl-12'>
        <div className='row'>
            <div className='col-xl-12' style={{marginBottom:'20px'}}>
                <h5> Embolden Support Hub is located at Winslow Community Library. The address is as follows:</h5>
            </div>
        </div>
        <div className='row'>
            <div className="col-xl-6">
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{marginBottom:'20px'}}>
                        <Link href="https://www.buckscc.gov.uk/services/libraries/find-a-library/winslow/"><b>Winslow Community Library</b></Link><br/>
                            Park Rd<br/>
                            Winslow<br/>
                            Buckingham<br/>
                            MK18 3DN<br/>
                            Winslow | Buckinghamshire Council (buckscc.gov.uk)
                    </div>
                    <div>
                        <b>Opening Hours:</b><br/>
                        Monday- 10am-1pm<br/>
                        Wednesday-10am-1pm<br/>
                        Friday-1pm-5pm<br/>
                        Saturday-10am-1pm<br/>
                    </div>
                    <div>Please see the ‘Helplines’ page for information on helplines that you can speak to if we are not open.</div>
                </div>
            </div>
            <div className="col-xl-6">
                <img src='/images/wis-web.jpg'/>
                <div style={{overflow:'hidden',height:'350px', width:'350px', margin:'5px 0px'}}>
                    <iframe style={{width:'350px', height:'350px'}} id="gmap_canvas" src="https://maps.google.com/maps?q=winslow%20library&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                </div>
               
            </div>
        </div>
    </div>, title), title, passwordProvided, setPasswordProvided)
}



