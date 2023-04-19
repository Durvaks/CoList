import MenuItemList from "./MenuItemList";

type itemComponents = {
    description: string;
    stats: string;
};

const MenuItem = (props: itemComponents) => {
    return (
        <li className=" bg-[#d9d9d95b] m-2 p-2 rounded-md border-b border-[#000000] flex justify-between">
            <span id="item_content" className=" capitalize">{props.description}</span>
            <MenuItemList stats={props.stats}/>
        </li>
    );
};

export default MenuItem;