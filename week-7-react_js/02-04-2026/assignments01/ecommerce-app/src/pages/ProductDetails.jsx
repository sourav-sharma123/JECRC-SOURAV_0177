// import { useParams, Link, Outlet } from "react-router-dom";

// function ProductDetails() {
//   const { id } = useParams();

//   return (
//     <div>
//       <h2>Product ID: {id}</h2>

//       <Link to="reviews">Reviews</Link> | 
//       <Link to="specs">Specs</Link>

//       <Outlet />
//     </div>
//   );
// }
// export default ProductDetails;


import { useParams, Link, Outlet } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product ID: {id}</h2>
      <Link to="reviews">Reviews</Link> | 
      <Link to="specs">Specs</Link>
      <Outlet />
    </div>
  );
}