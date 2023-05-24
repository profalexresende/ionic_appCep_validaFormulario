import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.page.html',
  styleUrls: ['./busca-cep.page.scss'],
})
export class BuscaCepPage implements OnInit {

  ceps: any;
  cidade:string='';
  estado:string='';
  rua:string='';

  formCadastro: FormGroup;
  mensagens={
    cidade:[
      {tipo: 'required',mensagem:'Campo CIDADE é obrigatório.'},
      {tipo: 'minlength',mensagem:'O campo CIDADE deve conter no mínimo 3 caracteres'},
    ],
    rua:[
      {tipo: 'required',mensagem:'Campo RUA é obrigatório.'},
      {tipo: 'minlenght',mensagem:'O campo rua deve conter no mínimo 3 caracteres'},
    ],
    erroEstado:[
      {tipo: 'required',mensagem:'Campo ESTADO é obrigatório.'},
      {tipo: 'minlength',mensagem:'O campo ESTADO deve conter 2 caracteres'},
      {tipo: 'maxlength',mensagem:'O campo ESTADO deve conter 2 caracteres'},
    ],
  };


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder) {
      this.formCadastro=this.formBuilder.group({
        txtEstado: ['', Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(2)])],
        cidade: ['', Validators.compose([Validators.required,Validators.minLength(3)])],
        rua: ['', Validators.compose([Validators.required,Validators.minLength(3)])],
      });
    }

  ngOnInit() {
  }

  efetuarConsulta(){

    this.http.get(`https://viacep.com.br/ws/${this.estado}/${this.cidade}/${this.rua}/json/`).subscribe(res=>{
      this.ceps=res;
    });
  }

}
