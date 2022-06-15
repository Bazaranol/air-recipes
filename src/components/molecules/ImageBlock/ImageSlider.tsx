import Box from "@mui/material/Box";
import React from "react";
import Slider from "react-slick";
import "./imageSlider.css";

interface IImageSlider {
    images: string[];
}

export const ImageSlider: React.FC<IImageSlider> = ({ images }) => {
    const settings = {
        customPaging: function (i: number) {
            return (
                <a>
                    <img src={`${images[i]}`} width={54} height={54} />
                </a>
            );
        },
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "slick-dots slick-thumb",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    if (images.length > 1)
        return (
            <Box>
                <Box
                    sx={{
                        padding: "0px",
                        width: "600px",
                        height: "600px",
                    }}
                >
                    <Slider {...settings}>
                        {images.map((image) => (
                            <div key={image}>
                                <img src={image} width={532} height={355} />
                            </div>
                        ))}
                    </Slider>
                </Box>
            </Box>
        );
    else
        return (
            <Box>
                <Box
                    sx={{
                        padding: "0px",
                        width: "600px",
                        height: "600px",
                    }}
                >
                    <div>
                        <img src={images[0]} className="mainImg" />
                    </div>
                    <div>
                        <img src={images[0]} className="imgDot" />
                    </div>
                </Box>
            </Box>
        );
};
