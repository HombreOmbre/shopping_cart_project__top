import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { bannersData } from "../assets/banners.js";
import styles from "../styles/CarouselBanner.module.scss";

export const CarouselBanner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <div className={styles.mainContainer}>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={true}
                indicators={false}
                interval={1000}
                className={styles.container}
                fade
            >
                {
                    bannersData.map(item => (
                        <Carousel.Item key={item.id}>
                            <Link to={"/products/" + item.id}>
                                <img src={item.img} alt={item.alt} className={styles.img} />
                            </Link>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
}
