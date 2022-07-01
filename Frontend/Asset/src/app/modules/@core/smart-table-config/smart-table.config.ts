export const CATEGORY_TABLE_SETTINGS = {
	checkbox: true,
	columns: [
		{
			label: 'Image',
			name: 'image',
			htmlPreparationValue: (event: any) => {
				return `<img width="40px"  defaultImage src="${event.category.image
					? event.category.image
					: 'assets/images/default-image.png'
					}"/>`;
			},
		},
		{
			label: 'Name (Pr)',
			name: 'label',
			valuePreparationValue: (event: any) => {
				return event?.category?.label;
			},
		},
		{
			label: 'Name (Sec)',
			name: 'secondaryLabel',
			valuePreparationValue: (event: any) => {
				return event?.category?.secondaryLabel;
			},
		},
		{
			label: 'Status',
			name: 'status',
			type: 'toggle'
		}
	],
	actions: {
		delete: true,
		edit: true,
	},
};
export const ITEM_TABLE_SETTINGS = {
	checkbox: true,
	columns: [
		{
			label: 'Image',
			name: 'image',
			htmlPreparationValue: (event: any) => {
				return `<img width="40px"  defaultImage src="${event.item.image
					? event.item.image
					: 'assets/images/default-image.png'
					}"/>`;
			},
		},
		{
			label: 'Name (Pr)',
			name: 'label',
			valuePreparationValue: (event: any) => {
				return event?.item.label;
			},
		},
		{
			label: 'Name (Sec)',
			name: 'secondaryLabel',
			valuePreparationValue: (event: any) => {
				return event?.item.secondaryLabel;
			},
		},
		{
			label: 'Calories',
			valuePreparationValue: (event: any) => {
				return event?.item.calories;
			},
		},
		{
			label: 'Price',
			valuePreparationValue: (event: any) => {
				return event?.price;
			},
		},
		{
			label: 'Status',
			name: 'status',
			type: 'toggle'
		}

	],
	actions: {
		delete: true,
		edit: true,
	},
};
export const ATTRIBUTE_TABLE_SETTINGS = {
	checkbox: true,
	columns: [
		{
			label: 'Name (Pr)',
			name: 'label',
			valuePreparationValue: (event: any) => {
				return event?.attributes.label;
			},
		},
		{
			label: 'Name (Sec)',
			name: 'secondaryLabel',
			valuePreparationValue: (event: any) => {
				return event?.attributes.secondaryLabel;
			},
		},
		{
			label: 'Mini Options',
			valuePreparationValue: (event: any) => {
				return event?.attributes.minimumOption;
			},
		},
		{
			label: 'Max Options',
			valuePreparationValue: (event: any) => {
				return event?.attributes.maximumOption;
			},
		},
		{
			label: 'Free Options',
			valuePreparationValue: (event: any) => {
				return event?.attributes.freeOptions;
			},
		},
		{
			label: 'Status',
			name: 'status',
			type: 'toggle'
		}
	],
	actions: {
		delete: true,
		edit: true,
	},
};
export const ATTRIBUTES_DETAILS_TABLE_SETTINGS = {
	checkbox: true,
	columns: [
		{
			label: 'Name (Pr)',
			name: 'label',
			valuePreparationValue: (event: any) => {
				return event?.attributeDetails.label;
			},
		},
		{
			label: 'Name (Sec)',
			name: 'secondaryLabel',
			valuePreparationValue: (event: any) => {
				return event?.attributeDetails.secondaryLabel;
			},
		},
		{
			label: 'Calories',
			valuePreparationValue: (event: any) => {
				return event?.attributeDetails.calories;
			},
		},
		{
			label: 'Price Difference',
			valuePreparationValue: (event: any) => {
				return event?.attributeDetails.priceDifference;
			},
		},
		{
			label: 'Status',
			name: 'status',
			type: 'toggle'
		}
	],
	actions: {
		delete: true,
		edit: true,
	},
};
export const Orders_TABLE_SETTINGS = {
	checkbox: true,
	columns: [
		{
			label: 'Invoice Id',
			name: 'invoice',
			valuePreparationValue: (event: any) => {
				return event?.order.invoice;
			},
		},
		{
			label: 'Payment Type',
			name: 'paymentType',
			valuePreparationValue: (event: any) => {
				if (event?.order.paymentType == 1) {
					return 'Cashe';
				} else {
					return 'Visa';
				}
			},
		},
		{
			label: 'Created On',
			valuePreparationValue: (event: any) => {
				return new Date(event.order.createdOn).toLocaleString();
			},
		},
		{
			label: 'Price',
			valuePreparationValue: (event: any) => {
				return event?.order.totalPrice;
			},
		},
	],
	actions: {
		edit: true,
	},
};
export const BRANCHES_TABLE_SETTINGS = {
	checkbox: true,
	columns: [
		{
			label: 'Address',
			name: 'secondaryAddress',
			valuePreparationValue: (event: any) => {
				return event?.secondaryAddress
			},
		},
		{
			label: 'City',
			name: 'city',
			valuePreparationValue: (event: any) => {
				return event.city;
			},
		},
		{
			label: 'Language (Pr)',
			name: 'primaryLangCode',
			valuePreparationValue: (event: any) => {
				return event?.primaryLangCode
			},
		},
	],
	actions: {
		edit: true,
		delete: false,
	},
};
export const TAXE_TABLE_SETTINGS = {
	checkbox: false,
	columns: [
		{
			label: 'Name (Pr)',
			name: 'label',
			valuePreparationValue: (event: any) => {
				return event?.tax?.label;
			},
		},
		{
			label: 'Name (Sec)',
			name: 'secondaryLabel',
			valuePreparationValue: (event: any) => {
				return event?.tax?.secondaryLabel;
			},
		},
		{
			label: 'Amount(%)',
			name: 'amount',
			valuePreparationValue: (event: any) => {
				return event?.tax?.amount;
			},
		}
	],
	actions: {
		delete: false,
		edit: true,
	},
};
export const TAXE_GROUPS_TABLE_SETTINGS = {
	checkbox: false,
	columns: [
		{
			label: 'Name (Pr)',
			name: 'label',
			valuePreparationValue: (event: any) => {
				return event?.taxGroup?.label;
			},
		},
		{
			label: 'Name (Sec)',
			name: 'secondaryLabel',
			valuePreparationValue: (event: any) => {
				return event?.taxGroup?.secondaryLabel;
			},
		}
	],
	actions: {
		delete: false,
		edit: true,
	},
};
export const INGREDIENT_TABLE_SETTINGS = {
	checkbox: false,
	columns: [
		{
			label: 'Name (Pr)',
			name: 'label'
		},
		{
			label: 'Name (Sec)',
			name: 'secondaryLabel'
		},
		{
			label: 'Barcode',
			name: 'barcode',
		},
		{
			label: 'SKU',
			name: 'sku',
		},
		{
			label: 'Cost',
			name: 'cost',
		},
		{
			label: 'Costing Method',
			name: 'costingMethod',
		},
		{
			label: 'Minimum Level',
			name: 'minimumLevel',
		},
		{
			label: 'Maximum Level',
			name: 'maximumLevel',
		},
		
		
	],
	actions: {
		delete: false,
		edit: true,
	},
};
export const INVENTORY_CATEGORY_TABLE_SETTINGS = {
	columns: [
		{
			label: 'Name (Pr)',
			name: 'label'
		},
		{
			label: 'Name (Sec)',
			name: 'secondaryLabel'
		},
		{
			label: 'Status',
			name: 'status',
			type: 'toggle'
		}
	],
	actions: {
		delete: true,
		edit: true,
	},
};
export const WAREHOUSE_TABLE_SETTINGS = {
	columns: [
		{
			label: 'Name (Pr)',
			name: 'label'
		},
		{
			label: 'Name (Sec)',
			name: 'secondaryLabel'
		},
		{
			label: 'Code',
			name: 'code',
		}
	],
	actions: {
		delete: true,
		edit: true,
	},
};