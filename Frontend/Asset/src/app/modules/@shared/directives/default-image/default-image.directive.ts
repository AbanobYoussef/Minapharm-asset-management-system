import { Directive, Input, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[defaultImage]',
	host: {
		'[src]': 'checkPath(src)',
		'(error)': 'onError()',
		'(load)': 'onLoad(src)',

	}
})
export class DefaultImageDirective implements AfterViewInit{
	@Output() loaded:EventEmitter<any> = new EventEmitter();
	@Input() src!: string;
	public defaultImg: string = '/assets/images/default-image.png';

	constructor(private el:ElementRef) {
	}

	ngAfterViewInit() {
		this.el.nativeElement.style.backgroundImage='url(' + this.defaultImg + ')';
		this.el.nativeElement.style.backgroundSize='contain'
		this.el.nativeElement.style.backgroundPosition = 'center';
	}

	public onError() {
		this.src = this.defaultImg;
	}

	public checkPath(src:any) {
		return src ? src : this.defaultImg;
	}

	public onLoad(src:any) {
		this.loaded.emit(true);
		return src ? src : this.defaultImg;
	}

}
