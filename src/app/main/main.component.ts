import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main',
    styleUrls: ['./main.component.css'],
    templateUrl: './main.component.html'
})

export class MainComponent implements OnInit{

    constructor(){ }

    ngOnInit(): void {
        console.log('load main');
    }

}