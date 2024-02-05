"use client";
import React from "react";
import styles from "./Gallery.module.css";
import CustomImage from "../CustomImage/CustomImage";
import ImageOne from "../../../../public/Images/one.png";
import ImageTwo from "../../../../public/Images/two.png";
import ImageThree from "../../../../public/Images/three.png";
import ImageFour from "../../../../public/Images/four.png";
import ImageFive from "../../../../public/Images/five.png";
import ImageSix from "../../../../public/Images/six.png";

const Gallery = () => {
    return (
        <section className={styles.section}>
            <div className={styles.gallery}>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageOne}
                        imageStyle={{ width: "85%" }}
                    />
                </div>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageTwo}
                        imageStyle={{ width: "95%" }}
                    />
                </div>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-end" }}
                >
                    <CustomImage
                        imageSource={ImageThree}
                        imageStyle={{ width: "85%" }}
                    />
                </div>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageFour}
                        imageStyle={{ width: "75%" }}
                    />
                </div>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageFive}
                        imageStyle={{ width: "75%" }}
                    />
                </div>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageSix}
                        imageStyle={{ width: "90%" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
