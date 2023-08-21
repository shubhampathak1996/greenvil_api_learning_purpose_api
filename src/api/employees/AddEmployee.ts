import { Request, Response } from 'express';
import { Employee } from '../../models/Employees';

const addEmployee = async (req: Request, res: Response) => {
  const {
    name,
    employee_number,
    joining_date,
    date_Of_birth,
    gender,
    pan_number,
    marital_status,
    blood_group,
    father_name,
    emergency_contact_name,
    emergency_contact_number,
    bank_account_number,
    ifsc_code,
    bank_name,
    salary_payment_mode,
    name_as_on_aadhaar_card,
    aadhaar_card_number, 
    mobile_number,
    designation,
    location,
    client_name,
    state,
    district,
    e_clinic_code,
    partner_name,
    job_location,
    field_ops_manager_name,
    field_ops_manager_contact_no,
    field_ops_manager_email_id,
    branch_name,
    emp_csd,
    emp_ced,
    reporting_head,
    reporting_head_email_id,
    client_old_doj,
    communication_email,
    client_date_of_joining,
    zone,
    aadhar_link_mobile,
    status_pan_and_aadhar,
  } = req.body;

  const employee = Employee.build({
    name,
    employee_number,
    joining_date,
    date_Of_birth,
    gender,
    pan_number,
    marital_status,
    blood_group,
    father_name,
    emergency_contact_name,
    emergency_contact_number,
    bank_account_number,
    ifsc_code,
    bank_name,
    salary_payment_mode,
    name_as_on_aadhaar_card,
    aadhaar_card_number, 
    mobile_number,
    designation,
    location,
    client_name,
    state,
    district,
    e_clinic_code,
    partner_name,
    job_location,
    field_ops_manager_name,
    field_ops_manager_contact_no,
    field_ops_manager_email_id,
    branch_name,
    emp_csd,
    emp_ced,
    reporting_head,
    reporting_head_email_id,
    client_old_doj,
    communication_email,
    client_date_of_joining,
    zone,
    aadhar_link_mobile,
    status_pan_and_aadhar,
  });
  await employee.save();

  res.status(201).send(employee);
};

export { addEmployee };

