import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5000/api/products")
      .then((resopnse) => resopnse.json())
      .then((data) => setProducts(data));
  }, []);

  return <ProductList products={products} />;
}
