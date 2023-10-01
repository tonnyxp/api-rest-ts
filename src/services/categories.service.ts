import Category from "../models/categories.model";

export class CategoryService {
  static async createCategory(
    category: Partial<Category>
  ): Promise<Category | null> {
    try {
      const newCategory = await Category.create(category);
      return newCategory;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getCategories(): Promise<Category[]> {
    try {
      const categories = await Category.findAll();
      return categories;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getCategory(id: string): Promise<Category | null> {
    try {
      const category = await Category.findByPk(id);
      return category;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async updateCategory(
    id: string,
    updatedCategory: Partial<Category>
  ): Promise<Category | null> {
    try {
      const category = await Category.findByPk(id);
      if (!category) return null;

      await category.update(updatedCategory);
      return category;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async deleteCategory(id: string): Promise<boolean> {
    try {
      const category = await Category.findByPk(id);
      if (!category) return false;

      await category.destroy();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
