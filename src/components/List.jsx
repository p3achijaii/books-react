function List({items, renderItem, emptyMessage = "No items found"}) {

    if(!items.length) return <p>{emptyMessage}</p>

    return (
        <ul>
            {items.map((item, index) => (
                <li key = {index} > {renderItem(item)}</li>
            ))}
        </ul>
    )
}

export default List