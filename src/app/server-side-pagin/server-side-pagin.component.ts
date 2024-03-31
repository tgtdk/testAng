import { Component, enableProdMode } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { CustomStore } from 'devextreme/data/custom_store';
import CustomStore from 'devextreme/data/custom_store';

import { LoadOptions } from 'devextreme/data/load_options';
// import { LoadResult } from 'devextreme/data/load_result';
// import { LoadResult } from 'devextreme/data/load_result';
import { HeroService } from '../hero.service'; // Adjust the path as needed

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-server-side-pagin',
  templateUrl: './server-side-pagin.component.html',
  styleUrl: './server-side-pagin.component.scss'
})
export class ServerSidePaginComponent {
  url: string = '';
  dataSource: CustomStore;

  constructor(private httpClient: HttpClient, private heroService: HeroService) {
    this.dataSource = new CustomStore({
      key: 'OrderNumber',
      load: (loadOptions: LoadOptions) => {
        const paramNames = [
          'skip', 'take', 'requireTotalCount', 'requireGroupCount',
          'sort', 'filter', 'totalSummary', 'group', 'groupSummary',
        ];

        let params = new HttpParams();

        paramNames
          .filter((paramName) => (loadOptions as any)[paramName])
          .forEach((paramName) => {
            params = params.set(paramName, JSON.stringify((loadOptions as any)[paramName]));
          });

        // Use 'heroService' property here
        let obs = this.heroService.getMockData();

        return new Promise<LoadResult<any>>((resolve, reject) => {
          obs.subscribe(
            (result: LoadResult<any> | PromiseLike<LoadResult<any>>) => {
              resolve(result);
            },
            (error) => {
              reject(error);
            }
          );
        });
      },
    });
  }
}
interface LoadResult<T> {
  data: T[]; // Assuming data is an array of items
  totalCount?: number; // Optional totalCount property
  summary?: any; // Optional summary property
  groupCount?: number; // Optional groupCount property
}
