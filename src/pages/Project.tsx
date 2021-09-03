import React from "react";
import { HiExternalLink } from "react-icons/hi";

interface projectProps {
    imgUrl: string;
    title: string;
    projectUrl: string;
    labels: string[];
}

function Project(props: projectProps) {
    return (
        <React.Fragment>
            <article className="project__container">
                <img src={props.imgUrl} alt="project__image" />
                <div className="name__project">{props.title}</div>
                <a
                    href={props.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <HiExternalLink className="icon__project" />
                </a>

                <div className="labels">
                    {props.labels.map((item, i) => (
                        <div key={`${props.title}-${i}`} className="label__project">{item}</div>
                    ))}

                </div>
            </article>
        </React.Fragment>
    );
}

export default Project;
