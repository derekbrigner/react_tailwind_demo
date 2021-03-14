import Badge from "./Badge";

const StatsCardListItem = ({title, subtitle, description, badge}) => {
    return (
        <div className="flex flex-row border-b-2 border-gray-200 hover:bg-gray-100">
            <div className="w-3/12 m-auto p-2">
                <Badge {...badge} />
            </div>
            <div className="flex flex-col w-6/12 p-2">
                <div className="">{title}</div>
                <div className="text-sm text-gray-400">{subtitle}</div>
                <div className="text-sm text-gray-400">{description}</div>
            </div>
            <div className="w-3/12 m-auto p-2 font-bold text-xl text-center">STATS</div>
        </div>
    )
}

export default StatsCardListItem;