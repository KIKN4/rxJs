import { Component, OnInit } from '@angular/core';
import { mergeMap, of } from 'rxjs';
import { MergeMapService } from '../shared/services/merge-map.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent {
  inputConfig = [{ type: 'number', placeholder: 'Enter user ID' }];
  tableHeaders: string[] = [
    'Street',
    'Suite',
    'City',
    'Zipcode',
    'Geo (Lat, Lng)',
  ];
  tableData: any[] = [];
  userInput: string = '';

  constructor(private mergeMapService: MergeMapService) {}

  getUserInput(userId: any) {
    of(userId)
      .pipe(
        mergeMap((id) => this.mergeMapService.getUserDataById(id)),
        mergeMap((userData) => {
          return this.mergeMapService.getUserAdress(userData.address);
        })
      )
      .subscribe((address) => {
        this.tableData = [
          [
            address.street,
            address.suite,
            address.city,
            address.zipcode,
            `${address.geo.lat}, ${address.geo.lng}`,
          ],
        ];
      });
  }
}
