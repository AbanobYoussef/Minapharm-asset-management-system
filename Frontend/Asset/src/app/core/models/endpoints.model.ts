export const endpoints = {
  // For Auth Start
 
  Employee: {
    Add: {
      path: 'api/Employee',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    Edit: {
      path: 'api/Employee/edit',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    Delete: {
      path: 'api/Employee/delete',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false,
    },
    GetAll: {
      path: 'api/Employee',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false,
    },
  },
  Device: {
    Add: {
      path: 'api/DeviceAsset',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    Edit: {
      path: 'api/DeviceAsset/edit',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    Delete: {
      path: 'api/DeviceAsset/delete',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    GetAll: {
      path: 'api/DeviceAsset',
      isAuthorizationRequired: true,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
  },
  Transport: {
    Add: {
      path: 'api/TransportAsset',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },

    Edit: {
      path: 'api/TransportAsset/edit',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: true,
    },
    Delete: {
      path: 'api/TransportAsset/delete',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false,
    },

    GetAll: {
      path: 'api/TransportAsset',
      isAuthorizationRequired: false,
      contentType: 'application/json',
      isRequiredHttpHeader: false,
    },
  }
};
export class EndpointHeader {
  path: string;
  isAuthorizationRequired: boolean;
  contentType: string;
  isRequiredHttpHeader: boolean = false;
}
