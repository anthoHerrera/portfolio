import React, { Component } from "react";
import "../css/Projects.scss";
import { HiExternalLink } from "react-icons/hi";
import Project from "./Project";

interface ProjectsProps {}
interface ProjectsState {
    projects: any[];
    filters: any[];
}

const styleClass = "btn";

const styleClassActive = "btn active";

const filterInfo = [
    {
        val: "ALL",
        text: "All",
        isActive: true,
    },
    {
        val: "JAVASCRIPT",
        text: "Javascript",
        isActive: false,
    },
    {
        val: "TYPESCRIPT",
        text: "Typescript",
        isActive: false,
    },
];

const myProjects = [
    {
        title: "Random Quote",
        img_url: require("/src/assets/images/random.jpg"),
        project_url: "https://github.com/anthoHerrera/random-quote-machine",
        labels: ["HTML", "CSS", "REACT", "JAVASCRIPT"],
    },

    {
        title: "Drum Machine",
        img_url: require("/src/assets/images/drum.jpg"),
        project_url: "https://github.com/anthoHerrera/drum-machine",
        labels: ["HTML", "CSS", "REACT", "JAVASCRIPT"],
    },
    {
        title: "Markdown Previewer",
        img_url: require("/src/assets/images/markdown.jpg"),
        project_url: "https://github.com/anthoHerrera/markdownPreviewer",
        labels: ["HTML", "SASS", "REACT", "TYPESCRIPT"],
    },
    {
        title: "Calculator",
        img_url: require("/src/assets/images/calc.jpg"),
        project_url: "https://github.com/anthoHerrera/react-calculator",
        labels: ["HTML", "SASS", "REACT", "TYPESCRIPT"],
    },
    {
        title: "25 + 5 Clock",
        img_url: require("/src/assets/images/clock.jpg"),
        project_url: "https://github.com/anthoHerrera/clock_25_add_5",
        labels: ["HTML", "SASS", "REACT", "TYPESCRIPT"],
    },
];

export class Projects extends Component<ProjectsProps, ProjectsState> {
    constructor(props: ProjectsProps) {
        super(props);
        this.state = {
            projects: myProjects,
            filters: filterInfo,
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = (e: any): void => {
        e.preventDefault();

        if (e.currentTarget.value === "ALL") {
            this.setState({
                projects: [...myProjects],
                filters: filterInfo,
            });
        } else {
            const filterUpdated = filterInfo.map((item) => {
                if (item.val === e.currentTarget.value) {
                    return { ...item, isActive: true };
                } else {
                    return { ...item, isActive: false };
                }
            });

            this.setState({
                projects: myProjects.filter((pro) => {
                    return pro.labels.includes(e.currentTarget.value);
                }),
                filters: filterUpdated,
            });
        }
    };

    componentDidMount() {
        document.title = "Portfolio | Projects";
    }

    render() {
        return (
            <React.Fragment>
                <div className="projects__container">
                    <div className="filter">
                        {this.state.filters.map((cte, id) => (
                            <button
                                key={id}
                                className={
                                    cte.isActive ? styleClassActive : styleClass
                                }
                                value={cte.val}
                                onClick={this.clickHandler}
                            >
                                {cte.text}
                            </button>
                        ))}
                    </div>
                    <section className="projects">
                        {this.state.projects.map((proj, idx) => (
                            <Project
                                key={idx}
                                imgUrl={proj.img_url}
                                title={proj.title}
                                projectUrl={proj.project_url}
                                labels={proj.labels}
                            />
                        ))}
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default Projects;
