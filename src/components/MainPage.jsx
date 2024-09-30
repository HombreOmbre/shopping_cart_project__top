import { CarouselBanner } from "./CarouselBanner.jsx";
import styles from "../styles/MainPage.module.scss";

export const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <CarouselBanner />
        </div>
    );
}
