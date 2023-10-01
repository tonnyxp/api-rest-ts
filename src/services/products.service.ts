import Product from "../models/products.model";

export class ProductService {
  static async createProduct(
    product: Partial<Product>
  ): Promise<Product | null> {
    try {
      const newProduct = await Product.create(product);
      return newProduct;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getProducts(): Promise<Product[]> {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getProduct(id: string): Promise<Product | null> {
    try {
      const product = await Product.findByPk(id);
      return product;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async updateProduct(
    id: string,
    updatedProduct: Partial<Product>
  ): Promise<Product | null> {
    try {
      const product = await Product.findByPk(id);
      if (!product) return null;

      await product.update(updatedProduct);
      return product;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async deleteProduct(id: string): Promise<boolean> {
    try {
      const product = await Product.findByPk(id);
      if (!product) return false;

      await product.destroy();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
