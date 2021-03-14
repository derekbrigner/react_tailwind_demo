const InfoCardListItem = ({text}) => {
    return (
        <div className="border-b-2 border-gray-200 hover:bg-gray-100 p-2">
            <a>{text}</a>
        </div>
    )
}

export default InfoCardListItem;