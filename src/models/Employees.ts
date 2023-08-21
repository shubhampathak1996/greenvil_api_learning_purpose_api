import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address


interface EmployeeAttrs {
  name: string;
  employee_number: string;
  joining_date: string;
  date_Of_birth?: string;
  gender?: string;
  pan_number?: string;
  marital_status?: string;
  blood_group?: string;
  father_name?: string;
  emergency_contact_name?: string;
  emergency_contact_number?: string;
  bank_account_number?: string;
  ifsc_code?: string;
  bank_name?: string;
  salary_payment_mode?: string;
  name_as_on_aadhaar_card?: string;
  aadhaar_card_number? : string;
  mobile_number?: string;
  designation?: string;
  location?: string;
  client_name?: string;
  state?: string;
  district?: string;
  e_clinic_code?: string;
  partner_name?: string;
  job_location?: string;
  field_ops_manager_name?: string;
  field_ops_manager_contact_no?: string;
  field_ops_manager_email_id?: string;
  branch_name?: string;
  emp_csd?: string;
  emp_ced?: string;
  reporting_head?: string;
  reporting_head_email_id?: string;
  client_old_doj?: string;
  communication_email?: string;
  client_date_of_joining?: string;
  zone?: string;
  aadhar_link_mobile?: string;
  status_pan_and_aadhar?: string;
  createdBy?:string;
  updatedBy?:String;
}

// An interface that describes the properties
// that a Address Model has
interface EmployeeModel extends mongoose.Model<EmployeeDoc> {
  build(attrs: EmployeeAttrs): EmployeeDoc;
}

// An interface that describes the properties
// that a Address Document has
interface EmployeeDoc extends mongoose.Document {
  name: string;
  employee_number: string;
  joining_date: string;
  date_Of_birth?: string;
  gender?: string;
  pan_number?: string;
  marital_status?: string;
  blood_group?: string;
  father_name?: string;
  emergency_contact_name?: string;
  emergency_contact_number?: string;
  bank_account_number?: string;
  ifsc_code?: string;
  bank_name?: string;
  salary_payment_mode?: string;
  name_as_on_aadhaar_card?: string;
  aadhaar_card_number? : string;
  mobile_number?: string;
  designation?: string;
  location?: string;
  client_name?: string;
  state?: string;
  district?: string;
  e_clinic_code?: string;
  partner_name?: string;
  job_location?: string;
  field_ops_manager_name?: string;
  field_ops_manager_contact_no?: string;
  field_ops_manager_email_id?: string;
  branch_name?: string;
  emp_csd?: string;
  emp_ced?: string;
  reporting_head?: string;
  reporting_head_email_id?: string;
  client_old_doj?: string;
  communication_email?: string;
  client_date_of_joining?: string;
  zone?: string;
  aadhar_link_mobile?: string;
  status_pan_and_aadhar?: string;
  createdBy?:string;
  updatedBy?:String;
 
}

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    employee_number: {
      type: String,
      required: true,
    },
    joining_date: {
      type: String,
      required: true,
    },
    date_Of_birth: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    pan_number: {
      type: String,
      required: false,
    },
    marital_status: {
      type: String,
      required: false,
    },
    blood_group: {
      type: String,
      required: false,
    },
    father_name: {
      type: String,
      required: false,
    },
    emergency_contact_name: {
      type: String,
      required: false,
    },
    emergency_contact_number: {
      type: String,
      required: false,
    },
    bank_account_number: {
      type: String,
      required: false,
    },
    ifsc_code: {
      type: String,
      required: false,
    },
    bank_name: {
      type: String,
      required: false,
    },
    salary_payment_mode: {
      type: String,
      required: false,
    },
    name_as_on_aadhaar_card: {
      type: String,
      required: false,
    },
    aadhaar_card_number: {
      type: String,
      required: false,
    },
    mobile_number: {
      type: String,
      required: false,
    },
    designation: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    client_name: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    district: {
      type: String,
      required: false,
    },
    e_clinic_code: {
      type: String,
      required: false,
    },
    partner_name: {
      type: String,
      required: false,
    },
    job_location: {
      type: String,
      required: false,
    },
    field_ops_manager_name: {
      type: String,
      required: false,
    },
    field_ops_manager_contact_no: {
      type: String,
      required: false,
    },
    field_ops_manager_email_id: {
      type: String,
      required: false,
    },
    branch_name: {
      type: String,
      required: false,
    },
    emp_csd: {
      type: String,
      required: false,
    },
    emp_ced: {
      type: String,
      required: false,
    },
    reporting_head: {
      type: String,
      required: false,
    },
    reporting_head_email_id: {
      type: String,
      required: false,
    },
    client_old_doj: {
      type: String,
      required: false,
    },
    communication_email: {
      type: String,
      required: false,
    },
    client_date_of_joining: {
      type: String,
      required: false,
    },
    zone: {
      type: String,
      required: false,
    },
    aadhar_link_mobile: {
      type: String,
      required: false,
    },
    status_pan_and_aadhar: {
      type: String,
      required: false,
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    updatedBy:{
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    }

   
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
      },
    },
  }
);

employeeSchema.statics.build = (attrs: EmployeeAttrs) => {
  return new Employee(attrs);
};

const Employee = mongoose.model<EmployeeDoc, EmployeeModel>(
  'Employee',
  employeeSchema
);

export { Employee };
