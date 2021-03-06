import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 departments: Department[] = [
 {id: 1, name: "HR"},
 {id: 2, name: "IR"},
 {id: 3, name: "Admin"},
 {id: 4, name: "Sales"}
 ];
   
  constructor() { }

  ngOnInit() {
  }
  
  saveEmployee(empForm: NgForm ): void {
    console.log(empForm.value);
  }
}
