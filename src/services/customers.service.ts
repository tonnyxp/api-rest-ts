import Customer from "../models/customers.model";

export class CustomerService {
  static async createCustomer(
    customer: Partial<Customer>
  ): Promise<Customer | null> {
    try {
      const newCustomer = await Customer.create(customer);
      return newCustomer;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getCustomers(): Promise<Customer[]> {
    try {
      const customers = await Customer.findAll();
      return customers;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getCustomer(id: string): Promise<Customer | null> {
    try {
      const customer = await Customer.findByPk(id);
      return customer;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async updateCustomer(
    id: string,
    updatedCustomer: Partial<Customer>
  ): Promise<Customer | null> {
    try {
      const customer = await Customer.findByPk(id);
      if (!customer) return null;

      await customer.update(updatedCustomer);
      return customer;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
