import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { VehicleModel } from 'src/app/app.component';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private readonly URL:string ="Ithula antha link"

  constructor(private http:HttpClientModule) { }

  create(data:VehicleModel): Observable<VehicleModel>
  {
    return this.http.post(this.URL,data);

    update(data:VehicleModel): Observable<VehicleModel>
    {
      return this.http.put(this.URL,data);
  }
}

GetAll(): Observable<VehicleModel[]>
{
  return this.http.get<VehicleModel>(this.URL);
}

GetOne(id:number): Observable<VehicleModel>
{
  return this.http.get<VehicleModel>(this.URL +"/"+ id);
}

Delete(id:number): Observable<VehicleModel>
{
  return this.http.delete<VehicleModel>(this.URL +"/"+ id);
}