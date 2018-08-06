import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.whiteColor{color: white;}']
})
export class AppComponent {
	show = false;
	cont = 0;
	arrayCont= [];

	toggle(){
		this.show = !this.show;
		this.cont++;
		this.arrayCont.push(this.cont)
		console.log(this.arrayCont);
	}

	getColor(event: any){
		return event >= 5 ? 'blue' : 'transparent';
	}
}
