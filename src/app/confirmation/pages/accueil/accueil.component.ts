import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  template: `
    <div class="">
      <div class="font-serif text-center font-bold mb-10">
        <p class="text-7xl text-gold mb-5 font-cursive">
          Manon <br />&<br />Clément
        </p>
        <p class="text-xl">30 Octobre 2021</p>
        <p class="text-3xl text-gold">J - {{ jourRestant() }}</p>
      </div>
      <div class="mb-3">
        <p class="text-3xl font-cursive font-extrabold">
          1 / Mairie de Béziers
        </p>
        <p class="text-xl mb-3 ml-6 font-serif">15h30 - 16h00</p>
      </div>
      <div class="text-xl mb-3">
        <p class="text-3xl font-cursive font-extrabold">
          2 / Aperitif dinatoire
        </p>
        <p class="mb-3 ml-6 font-serif">
          A partir de 17h00 <br />
          Salle George Campo / Stade de football <br />
          Rue de la source / D37 <br />
          34420 Villeneuve-les-Beziers
        </p>
      </div>
      <p class="text-center font-cursive font-bold text-2xl text-gold">
        Confirmer votre présence avant le 01 octobre !
      </p>
    </div>
  `,
})
export class AccueilComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  jourRestant() {
    const date1: Date = new Date();
    const date2: Date = new Date('Oct 30 00:00:00 2021');
    const sec = (Number(date2) - Number(date1)) / 1000;
    const n = 24 * 3600;
    if (sec > 0) {
     return Math.floor(sec / n);
    }
    return;
  }
}
