import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dadosCEP: any;
  cep:string ='';
  exibirProgress:boolean=false;

    constructor(private http: HttpClient, private router: Router) { }

    consultarCEP(){
      this.exibirProgressBar();
      this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe(res=>{
        this.dadosCEP=res;
      });
      this.esconderProgressBar();
    }

    exibirProgressBar() {
      this.exibirProgress = true;
    }

    esconderProgressBar() {
      this.exibirProgress = false;
    }
}
