export class Global {
	token: any;
	client: any | null = JSON.parse(localStorage.getItem('client') as any)
	user: any | null = JSON.parse(localStorage.getItem('user') as any);
	title!: string;
	modalTitle!: string;
	resetEmail!:string;
	dropdown = {
		items : [

		]
	}

}
