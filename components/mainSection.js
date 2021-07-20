export default function MainSection(contents, title){ 
    return  <div className="container">
    <div className="section-title text-center">
        <h2>{title}</h2>
    </div>
    <div className={'row'}>
        {contents}
    </div>
</div>
}