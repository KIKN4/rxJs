import { Component, OnInit } from '@angular/core';
import { merge, mergeMap, of } from 'rxjs';
import { MergeMapService } from '../shared/services/merge-map.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit {
  userData: any;
  userAddress: any;

  constructor(private mergeMapService: MergeMapService) {}

  ngOnInit(): void {
    this.loadUserDataAndPosts('1');
  }

  loadUserDataAndPosts(userId: string) {
    of(userId)
      .pipe(
        mergeMap((id) => this.mergeMapService.getUserDataById(id)),
        mergeMap((userData) => {
          this.userData = userData;
          return this.mergeMapService.getUserAdress(userData.address);
        })
      )
      .subscribe((address) => {
        this.userAddress = address;
        console.log(this.userAddress);
      });
  }
}
