import React from "react";

interface QuizProps {
    label: string;
}

const Quiz = (props: QuizProps) => {
    return <div>{props.label}</div>;
}

export default Quiz;