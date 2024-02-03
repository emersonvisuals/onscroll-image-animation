"use client";
import React from "react";
import styles from "./Gallery.module.css";
import { motion } from "framer-motion";
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
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageOne}
                        imageStyle={{ width: "95%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.75,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageTwo}
                        imageStyle={{ width: "95%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    style={{ justifyContent: "flex-end" }}
                >
                    <CustomImage
                        imageSource={ImageThree}
                        imageStyle={{ width: "85%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.75,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageFour}
                        imageStyle={{ width: "75%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageFive}
                        imageStyle={{ width: "65%" }}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.75,
                        delay: 0.75,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
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
