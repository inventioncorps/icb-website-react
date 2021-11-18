
const Introduction = (props) =>{
    return(
    <div className="Introduction">
        <img src={props.img} />
        <h2> {props.HeaderText} </h2>
        <h3> {props.Description} </h2>
        <a href={props.Hyperlink}>

    </div>
    );
}
export default Introduction;