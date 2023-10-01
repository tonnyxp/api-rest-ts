import Staff from "../models/staffs.model";

export class StaffService {
  static async getStaffs(): Promise<Staff[]> {
    try {
      const staffs = await Staff.findAll();
      return staffs;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getStaff(id: string): Promise<Staff | null> {
    try {
      const staff = await Staff.findByPk(id);
      return staff;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async updateStaff(
    id: string,
    updatedStaff: Partial<Staff>
  ): Promise<Staff | null> {
    try {
      const staff = await Staff.findByPk(id);
      if (!staff) return null;

      await staff.update(updatedStaff);
      return staff;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
