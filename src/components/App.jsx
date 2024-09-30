import { useProducts } from "../customHooks/useProducts.jsx";

export const App = () => {
  const { products, error, loading } = useProducts();

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
      <ul>
      {
        products.length > 0 ?
             products.map((product) => {
               return (
                   <li key={product.id}>{product.title}</li>
               );
             }) : null
      }
      </ul>
  );
}
