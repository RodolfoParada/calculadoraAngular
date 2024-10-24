import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  numeroA : string = '';
  numeroB: string = ''; 
  resultado: number = 0;

  sumar() {
  
  return this.resultado = parseFloat(this.numeroA)+ parseFloat(this.numeroB)   ;
}
  operandoB(event: Event) {
    const elementoInput = event.target as HTMLInputElement;
    this.numeroA = elementoInput.value;
  }
  operandoA(event: Event) {
  const elementoInput = event.target as HTMLInputElement;
  this.numeroB = elementoInput.value;
}


}
