import { Component, OnInit } from '@angular/core';
import { Empolyee } from 'src/app/core/models/Empolyee';
import { EmploeeService } from 'src/app/core/services/Emploee.service';
import { MessageService } from 'src/app/core/services/message.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  epmloyees;
  displayModalAdd: boolean;
  displayModalEidt: boolean;
  addEmpolyee:Empolyee=new Empolyee();
  editEmpolyee:Empolyee=new Empolyee();
  deleteEmpolyee:Empolyee=new Empolyee();
  constructor(public _emploeeService: EmploeeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
            this._emploeeService.getAll().subscribe((res) => {
                this.epmloyees = res.resultList;
                console.log(res);
            });
        }

  showAdd(){
    this.displayModalAdd = true;
  }

  showEdit(type){
    this.displayModalEidt = true;
    this.editEmpolyee = type;
  }

  delete(type){
    console.log(typeof type.id)

    this.deleteEmpolyee=type
    this._emploeeService.Delete(type).subscribe((res) => {
      this.getAll();
    });

  }
  save(){
        this._emploeeService.Add(this.addEmpolyee).subscribe((res) => {
            
            this.getAll();
        });
        this.displayModalAdd = false;
        this.addEmpolyee.name = '';
        this.addEmpolyee.type = '';
  }

  edit(){
    this._emploeeService.Edit(this.editEmpolyee).subscribe((res) => {
        
        this.getAll();
    });
    this.displayModalEidt = false;
    this.editEmpolyee.name = '';
    this.editEmpolyee.type = '';
}

  
}
