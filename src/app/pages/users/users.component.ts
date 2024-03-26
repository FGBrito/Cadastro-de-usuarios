import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../../shared/components/dialog-modal/dialog-modal.component';
import { UsersService } from '../../shared/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
 constructor( 
    private service: UsersService,
    public dialog: MatDialog
  ){}

 public data: any;
 public displayedColumns: string[] = ['name', 'email', 'address', 'company', 'action'];

 ngOnInit(): void {
  this.getUsers()
 }

 private getUsers(): void {
  this.service
    .getUsers()
    .subscribe((response)=>{
      this.data = response;
    })
 } 

 private postUser(){
  
  let dataUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  this.service
      .postUser(dataUser)
      .subscribe((res)=>{
        console.log('add com sucesso')
      })
 }

 public openDialog() {
    let dataForm = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: dataForm
    });

    dialogRef.afterClosed().subscribe(result => {
      this.postUser();
      console.log('result', result)
      
      console.log(`Dialog result:`, result);
    });
 }

 public deleteUser(id: number){
  this.service
    .deleteUser(id)
    .subscribe((res)=>{
      this.getUsers();
    })
 }

}
