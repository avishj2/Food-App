import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-fount',
  templateUrl: './not-fount.component.html',
  styleUrl: './not-fount.component.scss'
})
export class NotFountComponent implements OnInit{
  @Input() visible:boolean = false;
  @Input() notFountMessage: string = "Nothing Found!";
  @Input() resetLinkText: string = "Reset";
  @Input() resetLinkRoute: string = "/";
  
  ngOnInit(): void {
      
  }

}
