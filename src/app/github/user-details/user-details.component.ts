import { Component, OnInit } from '@angular/core';
import { GithubService } from '../shared/github.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {  FormGroup, 
          FormControl, 
          Validators, 
          FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  avatar:string = '';
  bio: string = '';
  blog: string = '';
  location: string = '';
  constructor(  private activatedRoute: ActivatedRoute,
                private github: GithubService,
                private router: Router
                ) { 

                    this.activatedRoute.params.subscribe(
                      (params: Params) => {
                        let selected_username = params['username'];
                        this.github.searchUserProfile(selected_username)
                          .subscribe(
                            userDetails => {
                              this.avatar = userDetails['avatar_url'];
                              this.bio = userDetails['bio'];
                              this.blog = userDetails['blog'];
                              this.location = userDetails['location'];
                            }
                          );
                      }
                    )

                }

  ngOnInit() {
  }

  onClick()
  {
    this.router.navigate( ['/github' ] );
  }

}
