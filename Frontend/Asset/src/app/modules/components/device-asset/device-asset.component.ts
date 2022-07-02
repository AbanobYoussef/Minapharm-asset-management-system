import { Component, OnInit } from '@angular/core';
import { DeviceAsset } from 'src/app/core/models/DeviceAsset';
import { DeviceAssetService } from 'src/app/core/services/DeviceAsset.service';
import { EmploeeService } from 'src/app/core/services/Emploee.service';

@Component({
  selector: 'app-device-asset',
  templateUrl: './device-asset.component.html',
  styleUrls: ['./device-asset.component.css']
})
export class DeviceAssetComponent implements OnInit {
  assets;
  emploees;
  displayModalAdd: boolean;
  displayModalEidt: boolean;
  addasset:DeviceAsset=new DeviceAsset();
  editasset:DeviceAsset=new DeviceAsset();
  deleteasset:DeviceAsset=new DeviceAsset();
  constructor(public _deviceAssetService: DeviceAssetService,
              public _emploeeService: EmploeeService) { }


  ngOnInit(): void {
    this.getAll();
    this.getAllEmploees();
  }

  getAll() {
    this._deviceAssetService.getAll().subscribe((res) => {
      this.assets =[]
        this.assets = res.resultList;
        console.log(res.resultList);
    });
}
getAllEmploees() {
  this._emploeeService.getAll().subscribe((res) => {
    this.emploees =[]
       if(res.resultList.length>0){
        this.emploees = res.resultList.filter(e=>e.type=="Owner")
        console.log(this.emploees)
       }
  });
}
getAllEmploeeName(id) {
  if(this.emploees!=undefined){
    if(this.emploees.filter(e=>e.id==id).length>0)
        return this.emploees.filter(e=>e.id==id)[0].name
  }
}
showAdd(){
this.displayModalAdd = true;
}

showEdit(type){
this.displayModalEidt = true;
this.editasset = type;
}

delete(type){

this.deleteasset=type
this._deviceAssetService.Delete(type).subscribe((res) => {
this.getAll();
});

}
save(){
  console.log(this.addasset)
this._deviceAssetService.Add(this.addasset).subscribe((res) => {
    
    this.getAll();
});
this.displayModalAdd = false;
this.addasset.assetName=''
this.addasset.manufacturer=''
this.addasset.model=''
this.addasset.version =''
this.addasset.processor =''
this.addasset.installesMomory =''
this.addasset.ownerId =''

}

edit(){
this._deviceAssetService.Edit(this.editasset).subscribe((res) => {

this.getAll();
});
this.displayModalEidt = false;
this.editasset.assetName=''
this.editasset.manufacturer=''
this.editasset.model=''
this.editasset.version =''
this.editasset.processor =''
this.editasset.installesMomory =''
this.editasset.ownerId =''
}

}
