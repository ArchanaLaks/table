import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'table';
  data: any[]=[];
  constructor(private service:AppService){}

  ngOnInit(): void {
    this.service.getdata().subscribe(data => {   
      this.data.push(data); 
      console.log(data);
  });
}
}
