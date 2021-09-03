import React from "react";

interface TechProps {
    text: string;
    percent: number;
    image_url: string;
}
function Technology(props: TechProps) {
    if (props.percent <= 30) {
        const styled = {
            backgroundColor: "#EF5350",
            width: `${props.percent}%`,
        };
        return (
            <React.Fragment>
                <div className="tech">
                    <img src={props.image_url} alt={props.text} />
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
                <div className="tech">
                    <img src={props.image_url} alt={props.text} />
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
                <div className="tech">
                    <img src={props.image_url} alt={props.text} />
                    <div className="bar">
                        <div style={styled} className="percent"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    
    
}

export default Technology;
