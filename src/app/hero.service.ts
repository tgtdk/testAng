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
        "Employee": "Harv Mudd",
        "OrderDate": "2013/11/12"
      },
      {
        "OrderNumber": 35706,
        "SaleAmount": 6150,
        "StoreCity": "Las Vegas",
        "StoreState": "Nevada",
        "Employee": "Harv Mudd",
        "OrderDate": "2013/11/14"
      },
      {
        "OrderNumber": 35709,
        "SaleAmount": 13200,
        "StoreCity": "San Jose",
        "StoreState": "California",
        "Employee": "Harv Mudd",
        "OrderDate": "2013/11/18"
      },
      {
        "OrderNumber": 35711,
        "SaleAmount": 16050,
        "StoreCity": "Denver",
        "StoreState": "Colorado",
        "Employee": "Jim Packard",
        "OrderDate": "2013/11/22"
      },
      {
        "OrderNumber": 35714,
        "SaleAmount": 14750,
        "StoreCity": "Seattle",
        "StoreState": "Washington",
        "Employee": "Harv Mudd",
        "OrderDate": "2013/11/30"
      },
      {
        "OrderNumber": 35789,
        "SaleAmount": 6050,
        "StoreCity": "San Jose",
        "StoreState": "California",
        "Employee": "Clark Morgan",
        "OrderDate": "2013/12/01"
      },
      {
        "OrderNumber": 35983,
        "SaleAmount": 3725,
        "StoreCity": "Salt Lake City",
        "StoreState": "Utah",
        "Employee": "Todd Hoffman",
        "OrderDate": "2013/12/03"
      },
      {
        "OrderNumber": 36488,
        "SaleAmount": 9500,
        "StoreCity": "San Diego",
        "StoreState": "California",
        "Employee": "Todd Hoffman",
        "OrderDate": "2013/12/05"
      },
      {
        "OrderNumber": 36987,
        "SaleAmount": 14200,
        "StoreCity": "Las Vegas",
        "StoreState": "Nevada",
        "Employee": "Clark Morgan",
        "OrderDate": "2013/12/07"
      },
      {
        "OrderNumber": 37642,
        "SaleAmount": 22650,
        "StoreCity": "Spokane",
        "StoreState": "Washington",
        "Employee": "Clark Morgan",
        "OrderDate": "2013/12/08"
      },
      {
        "OrderNumber": 38466,
        "SaleAmount": 7800,
        "StoreCity": "Boise",
        "StoreState": "Idaho",
        "Employee": "Harv Mudd",
        "OrderDate": "2013/12/10"
      },
      {
        "OrderNumber": 38775,
        "SaleAmount": 18600,
        "StoreCity": "Los Angeles",
        "StoreState": "California",
        "Employee": "Harv Mudd",
        "OrderDate": "2013/12/15"
      }
    ];

    // Return an Observable of the mock data
    return of({ data: mockData, totalCount: 500 });
  }

}
