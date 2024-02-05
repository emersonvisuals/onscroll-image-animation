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
import { motion } from "framer-motion";

const Gallery = () => {
    return (
        <section className={styles.section}>
            <div className={styles.gallery}>
                <motion.div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.25,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                >
                    <CustomImage
                        imageSource={ImageOne}
                        imageStyle={{ width: "85%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                >
                    <CustomImage
                        imageSource={ImageTwo}
                        imageStyle={{ width: "95%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-end" }}
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.25,
                        ease: "easeOut",
                    }}
                >
                    <CustomImage
                        imageSource={ImageThree}
                        imageStyle={{ width: "85%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                    initial={{ y: 100, x: 100 }}
                    whileInView={{ y: 0, x: 0 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                >
                    <CustomImage
                        imageSource={ImageFour}
                        imageStyle={{ width: "75%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 100 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                >
                    <CustomImage
                        imageSource={ImageFive}
                        imageStyle={{ width: "75%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 100 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.25,
                        ease: "easeOut",
                    }}
                >
                    <CustomImage
                        imageSource={ImageSix}
                        imageStyle={{ width: "90%" }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
