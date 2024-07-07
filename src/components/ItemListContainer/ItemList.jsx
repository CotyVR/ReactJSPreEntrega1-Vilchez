import Item from "./Item";

const ItemList = ({opc}) => {
    return (
        <div className="itemlist">
            {opc.map((opc) => (
                <Item  key={opc.id} opc = {opc} />
            ))}
        </div>
    );
};
export default ItemList;