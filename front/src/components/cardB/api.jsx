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


  /*
  export const fetchProductoById = async(id) => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/${id}");
      const data = await response.json();
      return data[0];
    } catch (error) {
      console.error("Error fetch data", error);
      throw error;
    }
  };
  */