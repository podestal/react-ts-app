import { useState } from "react"

interface Props {
    items: string[],
    heading: string,
    onSelectItem: (item: string) => void
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {

    const [selectedIndex, setSelectedIndex] = useState(-1)

    const message = items.length === 0 && <p>Not item found</p>
    

    return (
        <>
            <h1>{heading}</h1>
            <p>{message}</p>
            <ul className="list-group">
                {items.map((item, index) =>  
                    <li 
                        key={index} 
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        onClick={() => onSelectItem(item)}
                    >{item}</li>
                )}
            </ul>
        </>
    )
}

export default ListGroup