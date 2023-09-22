import "./ProductInfo.css";

// import ProductsData from "../../data/products.json";

// export const ProductInfo = () => {
//   return (
//     <div className="component-wrapper component-wrapper-2">
//       <h2 className="component-name">Component 'ProductInfo'</h2>
//       <h3 className="title">New items!</h3>
//       <ul>
//         {ProductsData.map((product) => (
//           <li key={product.id}>
//             <p className="product-name">{product.name}</p>
//             <p className="product-price">${product.price}</p>
//             <p className="product-description">{product.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export const ProductInfo = ({ name, price, description }) => {
  return (
    <>  
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
    </>
  );
};
