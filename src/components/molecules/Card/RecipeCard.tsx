import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { SCREENS } from "../../../routes/endpoints";
import "./recipeCard.css";
import { convertCookTime } from "../../../helpers/convertCookTime.";
interface IRecipeCard {
    id: number;
    title: string;
    description: string;
    caloricity: number;
    cookTime: number;
    thumbnail: string;
    cuisine: ICuisine;
}
type ICuisine = {
    id: number;
    title: string;
};

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
        <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={3}
            component={Link}
            to={SCREENS.SCREEN_RECIPES + `${id}`}
            sx={{ textDecoration: "none" }}
        >
            <Card
                className="card"
                sx={{
                    maxWidth: 348,
                    height: 384,
                    xs: { marginLeft: 2 },
                    marginBottom: 2,
                }}
            >
                <CardActionArea>
                    <div className="headerCard">
                        <div className="chipArea">
                            <Chip
                                label={convertCookTime(cookTime)}
                                className="chip"
                                sx={{ backgroundColor: "#fff" }}
                            />
                            <Chip
                                label={caloricity + " kCal"}
                                className="chip"
                                sx={{ backgroundColor: "#fff" }}
                            />
                            <Chip
                                label={cuisine.title}
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
