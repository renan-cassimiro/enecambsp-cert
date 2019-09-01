import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AmbienteService } from '../ambiente/ambiente.service';
import { Colaborador } from '../../models/colaborador';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  isLoggedIn = false;
  token: any;

  constructor(private http: HttpClient, private storage: Storage,
    private ambiente: AmbienteService) {

  }

  entra(email: String, password: String) {
    return this.http.post(this.ambiente.API_URL + 'autenticar/entrar',
      { email: email, password: password }
    ).pipe(
      tap(token => {
        this.storage.set('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  registra(cpf: String, senha: String) {
    return this.http.post(this.ambiente.API_URL + 'autenticar/cadastrar',
      { cpf: cpf, senha: senha }
    )
  }

  sai() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + " " + this.token["access_token"]
    });
    return this.http.get(this.ambiente.API_URL + 'autenticar/usuario', { headers: headers })
      .pipe(
        tap(data => {
          this.storage.remove("token");
          this.isLoggedIn = false;
          delete this.token;
          return data;
        })
      )
  }

  usuario() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + " " + this.token["access_token"]
    });
    return this.http.get<Colaborador>(this.ambiente.API_URL + 'autenticar/usuario', { headers: headers })
      .pipe(
        tap(user => {
          return user;
        })
      )
  }

  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;
        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn = false;
      });
  }
}
