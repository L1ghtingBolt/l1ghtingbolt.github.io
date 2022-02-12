export default function Project(props) {
    return (
        <div className="border-4 border-gray-500 mb-10 p-6 rounded-md">
            <a href={props.permalink}><h1 className="text-2xl font-bold">{props.title}</h1></a>
            <h1 className="text-xl">{props.desc}</h1>
        </div>
    )
}