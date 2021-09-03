import React from "react";

interface SkillProps {
    name: string;
    percent: number;
}

function Skill(props: SkillProps) {
    if (props.percent <= 30) {
        const styled = {
            backgroundColor: "#EF5350",
            width: `${props.percent}%`,
        };
        return (
            <React.Fragment>
                <div className="skill">
                    <p>{props.name}</p>
                    <div className="bar">
                        <div style={styled} className="percent"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    } else if (props.percent > 30 && props.percent <= 70) {
        const styled = {
            backgroundColor: "#FFEE58",
            width: `${props.percent}%`,
        };
        return (
            <React.Fragment>
                <div className="skill">
                    <p>{props.name}</p>
                    <div className="bar">
                        <div style={styled} className="percent"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        const styled = {
            backgroundColor: "#66BB6A",
            width: `${props.percent}%`,
        };
        return (
            <React.Fragment>
                <div className="skill">
                    <p>{props.name}</p>
                    <div className="bar">
                        <div style={styled} className="percent"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Skill;
