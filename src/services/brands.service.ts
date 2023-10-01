import Brand from "../models/brands.model";

export class BrandService {
  static async createBrand(brand: Partial<Brand>): Promise<Brand | null> {
    try {
      const newBrand = await Brand.create(brand);
      return newBrand;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getBrands(): Promise<Brand[]> {
    try {
      const brands = await Brand.findAll();
      return brands;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getBrand(id: string): Promise<Brand | null> {
    try {
      const brand = await Brand.findByPk(id);
      return brand;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async updateBrand(
    id: string,
    updatedBrand: Partial<Brand>
  ): Promise<Brand | null> {
    try {
      const brand = await Brand.findByPk(id);
      if (!brand) return null;

      await brand.update(updatedBrand);
      return brand;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async deleteBrand(id: string): Promise<boolean> {
    try {
      const brand = await Brand.findByPk(id);
      if (!brand) return false;

      await brand.destroy();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
