import { Injectable } from '@angular/core';
import { Options } from 'devextreme/data/store';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  exclusive = new Subject<boolean>;
  userName = new Subject<string>;
  constructor() { }


  getMockData(): Observable<any> {
    // Simulated data
    const mockData = [
      {
        "OrderNumber": 35703,
        "SaleAmount": 11800,
        "StoreCity": "Las Vegas",
        "StoreState": "Nevada",
        "Employee": "D",
        "OrderDate": "2013/11/12"
      },
      {
        "OrderNumber": 35706,
        "SaleAmount": 6150,
        "StoreCity": "Las Vegas",
        "StoreState": "Nevada",
        "Employee": "B",
        "OrderDate": "2013/11/14"
      },
      {
        "OrderNumber": 35709,
        "SaleAmount": 13200,
        "StoreCity": "San Jose",
        "StoreState": "California",
        "Employee": "A",
        "OrderDate": "2013/11/18"
      },
      {
        "OrderNumber": 35711,
        "SaleAmount": 16050,
        "StoreCity": "Denver",
        "StoreState": "Colorado",
        "Employee": "C",
        "OrderDate": "2013/11/22"
      },
      {
        "OrderNumber": 35711,
        "SaleAmount": 16050,
        "StoreCity": "Denver",
        "StoreState": "Colorado",
        "Employee": "E",
        "OrderDate": "2013/11/22"
      },
      {
        "OrderNumber": 35711,
        "SaleAmount": 16050,
        "StoreCity": "Denver",
        "StoreState": "Colorado",
        "Employee": "F",
        "OrderDate": "2013/11/22"
      },
    ];

    // Return an Observable of the mock data
    return of({ data: mockData, totalCount: 18 });
  }

}
