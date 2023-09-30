import Store from "../models/stores.model";

export class StoreService {
  static async createStore(store: Partial<Store>): Promise<Store | null> {
    try {
      const newStore = await Store.create(store);
      return newStore;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getStores(): Promise<Store[]> {
    try {
      const stores = await Store.findAll();
      return stores;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getStore(id: string): Promise<Store | null> {
    try {
      const store = await Store.findByPk(id);
      return store;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async updateStore(
    id: string,
    updatedStore: Partial<Store>
  ): Promise<Store | null> {
    try {
      const store = await Store.findByPk(id);
      if (!store) return null;

      await store.update(updatedStore);
      return store;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async deleteStore(id: string): Promise<boolean> {
    try {
      const store = await Store.findByPk(id);
      if (!store) return false;

      await store.destroy();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
