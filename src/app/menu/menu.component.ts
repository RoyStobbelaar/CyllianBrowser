import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu',
    styleUrls: ['./menu.component.css'],
    templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit{

    constructor() { }

    ngOnInit(): void {
        console.log('load menu');
    }
}