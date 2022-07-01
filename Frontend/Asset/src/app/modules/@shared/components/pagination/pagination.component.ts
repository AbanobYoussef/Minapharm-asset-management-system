import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

	@Input() count!: number;
	@Input() currentPageItems!: number;
	@Output() rows: EventEmitter<any> = new EventEmitter<any>();
	@Output() p: EventEmitter<any> = new EventEmitter<any>();
	currentPage: number = 1;
	itemsPerPage: number = 5;

	ngOnInit() {

	}

	RowsPerPage(event: any) {
	
		this.itemsPerPage = event.target.value;
		this.rows.emit(event.target.value);
		this.currentPage = 1;
		this.p.emit(this.currentPage)
	}

	public pages() {
		return new Array(Math.ceil(this.count / this.itemsPerPage))
	}

	paginate(event: any) {
		this.currentPage = event.target.value;
		this.p.emit(event.target.value)
	}

	first() {
		this.currentPage = 1;
		this.p.emit(1)
	}

	last() {
		this.currentPage = this.pages().length;
		this.p.emit(this.currentPage)
	}

	prev() {
		if (this.currentPage == 1) 
			return;
		this.currentPage --;;
		this.p.emit(this.currentPage)
	}

	next() {
		if (this.currentPage == this.pages().length) 
			return;
		this.currentPage ++;
		this.p.emit(this.currentPage)
	}
	
}
