import { Pipe, PipeTransform } from '@angular/core';
import { imageByCategory } from '../../constants/images.enum';

@Pipe({
  name: 'imagePaths',
  standalone: true,
})
export class ImagePathsPipe implements PipeTransform {
  transform(value: string): string | undefined {
    let imagepath;

    switch (value) {
      case imageByCategory.Star:
        imagepath = 'assets/lists/star.svg';
        break;
      case imageByCategory.New:
        imagepath = 'assets/lists/new.svg';
        break;
      case imageByCategory.Gift:
        imagepath = 'assets/lists/buyBonus.svg';
        break;
    }
    return imagepath;
  }
}
