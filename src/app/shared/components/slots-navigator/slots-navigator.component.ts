import {
  Component,
  Input,
  Output,
  computed,
  signal,
  EventEmitter,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { ImagePathsPipe } from '../../pipes/image-paths.pipe';
import { Category } from '../../models/CategoriesResp.model';
import { GameProvider } from '../../models/GameProviderResp.model';

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
  @Input() slotNavigators!: GameProvider[] | Category[];
  @Input() activeItemIdentifier: string | null = null;
  @Input() hasBg!: boolean;
  @Output() itemClick = new EventEmitter<any>();

  onItemClick(slotNavigator: Category | GameProvider) {
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

  isActive(item: Category | GameProvider) {
    const prefix = item.hasOwnProperty('category') ? 'category-' : 'provider-';
    return this.activeItemIdentifier === `${prefix}${item.name}`;
  }
}
