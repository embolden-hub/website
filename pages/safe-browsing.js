import Layout from '../components/layout';
import MainSection from '../components/mainSection';

export default function SafeBrowsing({passwordProvided,setPasswordProvided}){
    const title = "Safe Browsing";
    return Layout(MainSection(<div className='col-xl-12'>
            <p>Please take a look at the below tips on how to safely browse this and other sites of this nature</p>
                <h3>Passwords</h3>
                <ol>
                    <li>The first page you see will say ‘Embolden’ only. This is to let you know that you have reached the correct page. It will not be clear from this which site you are entering.</li>
                    <li>You will need a password to enter our site. If you are reading this you will have already entered it. You will need to enter this same password once again to open the ‘Find Us’ page to view our location.</li>
                    <li>From the search history page, you would have to re-enter the password when clicking on the site.</li>
                    <li>If we believe this password has been compromised, we will have to change this password. In this case, we will do our best to inform everyone that we can safely contact of this change. For security reasons, it will not be able to do this via email if you are a service user.</li>  
                    <li>If we have to change our site password, this will be displayed on our newest posters and all local agencies and services will be made aware of this change.</li>
                    <li>If you have forgotten the password or we have changed our password and you are unaware of it, you can visit Embolden to ask a member of library staff for the new one. The password will be displayed in our hub room too.</li>
                    <li>Please avoid writing this password down or giving it out to anyone. You may share it with female members of your family, friends and co-workers though.</li>
                </ol>
                <h3>Quick Exit</h3>
                <ol>
                    <li>On each page of our website there is a quick exit button that diverts to Facebook, Twitter, Google or Youtube should you need to exit the page quickly.</li>
                    <li>It may be helpful to have in mind which you would click on should you need to exit quickly</li>
                 </ol>
                 <h3>Private Browsing and Browsing History </h3>
                 <p>In internet explorer, safari, opera, firefox and chrome, you have the option to turn on ‘private browsing’ which means there will be no web history or web cache to delete. We recommend doing this where possible in case you do not have the opportunity to delete history or you forget.
If you do not want to use private browsing, you will need to delete your browsing history. Instructions for this are below.</p> 
                 <h4>Internet Explorer</h4>
                 <ul>
                    <li> Click on the Tools menu (in the row at the top of the browser)</li>
                    <li>Select Internet Options from the drop down menu; you should now be on a tab that says 'General' – if not, select 'General'; under the title, 'Temporary Internet Files'</li>
                    <li>Click on 'Delete Files'. You can also check the box that says 'delete all offline content'</li>
                    <li>Then, under 'History' click on 'Clear History'</li>
                    <li>Then click OK, at the bottom</li>
                </ul>
                <h4>Google Chome</h4>
                <ul>
                    <li> Open the Chrome app.</li>
                    <li> "More Settings" </li>
                    <li>Under 'Advanced' select 'Privacy' and 'Clear browsing data'</li>
                    <li>At the top, select the dropdown under 'Clear data from the'</li>
                    <li>Choose a time period, such as past hour or past day.</li>
                    <li>Select types of information you want to remove</li>
                    <li>Click 'Clear Data'</li>
                </ul>
                <h4>Firefox</h4>
                <ul>
                    <li>Click menu button, choose 'History', and then 'Clear Recent History'.</li>
                    <li>Select how much history you want to clear: click the drop-down menu next to 'Time Range' to choose how much of your history Firefox will clear.</li>
                    <li>Lastly, click 'Clear Now'.</li>
                </ul>
                <p>
                    <b>You could use your local library to browse our site and the sites of other organisations if you need to. It may be useful to create a new email address at the library that you only access on a public computer.
                    </b>
                </p>    
    </div>, title), title,  passwordProvided, setPasswordProvided)
}