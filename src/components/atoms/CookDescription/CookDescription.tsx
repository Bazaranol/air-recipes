import React from "react";
import { convertCookTime } from "../../../helpers/convertCookTime.";
import "./cookDescription.css";
import LanguageIcon from "@mui/icons-material/Language";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { mdiChefHat } from "@mdi/js";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Icon from "@mdi/react";
import { capitalizeFirstLetter } from "../../../helpers/capitalizeFirstLetter";
interface ICookDescription {
    difficulty: string;
    cookTime: number;
    caloricity: number;
    cuisineTitle: string;
}

export const CookDescription: React.FC<ICookDescription> = ({
    difficulty,
    cookTime,
    caloricity,
    cuisineTitle,
}) => {
    return (
        <>
            <div className={"cookDesc " + difficulty}>
                <Icon
                    path={mdiChefHat}
                    size={1}
                    style={{ marginRight: "8px" }}
                />
                {capitalizeFirstLetter(difficulty)}
            </div>
            <div className="cookDesc">
                <AccessTimeIcon
                    fontSize="small"
                    sx={{ color: "#DDDDDD", marginRight: "8px" }}
                />
                {convertCookTime(cookTime)}
            </div>
            <div className="cookDesc">
                <WhatshotIcon
                    fontSize="small"
                    sx={{ color: "#DDDDDD", marginRight: "8px" }}
                />
                {caloricity + " kCal"}{" "}
            </div>
            <div className="cookDesc">
                <LanguageIcon
                    fontSize="small"
                    sx={{ color: "#DDDDDD", marginRight: "8px" }}
                />
                {cuisineTitle}{" "}
            </div>
        </>
    );
};
