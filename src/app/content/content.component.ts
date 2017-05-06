import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content',
    styleUrls: ['./content.component.css'],
    templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit{

    constructor(){ }

    ngOnInit(): void {
        console.log('load content');
    }
}