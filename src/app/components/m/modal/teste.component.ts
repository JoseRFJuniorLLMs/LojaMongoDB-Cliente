import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private dataApiService: DataApiService,
    private location: Location
  ) { }
  ngOnInit() {
  }

  onSaveBook(bookForm: NgForm): void {
    if (bookForm.value.bookId == null) {
      // NEW
      this.dataApiService.saveBook(bookForm.value).subscribe(book => location.reload());
    } else {
      // update
      this.dataApiService.updateBook(bookForm.value).subscribe(book => location.reload());
    }
  }

}
