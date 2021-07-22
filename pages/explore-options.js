import Layout from '../components/layout';
import MainSection from '../components/mainSection';

export default function ExploreOptions(){
    const tile = 'Explore Options';
    return Layout(MainSection(<>
        <p>At Embolden we have a range of books and other information that can help you reflect on your situation and think about your options. 
We also have self-referral forms for Women’s Aid ready to be filled out, or you can access these online on Women’s Aid website under ‘Make a Referral’. 
If you need help filling this form in or would like us to refer you on your behalf, we can arrange to meet to fill this form in together. 
Please email support@embolden-hub.org.uk.</p>
    <p>We also have the Survivors Handbook from Women’s Aid that is an invaluable tool.</p>
    </>, title), title)
}