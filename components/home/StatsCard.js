import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Badge from "./Badge";
import StatsCardListItem from './StatsCardListItem';

const StatCard = ({title, subtitle, description, badge, list}) => {

    const [hide, setHide] = useState('hidden');
    const [icon, setIcon] = useState(faChevronDown);
    const handleHide = () => {
        setHide(hide !== 'hidden'?'hidden':'block');
        setIcon(icon !== faChevronDown?faChevronDown:faChevronUp);
    };

    return (
        <div className="h-full w-full lg:w-1/4 border-2 border-gray-200 shadow-lg mb-4">
            <div className="flex flex-row p-2 border-b-2 border-gray-200">
                <div className="w-2/6">
                    <Badge {...badge} />
                </div>
                <div className="w-4/6">
                    <h3 className="text-2xl">{title}</h3>
                    <div className="text-gray-500">{subtitle}</div>
                </div>
            </div>
            <div className="p-2 lg:hidden">
                <button type="button" className="flex justify-center w-full bg-gray-200" onClick={handleHide}>
                    <FontAwesomeIcon icon={icon} className="text-gray-400 h-8 w-full" />
                </button>
            </div>
            <div className={`${hide} lg:block`}>
                <div></div>
                <div className="p-2 border-b-2 border-gray-200 text-xs">{description}.</div>

                {/* <div className="table w-full hover:bg-gray-100">
                    <div className="table-row-group">
                        <div className="table-row">
                            <div className="table-cell"></div>
                            <div className="table-cell"></div>
                            <div className="table-cell">STATS</div>
                        </div>
                    </div>
                </div> */}
                {list.map((item, iindx) => (
                    <StatsCardListItem key={iindx} {...item} />
                ))}
                <div className="flex flex-row hover:bg-gray-100">
                    <div className="w-1/4 p-2 text-center"><a className="uppercase">All</a></div>
                    <div className="w-3/4 p-2"><a className="">Additional Links</a></div>
                </div>
            </div>
        </div>
    );
};

export default StatCard;