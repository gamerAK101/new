import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export class VehicleModel{
  id:number;
  company: string;
  model: string;
  number: number;
  colour: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  vehicleList:VehicleModel[] = [];
  isEdit:boolean =false;

  constructor(private vehicleService:VehicleService){}
  vehicle: VehicleModel = new VehicleModel();

  onSubmit(form: NgForm): void{
    if(!this.isEdit)
    {
    console.log(form.value);
    delete form.id.value;
    this.studentService.Create();
    .subscribe(resp =>{
      console.log(resp);
      form.resetForm();
      this.getAll();
    })
  }
  else{
    console.log(form.value);
    this.studentService.update();
    .subscribe(resp =>{
      console.log(resp);
      form.resetForm();
      this.isEdit =false;
      this.getAll();
    })
  
  }
  }
  getALL():void
  {
    this.vehicleService.GetAll()
    .subscribe(resp=>{
      console.log(resp);
      this.vehicleList = resp;

    })
  }
  edit(data:VehicleModel):void
  {
  console.log(data);
  this.isEdit =true;
  this.vehicleService.GetAll(data.id)
    .subscribe(resp=>{
      console.log(resp);
      this.vehicle = resp;
  }
  delete(data:VehicleModel):void {
    this.vehicleService.Delete(data.id)
    .subscribe(resp=>
      this.getALL();
      )
    }
  ngOnInit():void{
    this.getAll();
  }
}
