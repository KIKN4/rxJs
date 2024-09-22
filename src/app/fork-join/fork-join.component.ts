import { Component } from '@angular/core';
import { ForkJoinService } from '../shared/services/fork-join.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css'],
})
export class ForkJoinComponent {
  tableHeaders: string[] = ['Login', 'ID', 'First Name', 'Email'];
  tableData: any[] = [];
  clickedButtons: { [key: number]: boolean } = { 1: false, 2: false, 3: false };
  errorMessage: string = '';

  constructor(private forkJoinService: ForkJoinService) {}

  getGitHubUsers(url: number) {
    this.clickedButtons[url] = true;
    this.errorMessage = '';
  }

  executeForkJoin() {
    if (
      Object.keys(this.clickedButtons).every((key) => this.clickedButtons[+key])
    ) {
      forkJoin([
        this.forkJoinService.getGoogleUsers(1),
        this.forkJoinService.getGoogleUsers(2),
        this.forkJoinService.getGoogleUsers(3),
      ]).subscribe((results: any[]) => {
        const [githubUsers, dummyJsonUsers, escuelajsUsers] = results;

        const formattedGithubUsers = githubUsers.map((user: any) => [
          user.login,
          user.id,
          'John',
          'example@gmail.com',
        ]);

        const formattedDummyJsonUsers = dummyJsonUsers.users.map(
          (user: any) => [
            user.firstName + ' ' + user.lastName,
            user.id,
            user.firstName,
            'example@gmail.com',
          ]
        );

        const formattedEscuelajsUsers = escuelajsUsers.map((user: any) => [
          user.name,
          user.id,
          user.name,
          user.email,
        ]);

        this.tableData = [
          ...formattedGithubUsers,
          ...formattedDummyJsonUsers,
          ...formattedEscuelajsUsers,
        ];
      });
    } else {
      this.errorMessage = 'ყველა აიკონზე დააკლიკე!';
    }
  }
}
