import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { UserDialogComponent } from "../user-dialog/user-dialog.component"

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  @Input() user$: any = []

  constructor(
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ["username", "address", "email", "phone"];

  openUserDialog(clickableUser: any) {
    console.log("clicked!", clickableUser)
    this.dialog.open(UserDialogComponent)
  } 

}
