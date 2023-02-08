import project_img from "./../img/projects/dashboard.png"


const Projects = () => {
    return (
        <main className="section2">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <li className="project">
                        <a href="./MyProject">
                            <h3 className="project__title">Analysis of hotels on booking.com</h3>
                            <img src={project_img} alt="Project img" className="project__img"/>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    );
}
 
export default Projects;