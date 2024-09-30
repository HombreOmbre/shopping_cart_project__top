import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/MapSiteItem.module.scss";

export const MapSiteItem = ({ title, linksToSite }) => {
    return (
        <div className={styles.mapSiteContainer}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.links}>
                {linksToSite.map((siteLink, index) => (
                    <li className={styles.link} key={index}>
                        <Link to="/" className={styles.linkComp}>{siteLink}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

MapSiteItem.propTypes = {
    title: PropTypes.string.isRequired,
    linksToSite: PropTypes.arrayOf(PropTypes.string).isRequired,
}