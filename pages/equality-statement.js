import Layout from '../components/layout';
import MainSection from '../components/mainSection';

export default function EqualityStatment(){
    const title = 'Equality Statement'
    return Layout(MainSection(<div className={'col-xl-12'}>
        <h3>E for Equality</h3>
        <p>E is for Embolden but it is also for equality. Equality is close to our hearts and we truly believe that all women regardless of race, ethnicity, religion, class, sexual orientation and ability deserve to feel safe, respected, beautiful, celebrated, empowered AND emboldened.</p>
    </div>, title), title)
}