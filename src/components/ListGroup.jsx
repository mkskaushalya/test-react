
function ListGroup({children, items, contries}){
    
    return(
        <>
            <h2>{children}</h2>
            <ul className="list-group">
            {contries.map((item, index) => (
            <li
              className="list-group-item"
              key={index}
              id={index.toString()}
            >
              {item}
            </li>
          ))}
            </ul>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;