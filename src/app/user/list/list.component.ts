// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
// import { GlobalLoaderServiceService } from '../../core/global-loader-service.service';
// import { IUser } from '../../shared/interfaces/user';

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrl: './list.component.css'
// })
// export class ListComponent implements OnInit {

//   userList: IUser[] | null = null;
//   constructor (private userService: UserService,
//     private globalLoaderService: GlobalLoaderServiceService
//     ) {}

//   ngOnInit(): void {
//    this.loadUsers();
//   }

//   loadUsers() : void {
//      this.globalLoaderService.showLoader ('Loading users');
//    this.userService.loadUsers().subscribe({
//     next: (userList) => {
//       this.globalLoaderService.hideLoader();
//       this.userList = userList;
//     }
//   });
// }

// reloadUserHandler(): void {
//   this.loadUsers();
//   }
// }