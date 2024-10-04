import { useContext, useMemo } from "react";
import { ProductsContext } from "../context/ProductsContext.jsx";
import { ProductItem } from "./ProductItem.jsx";
import styles from "../styles/ProductsPage.module.scss";
import { Outlet, useParams } from "react-router-dom";

export const ProductsPage = () => {
    const { products } = useContext(ProductsContext);
    const { productId  } = useParams();
    const productToShow = useMemo(
        () => {
                return products.find((product) => product.id === parseInt(productId))
        }, [productId, products]);

    const transparentBg = productId ? styles.transparentBg : '';

    return (
            <div className={styles.container + " " + transparentBg }>
                {
                    !productId ?
                        <div className={styles.productsContainer}>
                            {
                                products.map((product) => (
                                    <ProductItem
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            }
                        </div> :
                    <Outlet context={productToShow} />
                }
            </div>

    );
}