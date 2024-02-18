import {
  Component,
  Input,
  Output,
  computed,
  signal,
  EventEmitter,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { GameProvider } from '../../../shared/models/ProviderResponse';
import { RouterLink } from '@angular/router';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-providers',
  standalone: true,
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css',
  imports: [CommonModule, RouterLink, TruncatePipe],
})
export class ProvidersComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  dropDownClicked(isFalse: any) {
    this.newItemEvent.emit(isFalse);
  }
  @Input() providers!: GameProvider[];
  numOfItems = computed(() => (!this.hideItems() ? this.providers.length : 7));
  hideItems = signal(true);
  changeNumOfItems() {
    this.hideItems.update((val) => !val);
  }
}
