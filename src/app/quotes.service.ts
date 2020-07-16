import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class QuotesService {
  constructor(private httpClient: HttpClient) {}

  getQuotesApi(): Observable<any> {
    const url = "https://random-quotes.now.sh/";
    return this.httpClient.get(url);
  }
}
