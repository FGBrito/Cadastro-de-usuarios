import { Users } from './../../shared/models/data-users';
import { UsersService } from './../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrl: './details-user.component.scss'
})
export class DetailsUserComponent implements OnInit {

  constructor(
    private service: UsersService,
    private activeRoute: ActivatedRoute,
  ) { }

  public userId: number = 0;
  public data: Users[] = [];
  public displayedColumns: string[] = ['name', 'email', 'address', 'company', 'action'];


  ngOnInit(): void {
    this.activeRoute.params
      .subscribe(async res => {
        console.log(res['id'])
        this.getUser(res['id'])

        // let param = res.id.split('-');
        // this.userId = param[param.length - 1];
      })
  }

  public getUser(id: number){
    this.service
      .getUser(id)
      .subscribe((res)=>{
        this.data = res;
      })
  }
}
