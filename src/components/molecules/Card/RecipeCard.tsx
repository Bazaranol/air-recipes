import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import "./recipeCard.css";
interface IRecipeCard {
    id: number;
    title: string;
    description: string;
    caloricity: number;
    cookTime: number;
    thumbnail: string;
    cuisine: object;
}
function convertTime(seconds: number) {
    const minutes = seconds / 60;
    const hours = minutes / 60;
    if (hours >= 1) return `${hours} hours`;
    else return `${minutes} min`;
}
export const RecipeCard: React.FC<IRecipeCard> = ({
    id,
    title,
    description,
    caloricity,
    cookTime,
    thumbnail,
    cuisine,
}) => {
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 348, height: 384, marginBottom: 2 }}>
                <CardActionArea>
                    <div className="headerCard">
                        <div className="chipArea">
                            <Chip
                                label={convertTime(cookTime)}
                                className="chip"
                                sx={{ backgroundColor: "#fff" }}
                            />
                            <Chip
                                label={caloricity + " kCal"}
                                className="chip"
                                sx={{ backgroundColor: "#fff" }}
                            />
                            <Chip
                                label={caloricity}
                                className="chip"
                                sx={{ backgroundColor: "#fff" }}
                            />
                        </div>

                        <CardMedia
                            component="img"
                            height="196"
                            image={thumbnail}
                            alt="image"
                            className="cardMedia"
                        />
                    </div>

                    <CardContent sx={{ height: 190 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};
