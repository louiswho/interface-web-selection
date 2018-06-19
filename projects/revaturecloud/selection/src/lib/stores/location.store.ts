import { Injectable } from "@angular/core";
import { SelectionService } from "../services/selection.service";
import { BehaviorSubject, observable, Observable } from "rxjs";
import { Room } from "../models/room.model";

@Injectable({
  providedIn: 'root'
})

export class LocationStore {

  private locationSubject: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);

  constructor(
    private backendservice: SelectionService
  ){
    this.loadInitLocations();
  }

  loadInitLocations(){
    this.backendservice.getAllRooms().subscribe (
      res => this.locationSubject.next(res)
    );
  }

  get locations(): Observable<Room[]> {
    return this.locationSubject.asObservable();
  }

}
