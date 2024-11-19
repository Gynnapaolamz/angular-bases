import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Black Panter', 'Thor'];
  public deletedHero?: string;

  removeLastHeroe(): void {
   this.deletedHero = this.heroNames.pop();

  }

}