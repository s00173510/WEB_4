import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GithubService {

  constructor(private _http: HttpClient) { }
  mygithub (): Observable<GitResponse[]>{
    return this._http.get<GitResponse[]>("https://api.github.com/users/marus86elo/repos");
  }
}

