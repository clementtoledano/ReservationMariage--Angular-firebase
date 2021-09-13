import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <app-navbar></app-navbar>
      <div class="m-5 grid grid-cols-1 md:grid-cols-2">
        <div class="bg-gray-200 p-4 md:rounded-l-2xl">
          <router-outlet></router-outlet>
        </div>
        <div class="relative">
          <img
            class="w-full object-cover h-full opacity-90 md:rounded-r-2xl"
            src="../assets/picture.jpg"
            alt="photo"
          />
        </div>
      </div>
      <app-map></app-map>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
