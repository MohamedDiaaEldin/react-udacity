


const DeleteItem = ({items, setItems})=>{

   
  const deleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };
  
  const noItemsFound = () => items.length === 0;

   return <button onClick={deleteLastItem} disabled={noItemsFound()}>
       Delete Last Item
  </button>

}

export default DeleteItem