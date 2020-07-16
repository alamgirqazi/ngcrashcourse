import { Component, OnInit } from "@angular/core";
import { QuotesService } from "./quotes.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  author;
  quote;

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    console.log("components");
    this.getQuotes();
  }

  getQuotes() {
    this.quotesService.getQuotesApi().subscribe(
      (data) => {
        console.log("data", data);
        console.log("data", data.data);
        this.author = data.data.author;
        this.quote = data.data.quote;
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
}
