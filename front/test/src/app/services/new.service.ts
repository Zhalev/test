import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Inums} from "../components/sum/sum.component";

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private httpClient: HttpClient) { }

  getNumbers(): Observable<Inums> {
    return this.httpClient.get<Inums>(environment.apiURL);
  }
  getSum(a: number, b?: number): number {
    if (!b) {
      return a;
    }
    return a + b;
  }
}
