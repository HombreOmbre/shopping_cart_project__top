import { ComponentCTA } from "./ComponentCTA.jsx";
import { MapSiteItem } from "./MapSiteItem.jsx";
import { mapSites } from "../assets/mapSites.js";
import styles from "../styles/Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <div className={styles.title}>
                        SHOPPEROOO
                    </div>
                    <div className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
                    </div>
                </div>
                <div className={styles.footerMapSite}>
                    {
                        mapSites.map((map, index) => (
                            <MapSiteItem key={index} title={map.title} linksToSite={map.links} />
                        ))
                    }
                    <ComponentCTA />
                </div>
                <div className={styles.footerRights}>
                    Copyright © HombreOmbre {new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}