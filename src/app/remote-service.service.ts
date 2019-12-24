import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})

export class RemoteServiceService {
  apiUrl = '/assets/rabannas_data.json';


  public lists: any = [];

 
  constructor(private http: HttpClient) { 
      this.getListing().subscribe((data)=>{   
        this.lists=data;
      });
}

 
  getListing(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getDetails', []))
      );
  }

  
 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

    // book mark


  



/**
 * Let's test
 */


    
    bookmark(index): Observable<any>{
// console.log(this.file.dataDirectory);
//         this.file.writeFile(this.file.dataDirectory, 'test.json', 'hello,world,', {replace: true}).then(_ =>
//             console.log('Directory exists')).catch(err => 
//             console.log('Directory doesn\'t exist'));


        return this.http.post(this.apiUrl,{})
        .pipe(
          tap(_ => this.log('response received')),
          catchError(this.handleError('getDetails', []))
        );
    }

  /**  Search Filter **/
  
  filterItems(searchList) {
      if(!searchList){
          return;
      }
    return this.lists.filter(list => {
      return list.title.toUpperCase().indexOf(searchList.toUpperCase()) > -1;
    });
  }


    
  
}
