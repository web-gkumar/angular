import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      // Customize the filtering logic based on your data structure
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(searchText)
      );
    });
  }

}
