import { Component, Input } from '@angular/core';
import { Game } from '../../models/CategoriesResponse';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from "../../pipes/truncate.pipe";

@Component({
    selector: 'app-slot-card',
    standalone: true,
    templateUrl: './slot-card.component.html',
    styleUrl: './slot-card.component.css',
    imports: [CommonModule, TruncatePipe]
})
export class SlotCardComponent {
  @Input() games!: Game[];


}
