import {Component, numberAttribute} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {Pokemon} from './interface/pokemon';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tpAdicionalDataBinding';
  focus: boolean = false;
  contentEditable: boolean = false;
  showCrud: boolean = false;

  pokemones: Array<Pokemon> = [
    { nombre: "Pikachu", tipo: "Eléctrico"},
    { nombre: "Charmander", tipo: "Fuego"},
    { nombre: "Squirtle", tipo: "Agua"},
    { nombre: "Bulbasaur", tipo: "Planta, Veneno"}
  ];

  newPokemon: Pokemon = { nombre: '', tipo: '' };

  toggleContentEditable(): void {
    this.contentEditable = !this.contentEditable;
  }
  onMouseOver(): void {
    if(this.focus)
    {
      this.focus = false;
    }else {
      this.focus = true;
    }

  }
  onClick(): void {
    this.focus = false;
    this.showCrud = true; // Establecer showCrud a true
  }

  borrarPokemon(numero: number): void {
    this.pokemones.splice(numero,1);
  }


  addPokemon() {
    if (this.newPokemon.nombre && this.newPokemon.tipo) {
      this.pokemones.push({ ...this.newPokemon });
      this.newPokemon = { nombre: '', tipo: '' };
    }
  }

}
