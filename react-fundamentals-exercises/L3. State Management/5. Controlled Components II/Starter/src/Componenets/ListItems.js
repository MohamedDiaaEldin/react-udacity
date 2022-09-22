import "../App.css";

const ListItems = ({items})=>{  

    return(
    <ol className="item-list">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}        
    </ol>
    )
}


export default ListItems
