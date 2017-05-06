import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  public searchResults: any = [];
  public username: string = '';

  constructor(private http: Http) { }

  searchUserProfile(username: string)
  {
    return this.makeRequest(`users/${username}`);
  }

  searchUsers( search_string: string )
  {
    return this.makeRequest(`search/users?q=${search_string}`);
  }

  //https://api.github.com/search/users?q=bpineda
  private makeRequest( path: string )
  {
    let url = `https://api.github.com/${path}`;
    return this.http.get(url)
      .map( (res) => res.json() );
  }

}
