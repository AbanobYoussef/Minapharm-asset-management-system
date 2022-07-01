import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'smart-table',
	templateUrl: './smart-table.component.html',
	styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {
	@Input() settings: any;
	@Input() data: any;
	originalData: any[] = [];
	tableData: any;
	searchObj: any = {};
	filterObj: any = {
		search: {},
		filter: {},
	};
	searchResult: any;
	currentData: any;
	rowsLength: number = 5;
	curretIndex: number = 0;
	checkedAll: boolean = false;
	@Output() edit = new EventEmitter<any>();
	@Output() delete = new EventEmitter<any>();
	@Output() select = new EventEmitter<any>();
	@Output() toggle = new EventEmitter<any>();

	constructor(public _sanitizer: DomSanitizer) {

	}

	ngOnInit(): void {
		this.originalData = this.data;
		this.tableData = this.data;
		if (this.settings.checkbox)
			this.originalData.map((item: any) => (item.checked = false));
		this.currentData = this.originalData?.slice(0, this.rowsLength);
	}

	filter() {
		let data: any[] = [...this.originalData];
		Object.keys(this.filterObj.search).forEach((key) => {
			if (this.filterObj.search[key] != '')
				data = [...this.applySearch(data, key, this.filterObj.search[key])];
		});
		Object.keys(this.filterObj.filter).forEach((key) => {
			if (this.filterObj.filter[key] != '')
				data = [...this.applayFilter(data, key, this.filterObj.filter[key])];
		});
		this.tableData = [...data];
		this.paginate(1);
	}

	applySearch(array: any[], key: string, value: string) {
		array = array.filter(
			(r) =>
				r[key].toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1
		);
		return array;
	}

	applayFilter(array: any[], key: string, value: string) {
		array = array.filter(
			(r) => r[key].toLocaleLowerCase() == value.toLocaleLowerCase()
		);
		return array;
	}

	rows(event: any) {
		this.rowsLength = event;
	}

	paginate(event: any) {
		this.curretIndex = event - 1;
		this.currentData = this.tableData.slice(
			this.curretIndex * this.rowsLength,
			Number(this.curretIndex * this.rowsLength) + Number(this.rowsLength)
		);
	}

	checkAll() {
		if (this.checkedAll)
			this.originalData.map((item: any) => (item.checked = true));
		else this.originalData.map((item: any) => (item.checked = false));

		this.select.emit(this.originalData);
	}

	toggled(event:any,index:number){
		this.toggle.emit({
			index:(this.curretIndex * this.rowsLength) + index,
			value:event?.target?.checked,
			rowIndex:index
		})
	}
		
}
