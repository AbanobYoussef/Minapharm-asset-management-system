import { NgDialogAnimationService } from 'ng-dialog-animation';
import { Component, OnInit } from '@angular/core';
import { TranspoetAsset } from 'src/app/core/models/TranspoetAsset';
import { TranspoetAssetService } from 'src/app/core/services/transpoetAsset.service';
import { EmploeeService } from 'src/app/core/services/Emploee.service';

@Component({
  selector: 'app-transpoet-asset',
  templateUrl: './transpoet-asset.component.html',
  styleUrls: ['./transpoet-asset.component.css']
})
export class TranspoetAssetComponent implements OnInit {
  assets;
  emploees;
  displayModalAdd: boolean;
  displayModalEidt: boolean;
  addasset:TranspoetAsset=new TranspoetAsset();
  editasset:TranspoetAsset=new TranspoetAsset();
  deleteasset:TranspoetAsset=new TranspoetAsset();
  constructor(public _transpoetAssetService: TranspoetAssetService,
              public _emploeeService: EmploeeService) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllEmploees();
  }

  getAll() {
    this._transpoetAssetService.getAll().subscribe((res) => {
      this.assets =[]
        this.assets = res.resultList;
        console.log(res.resultList);
    });
}
getAllEmploees() {
  this._emploeeService.getAll().subscribe((res) => {
    this.emploees =[]
       if(res.resultList.length>0){
        this.emploees = res.resultList.filter(e=>e.type=="Driver")
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
this._transpoetAssetService.Delete(type).subscribe((res) => {
this.getAll();
});

}
save(){
  console.log(this.addasset)
this._transpoetAssetService.Add(this.addasset).subscribe((res) => {
    
    this.getAll();
});
this.displayModalAdd = false;
this.addasset.assetName=''
this.addasset.manufacturer=''
this.addasset.model=''
this.addasset.year =''
this.addasset.driverId=''

}

edit(){
this._transpoetAssetService.Edit(this.editasset).subscribe((res) => {

this.getAll();
});
this.displayModalEidt = false;
this.editasset.assetName=''
this.editasset.manufacturer=''
this.editasset.model=''
this.editasset.year =''
this.editasset.driverId=''
}

}
