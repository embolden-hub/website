import Layout from '../components/layout';
import MainSection from '../components/mainSection';
import Link from 'next/link';
import { useState } from 'react';

const hashCode = function(s) {
    var h = 0, l = s.length, i = 0;
    if ( l > 0 )
      while (i < l)
        h = (h << 5) - h + s.charCodeAt(i++) | 0;
    return h;
};


export default function WhereToFindUs({passwordProvided,setPasswordProvided}){
    const [pwdEntered, setPwdEntered] = useState(false);
    const [password, setPassword] = useState(undefined);
    
    const check = () => password !== undefined ? setPwdEntered(hashCode(password) === 1516355) : null;
    const handleKeyDown = (e)  => {
        if (e.key === 'Enter') {check()}
    }

    const enterPassword  = () => {
        return <div className="row">
                    <div className='col-xl-12' style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                        <h2 style={{margin:'10px'}}>Password</h2>
                        <input
                        style={{margin:'10px'}} 
                        type="password" 
                        className="form-control" 
                        id="Password1" 
                        placeholder="Password" 
                        onKeyDown={handleKeyDown}
                        onChange={evt => setPassword(evt.target.value)}/>
                        <a onClick={check} className="thm-btn">Submit</a>
                    </div>
              </div>
    }


    const title = "Find Us";
    return Layout(!pwdEntered ? enterPassword() : MainSection( <div className='col-xl-12'>
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



