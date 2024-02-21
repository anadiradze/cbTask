import {
  Component,
  Input,
  Output,
  computed,
  signal,
  EventEmitter,
  input,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { GameProvider } from '../../models/ProviderResponse';
import { RouterLink } from '@angular/router';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { ImagePathsPipe } from '../../pipes/image-paths.pipe';

@Component({
  selector: 'app-slots-navigator',
  standalone: true,
  templateUrl: './slots-navigator.component.html',
  styleUrl: './slots-navigator.component.css',
  imports: [CommonModule, RouterLink, TruncatePipe, ImagePathsPipe],
})
export class SlotsNavigatorComponent {
  @Input() hasDropDown: boolean = false;
  @Input() hasGamesCount: boolean = false;
  @Input() slotNavigatorItem!: string;
  @Output() itemClick = new EventEmitter<any>();

  @Input() slotNavigators!: any[];

  numOfItems = computed(() =>
    !this.hideItems() ? this.slotNavigators.length : 7
  );

  hideItems = signal(true);

  changeNumOfItems() {
    this.hideItems.update((val) => !val);
  }
}
