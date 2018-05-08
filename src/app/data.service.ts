import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  public apiHost: string = './json/contactMe.json';
  constructor(private http: Http) { }

  reportsTo() {
  return this._http.get('getCollection')
    .map((response: Response) => response.json().map(res => new multiSelect(res.empID, res.formattedName)))
    .catch(this.handleError);
  }
  }

}
