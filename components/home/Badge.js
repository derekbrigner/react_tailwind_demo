const Badge = ({text, size, bgColor}) => {
    return (
        <div className={`flex items-center justify-center h-${size} w-${size} rounded-full bg-${bgColor}-400 text-center`}>
            <div className="text-white text-2xl font-bold">{text}</div>
        </div>
    )
}

export default Badge;