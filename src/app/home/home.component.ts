import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public resp:any;
  constructor(private http:HttpClient ) { }

  ngOnInit() {

    let obs=this.http.get('https://api.github.com/users/aydinmaz')
   
    obs.subscribe((response) => {this.resp=response; console.log(this.resp);})
    
  }



}
