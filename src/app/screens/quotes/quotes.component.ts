import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../../models/quote.model';
import { QuotesService } from 'src/app/service/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quote!: Quote;
  loading = false;

  constructor(private quoteService: QuotesService) {}

  ngOnInit(): void {
    this.loadQuote();
  }

  loadQuote() {
    this.loading = true;

    this.quoteService.getRandomQuote().subscribe({
      next: (data: Quote) => {
        this.quote = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  refreshQuote() {
    this.loadQuote();
  }
}
