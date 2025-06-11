import type { Meta, StoryObj } from '@storybook/angular';
import { BaseCardAltComponent } from '../../../app/components/cards/base-card/basecard.component';

const meta: Meta<BaseCardAltComponent> = {
  title: 'Components/Cards/BaseCardAlt',
  component: BaseCardAltComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    headerMain: { control: 'text' },
    headerNote: { control: 'text' },
    headerDetails: { control: 'text' },
    dropdown1Label: { control: 'text' },
    dropdown2Label: { control: 'text' },
    dropdown3Label: { control: 'text' },
    dropdownItems: { control: 'object' },
    enableCheckbox: { control: 'boolean' },
    checkboxText: { control: 'text' },
  },
  args: {
    headerMain: 'Ver planes disponibles',
    headerNote: 'Visualiza los planes comerciales disponibles',
    headerDetails:
      'Estos son los planes comerciales disponibles en este momento, puedes agregar nuevos o editar los existentes presionando sobre los 3 puntos verticales.',
    dropdown1Label: 'Selecciona Ejemplo 1',
    dropdown2Label: 'Selecciona Ejemplo 2',
    dropdown3Label: 'Selecciona Ejemplo 3',
    dropdownItems: ['Opción A', 'Opción B', 'Opción C'],
    enableCheckbox: true,
    checkboxText: 'Sí, puede ser no codificado',
  },
};

export default meta;
type Story = StoryObj<BaseCardAltComponent>;

export const Default: Story = {};
