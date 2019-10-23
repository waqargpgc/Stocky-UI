import { HttpClient, HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpSetup } from '@models/common';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {
  constructor(private httpClient: HttpClient, private setup: HttpSetup) { }

  create(item: any, endPoint: string = null): Observable<any> {
    endPoint = endPoint || this.setup.EndPoint;

    this.logInfo(`/${endPoint}`, item);
    return this.httpClient.post(`${this.setup.Root}/${endPoint}`, item)
  }

  update(item: any, endPoint: string = null): Observable<any> {
    endPoint = endPoint || this.setup.EndPoint;

    this.logInfo(`${endPoint}/${item.id}`, item);
    return this.httpClient.put(`${this.setup.Root}/${endPoint}/${item.id}`, item)
  }

  get(id: any, endPoint: string = null): Observable<any> {
    endPoint = endPoint || this.setup.EndPoint;

    // this.logInfo(`${endPoint}/${id}`);
    return this.httpClient.get(`${this.setup.Root}/${endPoint}/${id}`)
  }

  list(queryOptions: any = null, endPoint: string = null): Observable<any> {
    endPoint = endPoint || this.setup.EndPoint;
    let queryString = this.getQueryString(queryOptions);

    // this.logInfo(`/${endPoint}${queryString}`);
    let req = this.httpClient.get(`${this.setup.Root}/${endPoint}${queryString}`, { observe: 'response' });

    req = req.pipe(
      map((resp: HttpResponse<any>) => {
        let respBody = resp.body;
        let paging = resp.headers.get('X-Pagination');

        respBody.paging = JSON.parse(paging);
        return respBody;
      })
    )

    return req;
  }

  delete(id: any, endPoint: string = null) {
    endPoint = endPoint || this.setup.EndPoint;

    // this.logInfo(`/${endPoint}/${id}`);
    return this.httpClient.delete(`${this.setup.Root}/${endPoint}/${id}`);
  }

  private getQueryString(json: any): string {
    if (!json) return "";

    delete json["totalPages"];
    delete json["totalRecords"];
    delete json["firstRecordOnPage"];
    delete json["lastRecordOnPage"];
    delete json["hasPrevious"];
    delete json["hasNext"];

    let isFirst = true;
    let qry = "";

    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        const value = json[key];
        if (!value) continue;

        if (isFirst) {
          isFirst = false;
          qry = `?${key}=${value}`;
        } else {
          qry += `&${key}=${value}`;
        }
      }
    }

    return qry;
  }

  //#region error handler
  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was:`);
      console.error(error.error);
      //this.toastr.error(error.error.errorMessage)
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
  //#endregion

  public getResponseFromSource(srcObs$: Observable<any>): any {
    return srcObs$.toPromise()
      .then(data => data)
      .catch(err => {
        this.handleError(err);
        return err;
      })
  }

  logInfo(endpoint = "", item = null) {
    let endPointInfo = `Api end point: ${endpoint}`;
    console.info(endPointInfo)

    if (item == null) return;
    console.table(Object.entries(item));
  }

}

