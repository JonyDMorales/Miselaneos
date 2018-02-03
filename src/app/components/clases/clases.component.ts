import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'app-clases',
  	templateUrl: './clases.component.html',
  	styles: []
})
export class ClasesComponent implements OnInit {
	alert:string ="alert-danger";
  	loading:boolean = false;
  	constructor() { }

  	ngOnInit() {}

  	public ejecutar(){
  		this.loading = true;
  		setTimeout(()=> this.loading = false , 3000);
  	}

}
