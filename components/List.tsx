
type ListPrams = {
  description : string;
}



function List(props : ListPrams){
  return (
    <p>{props.description}</p>
  )
}

export default List;