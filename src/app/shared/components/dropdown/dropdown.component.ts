import {
  Component,
  Input,
  Output,
  computed,
  signal,
  EventEmitter,
  WritableSignal,
} from '@angular/core';
import { GameProvider } from '../../models/providerResponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  dropDownClicked(isFalse: any) {
    this.newItemEvent.emit(isFalse);
  }
  @Input() providers!: GameProvider[];
  numOfItems = computed(() => (!this.showItems() ? this.providers.length : 7));
  showItems = signal(false);
  changeNumOfItems() {
    this.showItems.update((val) => !val);
  }
}
