import { GithubService } from '../shared/github.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {  FormGroup, 
          FormControl, 
          Validators, 
          FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  form: FormGroup;

  userName = new FormControl("", [ Validators.required ]);
  users: any = [];

  constructor(  private router:Router, 
                private github: GithubService,
                form_builder: FormBuilder
                ) { 
    
    this.form = form_builder.group({
      "userName": this.userName
    });

    this.form.patchValue({ userName: github.username });
    this.users = this.github.searchResults;

    

  }

  searchForUser( search_string: string )
  {
    this.github.searchUsers(search_string)
        .subscribe(
          userDetails => 
          {

            this.users = userDetails['items'];
            this.github.searchResults = userDetails['items'];
            
          }
        );
  }

  onSubmit()
  {
    this.searchForUser(this.userName.value);
  }

  onClickShowDetails( selected_username: string )
  {

    this.github.username = this.userName.value;
    this.router.navigate( ['/github/user', selected_username ] );

  }
  
  ngOnInit() {
    
    this.form.get('userName').valueChanges
        .debounceTime(500)
        .do(
          changes => {
            console.log('Value changes:', changes);
            if( this.form.valid )
            {
              this.searchForUser(changes);
            }
            
          }
        )
        .subscribe()
        ;
  }

}

