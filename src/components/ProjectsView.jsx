import Project from "./Project.jsx"

export default function ProjectsView(props) {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="projectsWrapper mt-10">
                {props.projects.map(e => <Project title={e.title} permalink={e.permalink} desc={e.desc}></Project>)}
            </div>
        </div>
    )
}