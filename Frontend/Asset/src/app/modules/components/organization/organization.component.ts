import { Company } from 'src/app/core/models/company';
import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/core/models/organization.model';
import { DefaultDataService } from 'src/app/core/services/default-data.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import { OrganizationService } from 'src/app/core/services/organization.service';
import { Country } from 'src/app/core/models/country.model';
import { DefaultData } from 'src/app/core/models/defaultData';
import { CompanyService } from 'src/app/core/services/company.service';
import { CountryService } from 'src/app/core/services/country.service';
import { CityService } from 'src/app/core/services/city.service';
import { City } from 'src/app/core/models/city.model';
import { location } from 'src/app/core/models/location.model';
import { LocationService } from 'src/app/core/services/location.service';
import * as XLSX from 'xlsx';
import jwt_decode from 'jwt-decode';
// import { NgDialogAnimationService } from 'ng-dialog-animation';
// import { AppAddModalComponent } from '../../@shared/components/app-add-modal/app-add-modal.component';

@Component({
    selector: 'app-organization',
    templateUrl: './organization.component.html',
    styleUrls: ['./organization.component.css'],
})
export class OrganizationComponent implements OnInit {
    organizations: Organization[];
    addOrganization: Organization = new Organization();
    editOrganization: Organization = new Organization();
    // displayModalAddOrganization: boolean;
    // displayModalEidtOrganization: boolean;
    Parents: Organization[];
    Companies: Company[];
    Countires: Country[];
    Cities: City[];
    CitiesFiltered: City[];
    Types: DefaultData[];
    Locations: location[];
    FileSelected: File = null;
    comapnyId: string;
    userName: string;
    constructor(
        public _organizationService: OrganizationService,
        public _messagesServic: MessagesServiceService,
        public _defaultDataService: DefaultDataService,
        public _countryService: CountryService,
        public _cityService: CityService,
        public _locationService: LocationService,
        public _companyService: CompanyService,
        // private dialog:NgDialogAnimationService
    ) { }

    ngOnInit(): void {
        this.getAllOrganizations();
        this.seedData();
        this.comapnyId = jwt_decode(localStorage.getItem('token'))['CompanyId'];
        this.userName = jwt_decode(localStorage.getItem('token'))['sub'];
        // this.openDialog()
    }

    getAllOrganizations() {
        this._organizationService.getAllOrganizations().subscribe((res) => {
            this.organizations = res;
            this.Parents = res;
        });
    }

    seedData() {
     let user=JSON.parse(localStorage.getItem("userres"))

        this._defaultDataService.getAllDefaultDataByTypeId(2,user.CompanyId).subscribe((res) => {
            this.Types = res;
        });
        this._countryService.getAllCountries().subscribe((res) => {
            this.Countires = res;
        });
        this._locationService.getAllLocations().subscribe((res) => {
            this.Locations = res;
        });
        this._cityService.getAllCities().subscribe((res) => {
            this.Cities = res;
        });
        this._companyService.getAllCompanys().subscribe((res) => {
            this.Companies = res;
        });
    }

    // showAddOrganization() {
    //     this.displayModalAddOrganization = true;
    // }

    showEditOrganization(obj: Organization) {
        // this.displayModalEidtOrganization = true;
        this.editOrganization = obj;
        this.CitiesFiltered = this.Cities.filter(
            (c) => c.countryId == obj.countryId
        );
    }

    getCities(countryId) {
        this.CitiesFiltered = this.Cities.filter((c) => c.countryId == countryId);
    }

    SaveOrganization(closeButton) {
        this.addOrganization.createdBy = this.userName;
        this.addOrganization.companyId = this.comapnyId;
        this._organizationService
            .addOrganization(this.addOrganization)
            .subscribe((res) => {
                this._messagesServic.toastNotification(
                    '',
                    'Data Added Successfully',
                    true
                );

                this.getAllOrganizations();
                closeButton.click();
            });
        // this.displayModalAddOrganization = false;
        this.addOrganization.namePrimary = '';
        this.addOrganization.nameSecondary = '';
        this.addOrganization.defaultDataId = '';
        this.addOrganization.locationId = '';
        this.addOrganization.companyId = '';
        this.addOrganization.internalAddress = '';
        this.addOrganization.countryId = '';
        this.addOrganization.cityId = '';
        this.addOrganization.parentId = '';
        this.addOrganization.locationName = '';
        this.addOrganization.companyName = '';
        this.addOrganization.countryName = '';
        this.addOrganization.cityName = '';
        this.addOrganization.parentName = '';
    }

    EidtOrganization(editModal) {
        this.editOrganization.lastModifiedBy = this.userName;
        this._organizationService
            .editOrganization(this.editOrganization)
            .subscribe((res) => {
                this._messagesServic.toastNotification(
                    '',
                    'Data Edited Successfully',
                    true
                );
                this.getAllOrganizations();
                editModal.click()
            });
        // this.displayModalEidtOrganization = false;
        // this.displayModalAddOrganization = false;
        this.editOrganization.namePrimary = '';
        this.editOrganization.nameSecondary = '';
        this.editOrganization.defaultDataId = '';
        this.editOrganization.locationId = '';
        this.editOrganization.companyId = '';
        this.editOrganization.internalAddress = '';
        this.editOrganization.parentId = '';
        this.editOrganization.countryId = '';
        this.editOrganization.cityId = '';
        this.editOrganization.locationName = '';
        this.editOrganization.companyName = '';
        this.editOrganization.countryName = '';
        this.editOrganization.cityName = '';
        this.editOrganization.parentName = '';
    }

    DeleteOrganization(item) {
        this._messagesServic.confirmDelete().subscribe((resp) => {
            if (resp.success) {
                this._organizationService
                    .deleteOrganization(item.id)
                    .subscribe((res) => {
                        this._messagesServic.toastNotification(
                            '',
                            'Data Deleted Successfully',
                            true
                        );
                        this.getAllOrganizations();
                    });
            } else {
                this.getAllOrganizations();
            }
        });
    }

    exportexcel(): void {
        /* pass here the table id */
        let element = document.getElementById('excel-table');
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        /* save to file */
        XLSX.writeFile(wb, 'Organizations.xlsx');
    }

    onFileSelected(event) {
        this.FileSelected = <File>event.target.files[0];
    }
    onUpload(closeModal) {
        const fileData = new FormData();
        fileData.append('Excel file', this.FileSelected, this.FileSelected.name);
        this._organizationService.uploadFileExecl(fileData).subscribe((res) => {
            this._messagesServic.toastNotification(
                '',
                'Data Added Successfully',
                true
            );
            closeModal.click()
            this.getAllOrganizations();
            this.FileSelected = null;
        });
    }

    // openDialog(){
    //     const dialogRef = this.dialog.open(AppAddModalComponent, {
    // 		width: '350px',
    // 		animation: {
    // 			to: 'left',
    // 			incomingOptions: {
    // 				keyframeAnimationOptions: { easing: 'ease-in-out', duration: 500 },
    // 			},
    // 		},
    // 		position: {
    // 			top: '100px',
    // 			rowStart: '0',
    // 		},
    // 		data: 'hello',
    // 	});
    // }
}
