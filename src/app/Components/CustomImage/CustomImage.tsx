import React from "react";
import styles from "./CustomImage.module.css";
import Image from "next/image";

interface CustomImageProps {
    imageSource: string;
    imageStyle: React.CSSProperties;
}

const CustomImage: React.FC<CustomImageProps> = ({
    imageSource,
    imageStyle,
}) => {
    return (
        <Image
            className={styles.image}
            src={imageSource}
            alt="image of an electric car"
            style={imageStyle}
        />
    );
};

export default CustomImage;
