import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/ProductItem.module.scss";

export const ProductItem = ({ product }) => {
    let color = styles.greenRate;
    switch (true) {
        case (product.rating.rate <= 2):
            color = styles.redRate;
            break;
        case (product.rating.rate > 2 && product.rating.rate <= 3.9):
            color = styles.orangeRate;
            break;
        case (product.rating.rate > 4):
            color = styles.greenRate;
        break;
    }

    return (
        <Link className={styles.linkContainer} to={`${product.id}`}>
            <div className={styles.imageContainer}>
                <img className={styles.cartImg} src={product.image} alt={product.title}/>
            </div>
            <div className={styles.details}>
                <h6 className={styles.title}>{product.title}</h6>
                <p className={styles.rate}>Rate:
                    <span className={color}> {product.rating.rate} </span>
                    ({product.rating.count})
                </p>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
                <span className={styles.delivery}>Free delivery</span>
            </div>
        </Link>
    );
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired,
        })
    })
}