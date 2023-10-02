import Customers from "../models/customers.model";

export class CustomerService {
  static async createCustomer(
    customer: Partial<Customers>
  ): Promise<Customers | null> {
    try {
      const newCustomer = await Customers.create(customer);
      return newCustomer;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getCustomers(): Promise<Customers[]> {
    try {
      const customers = await Customers.findAll();
      return customers;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getCustomer(id: string): Promise<Customers | null> {
    try {
      const customer = await Customers.findByPk(id);
      return customer;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async updateCustomer(
    id: string,
    updatedCustomer: Partial<Customers>
  ): Promise<Customers | null> {
    try {
      const customer = await Customers.findByPk(id);
      if (!customer) return null;

      await customer.update(updatedCustomer);
      return customer;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
