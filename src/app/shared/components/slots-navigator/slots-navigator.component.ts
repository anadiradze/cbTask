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
  activeItemId: string | null = null;

  @Input() ActivateDropDownNum: number = 7;
  @Input() hasGamesCount: boolean = false;
  @Input() slotNavigatorItem!: string;
  @Input() slotNavigators!: any[];
  @Input() activeItemIdentifier: string | null = null;
  @Input() hasBg!: boolean;
  @Output() itemClick = new EventEmitter<any>();

  onItemClick(slotNavigator: any) {
    this.itemClick.emit(slotNavigator);
    this.activeItemId = slotNavigator.name;
  }

  hideItems = signal(true);

  numOfItems = computed(() =>
    !this.hideItems() ? this.slotNavigators.length : 7
  );

  changeNumOfItems() {
    this.hideItems.update((val) => !val);
  }
}
