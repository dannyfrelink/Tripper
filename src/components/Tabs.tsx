import { useState } from "react";

interface TabsProps {
    onClick: (e: string) => void;
    tabs: string[];
    activeTab: string;
}

const Tabs = ({
    onClick,
    tabs,
    activeTab
}: TabsProps) => {
    

    return (
        <div className="flex h-8 w-screen pl-[calc(100vw/12*0.5)] mt-8 mb-4 overflow-x-scroll scrollbar-hide [&>*:last-of-type]:mr-[calc(100vw/12*0.5)]">
            {
                tabs.map(tab => {
                    return (
                        <button 
                            className={`block text-primary-dark font-semibold border-[1px] border-primary-dark rounded-lg px-2 mr-2 ${activeTab === tab && "bg-secondary-light"}`}
                            onClick={() => onClick(tab)}
                        >
                            {tab}
                        </button>
                    );
                }
            )}
        </div>
    );
}

export default Tabs;