import Header from "../componets/header/Header";

const Home = () => {
    return (
    <>
        <Header/>
        <main className="section">
            <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <ul className="title-2">Hard skills
                            <li className="Hardskillslist">Python(numpy, pandas, matplotlib, seaborn, plotly, selenium)</li>
                            <li className="Hardskillslist">PostgreSQL,PL-SQL</li>
                            <li className="Hardskillslist">Microsoft Excel</li>
                            <li className="Hardskillslist">Tableau</li>
                            <li className="Hardskillslist">Git/GitHub</li>
                            <li className="Hardskillslist">Mathematics and statistics</li>
                            <li className="Hardskillslist">Analytical skills</li>
                            <li className="Hardskillslist">Jupyter Notebook, Visual Studio Code</li>
                            </ul>
                        </li>
                        <li className="content-list__item">
                        <ul className="title-2">Soft skills
                            <li className="Hardskillslist">Attention to detail and problem-solving abilities</li>
                            <li className="Hardskillslist">Strong communication for presenting insights effectively.</li>
                            <li className="Hardskillslist">Adaptability to learn new technologies and tools quickly</li>
                            <li className="Hardskillslist">Ability to work independently as well as in a team</li>
                            <li className="Hardskillslist">Strong critical thinking and analytical skills</li>
                            <li className="Hardskillslist">Time management skills for delivering projects on time</li>
                            <li className="Hardskillslist">Ability to organize well for efficiently handling extensive data</li>
                            <li className="Hardskillslist">Strong passion for data analysis and technology.</li>
                            </ul>
                        </li>
                    </ul>
            </div>
        </main>
    </>
    );
}
 
export default Home;