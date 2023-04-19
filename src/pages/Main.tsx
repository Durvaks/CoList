import MenuList from "./Components/MenuList";
import MenuUser from "./Components/MenuUser";
import Lists from "./Components/Lists";
import ItemList from "./Components/ItemList";

interface Data {
    description: string;
    stats: string;
  }

const data: Data[] = [
    {
        description: "um texto qualquer",
        stats: "done"
    },
    {
        description: "um texto qualquer",
        stats: "done"
    },
    {
        description: "um texto qualquer",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    },
    {
        description: "no text",
        stats: "done"
    }
];



function getList(){  
    return (
        <ul>
            {data.map((item, index)=>{
                    return <ItemList description={item.description} stats={item.stats} key={index}/> 
                })}
        </ul>
    )
}

const Main = () => {
    return (
        <div className="h-screen bg-[#8a8971] max-w-xl relative overflow-hidden m-auto shadow-md shadow-slate-200 rounded-t-md">
            <h1 className="text-[#ffffff] bg-[#26250d] p-1 pl-5 text-[24px] rounded-t-md ">Colist</h1>
            <div className="flex bg-[#26250dc0] mt-0 text-[#ffffff]">
                <h2 className="text-[16px] capitaliz text-center w-full p-1">List Title</h2>
                <MenuList />
            </div>
            <main id="main_content_current_list" className=" max-h-screen overflow-y-scroll">
                {getList()}
            </main>
            <div className="flex gap-28 items-end justify-between absolute w-full bottom-0 p-3 text-[#ffffff] bg-[#8a8971] ">
                <div className="w-full ">
                    <MenuUser />
                </div>
                <div className="w-full">
                    <Lists />
                </div>
            </div>
        </div>
    )
}

export default Main;

