import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import '../swiper/Swiper.css'

// import required modules
import { EffectCards, Navigation } from "swiper";
import { Box } from "@mui/system";
import { Button, IconButton, Stack } from "@mui/material";
import Java from '../../assets/Java.png'
import SQL from '../../assets/SQL.png'
import JS from '../../assets/JS.png'
import MagicHand from '../../assets/MagicHand.png'
import BA from '../../assets/BA.png'
import ASDL from '../../assets/ASDL.png'
import THM_Pre from '../../assets/THM-presecurity.png'
import THM_Intro from '../../assets/THM-intro.png'
import SQLI from '../../assets/SQLI.png'
import SK from '../../assets/SK.jpg'
import PB from '../../assets/python_bootcamp.jpg'
import NP from '../../assets/Numpy.jpg'
const buttonStyles = {

}
export default function SwiperContainer() {
    return (
        <>


            <Box className="px-4">

                <Swiper
                    navigation={{ nextEl: '.next', prevEl: ".previous" }}
                    effect={"cards"}
                    grabCursor={true}
                    loop={true}
                    autoplay
                    modules={[EffectCards, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide ><img src={BA} /></SwiperSlide>
                    <SwiperSlide ><img src={ASDL} /></SwiperSlide>
                    <SwiperSlide ><img src={MagicHand} /></SwiperSlide>
                    <SwiperSlide ><img src={THM_Pre} /></SwiperSlide>
                    <SwiperSlide ><img src={THM_Intro} /></SwiperSlide>
                    <SwiperSlide ><img src={PB} /></SwiperSlide>
                    <SwiperSlide ><img src={NP} /></SwiperSlide>
                    <SwiperSlide ><img src={SQLI} /></SwiperSlide>
                    <SwiperSlide ><img src={Java} /></SwiperSlide>
                    <SwiperSlide ><img src={SQL} /></SwiperSlide>
                    <SwiperSlide ><img src={JS} /></SwiperSlide>
                    <SwiperSlide ><img src={SK} /></SwiperSlide>


                </Swiper>
            </Box >



        </>
    );
}
