import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, PencilIcon} from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";

type itemComponents = {
    description: string;
    stats: string;
};

const MenuItem = (props: itemComponents) => {
    const [status, setStatus] = useState(props.stats);

    const handleStatusChange = () => {
        status=="done"? setStatus("pending") : setStatus("done")
    }

    return (
        <li className=" bg-[#d9d9d95b] m-2 p-2 rounded-md border-b border-[#000000] flex justify-between">
            <span id="item_content" className=" capitalize">{props.description}</span>
            <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className={
                        "inline-flex justify-center rounded-full  bg-opacity-50 px-2 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-20"
                        + (status == "done" ?  " bg-green-800" : " bg-black")}>                        
                        <ChevronDownIcon
                            className="w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-7 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? 'bg-[#7e7b31] text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                onClick={handleStatusChange}
                                >
                                    <PencilIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                                    Alterar Status
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? 'bg-[#7e7b31] text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    <PencilIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                                    Editar
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? 'bg-[#7e7b31] text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    <PencilIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                                    Definir Responsavel
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? 'bg-[#7e7b31] text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    <PencilIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                                    Incluir em Grupo
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? 'bg-[#7e7b31] text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    <PencilIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                                    Remover Item
                                </button>
                            )}
                        </Menu.Item>

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </li>
    );
};

export default MenuItem;