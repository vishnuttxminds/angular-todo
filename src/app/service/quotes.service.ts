import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private API_URL = 'https://dummyjson.com/quotes/random';

  constructor(private http: HttpClient) {}

  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.API_URL);
  }
}
