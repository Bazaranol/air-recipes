import React from "react";
import "./instructions.css";

interface IInstructions {
    instructions: string[];
}

export const Instructions: React.FC<IInstructions> = ({ instructions }) => {
    return (
        <div>
            <ul className="instructionsList">
                {instructions.map((instruction, index) => (
                    <li key={index}>
                        <div>{index + 1}</div> {instruction}
                    </li>
                ))}
            </ul>
        </div>
    );
};
