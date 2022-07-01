import { Country } from 'src/app/core/models/country.model';
export const endpoints = {
  // For Auth Start
  Auth: {
    login: {
      path: 'api/login',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    isAuthenticated: {
      path: 'api/isAuthenticated',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    forgot: {
      path: 'api/forgot',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    otplogin: {
      path: 'api/otplogin',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    Register: {
      path: 'api/register',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    addDriverUser: {
      path: 'user/addDriver',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    refereshToken: {
      path: 'api/referesh-token',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    ResetPassword: {
      path: 'api/ResetPassword',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
  },
  ContractType: {
    AddContractType: {
      path: 'api/AddContractType',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    EditContractType: {
      path: 'api/EditContractType',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    DeleteContractTypeById: {
      path: 'api/DeleteContractTypeById',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false,
    },
    GetAllContractTypes: {
      path: 'api/GetAllContractTypes',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false,
    },
  },
  Company: {
    AddCompany: {
      path: 'api/AddCompany',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    EditCompany: {
      path: 'api/EditCompany',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    DeleteCompany: {
      path: 'api/DeleteCompany',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    GetAllCompanys: {
      path: 'api/GetAllCompanys',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    GetCompanyByUserID: {
      path: 'api/GetCompanyUserId',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    GetCompanyByID: {
      path: 'api/GetCompanyById',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    uploadFileExecl: {
      path: 'api/uploadFileExeclCompany',
      isAuthorizationRequired: true,
      contentType: 'form-data',
      isRequiredHttpHeader: true,
    },
  },
  DefaultData: {
    AddDefaultData: {
      path: 'api/AddDefaultData',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },

    EditDefaultData: {
      path: 'api/EditDefaultData',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    DeleteDefaultData: {
      path: 'api/DeleteDefaultData',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false,
    },

    GetAllDefaultDataByTypeId: {
      path: 'api/GetAllDefaultDataByTypeId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false,
    },
  },
    Job: {
        AddJob: {
            path: 'api/AddJob',
            isAuthorizationRequired: false,
            contentType: 'application/json',
            isRequiredHttpHeader: true
        },

        EditJob: {
            path: 'api/EditJob',
            isAuthorizationRequired: false,
            contentType: 'application/json',
            isRequiredHttpHeader: true
        },
        DeleteJobById: {
            path: 'api/DeleteJobById',
            isAuthorizationRequired: false,
            contentType: 'application/json',
            isRequiredHttpHeader: false
        },
      
        GetAllJobs: {
            path: 'api/GetAllJobs',
            isAuthorizationRequired: false,
            contentType: 'application/json',
            isRequiredHttpHeader: false
        },
        GetJobsByCompanyId: {
          path: 'api/GetJobsByCompanyId',
          isAuthorizationRequired: false,
          contentType: 'application/json',
          isRequiredHttpHeader: false
      },
        ImportFileJob: {
            path: 'api/ImportFileJob',
            isAuthorizationRequired: false,
            contentType: 'application/json',
            isRequiredHttpHeader: false
        },
    },
    Position: {
        AddPosition: {
            path: 'api/AddPosition',
            isAuthorizationRequired: false,
            contentType: 'application/json',
            isRequiredHttpHeader: true
        },

        EditPosition: {
            path: 'api/EditPosition',
            isAuthorizationRequired: false,
            contentType: 'application/json',
            isRequiredHttpHeader: true
        },

        
        DeletePositionById: {
            path: 'api/DeletePositionById',

            isAuthorizationRequired: false,
            contentType: 'application/json',
            isRequiredHttpHeader: false
        },
      
        GetAllPositions: {
            path: 'api/GetAllPositions',
            isAuthorizationRequired: false,
            contentType: 'application/json',
            isRequiredHttpHeader: false
        },
    
        GetPositionById: {
            path: 'api/GetPositionById',
            isAuthorizationRequired: false,
            contentType: 'application/json',
            isRequiredHttpHeader: false
        },
        GetPositionsByCompanyId: {
          path: 'api/GetPositionsByCompanyId',
          isAuthorizationRequired: false,
          contentType: 'application/json',
          isRequiredHttpHeader: false
      },
        ImportFIlePositions: {
            path: 'api/ImportFIlePositions',
            isAuthorizationRequired: false,
            contentType: 'application/json',
            isRequiredHttpHeader: false
        },
    },

  Organization: {
    AddOrganization: {
      path: 'api/AddOrganization',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    EditOrganization: {
      path: 'api/EditOrganization',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    DeleteOrganization: {
      path: 'api/DeleteOrganizationById',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    GetAllOrganizations: {
      path: 'api/GetAllOrganizations',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    GetAllOrganizationsByCompanyId: {
      path: 'api/GetAllOrganizationsByCompanyId',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    uploadFileExecl: {
      path: 'api/uploadFileExeclogrs',
      isAuthorizationRequired: true,
      contentType: 'form-data',
      isRequiredHttpHeader: true,
    },
  },
  Country:{
    
    GetAllCounties: {
      path: 'api/GetAllCountrys',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
  },
  City:{
    
    GetAllCities: {
      path: 'api/GetAllCitys',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
  },
  
  Location:{
    GetAllLocations: {
      path: 'api/GetAllLocations',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
  },
  Employee: {
    AddEmployee: {
        path: 'api/AddEmployee',
        isAuthorizationRequired: false,
        contentType: 'application/json',
        isRequiredHttpHeader: false
    },

    EditEmployee: {
        path: 'api/EditEmployee',
        isAuthorizationRequired: false,
        contentType: 'application/json',
        isRequiredHttpHeader: true
    },

    
    DeleteEmployeeById: {
        path: 'api/DeleteEmployeeById',

        isAuthorizationRequired: false,
        contentType: 'application/json',
        isRequiredHttpHeader: false
    },
  
    GetAllEmployees: {
        path: 'api/GetAllEmployees',
        isAuthorizationRequired: false,
        contentType: 'application/json',
        isRequiredHttpHeader: false
    },
    getAllEmployeesByCompanyId: {
      path: 'api/GetAllEmployeesByCompanyId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },
    GetEmployeeById: {
      path: 'api/GetEmployeeById',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },
 
},
EmployeeAddresses: {
  AddEmployeeAddress: {
      path: 'api/AddEmployeeAddress',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true
  },

  EditEmployeeAddress: {
      path: 'api/EditEmployeeAddress',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true
  },

  
  DeleteEmployeeAddressById: {
      path: 'api/DeleteEmployeeAddressById',

      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  GetEmployeeAddressByEmpId: {
      path: 'api/GetEmployeeAddressByEmpId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

},
EmployeePhones: {
  AddEmployeePhone: {
      path: 'api/AddEmployeePhone',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true
  },

  EditEmployeePhone: {
      path: 'api/EditEmployeePhone',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true
  },

  
  DeleteEmployeePhoneById: {
      path: 'api/DeleteEmployeePhoneById',

      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  GetEmployeePhoneByEmpId: {
      path: 'api/GetEmployeePhoneByEmpId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

},
EmployeeDependent: {
  AddEmployeeDependent: {
      path: 'api/AddEmployeeDependent',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  EditEmployeeDependent: {
      path: 'api/EditEmployeeDependent',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true
  },

  
  DeleteEmployeeDependentById: {
      path: 'api/DeleteEmployeeDependentById',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  GetAllEmployeeDependentByEmpId: {
      path: 'api/GetAllEmployeeDependentByEmpId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

},
EmployeeCotract: {
  AddEmployeeContract: {
      path: 'api/AddEmployeeContract',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  EditEmployeeContract: {
      path: 'api/EditEmployeeContract',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true
  },

  
  DeleteEmployeeContractById: {
      path: 'api/DeleteEmployeeContractById',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  GetEmployeeContractByEmpId: {
      path: 'api/GetEmployeeContractByEmpId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

},
EmployeeBankAccount: {
  AddEmployeeBankAccount: {
      path: 'api/AddEmployeeBankAccount',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  EditEmployeeBankAccount: {
      path: 'api/EditEmployeeBankAccount',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true
  },

  
  DeleteEmployeeBankAccountById: {
      path: 'api/DeleteEmployeeBankAccountById',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  GetEmployeeBankAccountByEmpId: {
      path: 'api/GetEmployeeBankAccountByEmpId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

},
Bank: {
  GetAllBanks: {
      path: 'api/GetAllBanks',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },
},
EmployeePayroll_Info: {
  AddEmployeePayroll_Info: {
      path: 'api/AddEmployeePayroll_Info',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  EditEmployeePayroll_Info: {
      path: 'api/EditEmployeePayroll_Info',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true
  },

  
  DeleteEmployeePayroll_InfoById: {
      path: 'api/DeleteEmployeePayroll_InfoById',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  GetEmployeePayroll_InfoByEmpId: {
      path: 'api/GetEmployeePayroll_InfoByEmpId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

},
EmployeeAssignmentInfo: {
  AddEmployeeAssignmentInfo: {
      path: 'api/AddEmployeeAssignmentInfo',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  EditEmployeeAssignmentInfo: {
      path: 'api/EditEmployeeAssignmentInfo',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true
  },

  
  DeleteEmployeeAssignmentInfoById: {
      path: 'api/DeleteEmployeeAssignmentInfoById',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  GetEmployeeAssignmentInfoByEmpId: {
      path: 'api/GetEmployeeAssignmentInfoByEmpId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

},
EmployeeMedicalIns: {
  AddMedicalInsurance: {
      path: 'api/AddMedicalInsurance',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  EditMedicalInsurance: {
      path: 'api/EditMedicalInsurance',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true
  },
  DeleteMedicalInsuranceById: {
      path: 'api/DeleteMedicalInsuranceById',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

  GetMedicalInsuranceByEmpId: {
      path: 'api/GetMedicalInsuranceByEmpId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },
  GetMedicalInsuranceCompany: {
    path: 'api/GetAllMedicalInsuranceCompanys',
    isAuthorizationRequired: false,
    contentType: 'application/json',
    isRequiredHttpHeader: false
},

},
EmployeeStatus:{
  GetAllEmployeeStatusByCompanyId:{
    path: 'api/GetAllEmployeeStatusByCompanyId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  }

},
PolicyInsurance:{
  GetAllInsurancePolicys:{
    path: 'api/GetAllInsurancePolicys',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },
  getInsurancePolicyByInsuranceCompanyId:{
    path: 'api/GetInsurancePolicyByInsuranceCompanyId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },
  GetInsurancePolicyByPolicyId:{
    path: 'api/GetInsurancePolicyByPolicyId',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false
  },

},
};
export class EndpointHeader {
  path: string;
  isAuthorizationRequired: boolean;
  contentType: string;
  isRequiredHttpHeader: boolean = false;
}
