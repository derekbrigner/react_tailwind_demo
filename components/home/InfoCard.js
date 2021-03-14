import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Badge from './Badge'
import InfoCardListItem from './InfoCardListItem';

const InfoCard = ({title, subtitle, badge, list}) => {

    const [hide, setHide] = useState('hidden');
    const [icon, setIcon] = useState(faChevronDown);
    const handleHide = () => {
        setHide(hide !== 'hidden'?'hidden':'block');
        setIcon(icon !== faChevronDown?faChevronDown:faChevronUp);
    };

    return (
    <div className="h-full w-full lg:w-1/4 mb-4 border-2 border-gray-200 shadow-lg">
        <div className="flex flex-row p-2 border-b-2 border-gray-200">
            <div className="w-1/4">
                <Badge {...badge} />
            </div>
            <div className="w-3/4">
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
            {list.map((item, iindx) => (
                <InfoCardListItem key={iindx} {...item} />
            ))}
            <hr />
            <div className="hover:bg-gray-100 p-2"><a>All</a></div>
        </div>
    </div>
    );
};

export default InfoCard;