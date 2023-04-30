import { getAllProducts } from "../../services/products.js";

export default async function handler(req, res) {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
