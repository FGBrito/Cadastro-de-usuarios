import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HandleError, HttpErrorHandlerService } from '../../core/interceptors/http-error-handler.service';
import { Users } from '../models/data-users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private handleError: HandleError;
  private baseUrl= 'https://jsonplaceholder.typicode.com/';

  constructor( 
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService
  ){
    this.handleError = httpErrorHandler.createHandleError('TodoService')
  }

  public getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.baseUrl}users`)
      .pipe(
        (res)=> res,
        catchError(this.handleError('getUser', []))
      );
  }

  public getUser( id: number ): Observable<Array<Users>>{
    return this.http
      .get<Users>(`${this.baseUrl}users/${id}`)
      .pipe(
        map((user)=>{
          return new Array(user)
        }),
        catchError(this.handleError('getUser', [])));
  }

  public postUser(data: Users): Observable<Users[]>{
    return this.http
      .post<Users[]>(`${this.baseUrl}users`, data)
      .pipe(catchError(this.handleError('postUser', [])));      
  }

  public deleteUser(id: number): Observable<Users[]>{
    return this.http
      .delete<Users[]>(`${this.baseUrl}/users/${id}`)
      .pipe(catchError(this.handleError('deleteUser', [])));
  }

  public updateUser( dataItemUser: Users ): Observable<Users[]>{
    return this.http
      .patch<Users[]>(`${this.baseUrl}/users/${dataItemUser.id}`, dataItemUser)
      .pipe(catchError(this.handleError('deleteUser', [])));
  }
}
