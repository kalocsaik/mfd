import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


class Newsletter {
  contactname: string;
  contactemail: string;
  newstype: string;
}

@Component({
  templateUrl: "./app/contact/contact.component.html"
})

export class ContactComponent implements OnInit{
  model:Newsletter = new Newsletter();
  newsdropdown: Array<string>;

  hasBeenSubmitted: boolean;

  ngOnInit() {
    this.newsdropdown = ['Baking', 'Dinners', 'Starters'];
    this.model.contactname = 'John';
    this.hasBeenSubmitted = false;
  }

  register(form:NgForm, event:Event){
    event.preventDefault();
    //save info to server via api
    this.hasBeenSubmitted = true;
  }
}
