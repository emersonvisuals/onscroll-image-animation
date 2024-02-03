import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";

export default function Home() {
    return (
        <body className={styles.main}>
            <Header></Header>
            <Gallery></Gallery>
            <Footer></Footer>
        </body>
    );
}
