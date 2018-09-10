import { Component, OnInit } from '@angular/core';
import { employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
 employees: employee []  = [
   {
    id:  1,
    name: "prasad",
    gender: "Male",
    email: "muniprasad.ch@gmail.com",
    phonenumber: "123",
    contactPreference: "phone",
    DateOfBirth: new Date( '10/12/1982'),
    Department: "Production",
    isActive: true,
    photoPath: "assets/images/male1.png"
   },
   {
    id:  2,
    name: "muni",
    gender: "Male",
    email: "muniprasad03@gmail.com",
    phonenumber: "123",
    contactPreference: "mail",
    DateOfBirth: new Date( '09/09/1982'),
    Department: "Production",
    isActive: true,
    photoPath: "assets/images/male2.png"
   },
   {
    id:  1,
    name: "Hell",
    gender: "Female",
    email: "125hell@gmail.com",
    phonenumber: "123",
    contactPreference: "phone",
    DateOfBirth: new Date( '10/12/1989'),
    Department: "Production",
    isActive: true,
    photoPath: "assets/images/female1.png"
   },
 ];
  constructor() { }

  ngOnInit() {
  }

}
