export const fetchProductos = async () => {
  const BASE_URL = "https://fakestoreapi.com/products/category/men's%20clothing";
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetch data", error);
    throw error;
  }
};

