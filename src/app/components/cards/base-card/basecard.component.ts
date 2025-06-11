import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMomentosComponent } from '../../header/header-momentos/header-momentos.component';
import { DropdownMenuComponent } from '../../dropdown-menu/dropdown-menu.component';
import { CheckboxTextComponent } from '../../Checkbox/CheckboxText/CheckboxText.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'storybook-base-card-alt',
  standalone: true,
  imports: [
    CommonModule,
    HeaderMomentosComponent,
    DropdownMenuComponent,
    CheckboxTextComponent,
    ButtonComponent,
  ],
  templateUrl: './basecard.component.html',
  styleUrls: ['./basecard.component.scss'],
})
export class BaseCardAltComponent {
  // Cabecera del bloque
  @Input() headerMain = 'Ver planes disponibles';
  @Input() headerNote = 'Visualiza los planes comerciales disponibles';
  @Input() headerDetails =
    'Estos son los planes comerciales disponibles en este momento, puedes agregar nuevos o editar los existentes presionando sobre los 3 puntos verticales.';

  // Campos dropdown
  @Input() dropdown1Label = 'Selecciona Opción 1';
  @Input() dropdown2Label = 'Selecciona Opción 2';
  @Input() dropdown3Label = 'Selecciona Opción 3';
  @Input() dropdownItems: string[] = ['Opción A', 'Opción B', 'Opción C'];

  // Checkbox opcional
  @Input() enableCheckbox = true;
  @Input() checkboxText = 'Sí, puede ser no codificado';
}
