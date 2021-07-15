import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultNews = [];
    for(const _new of value){
      if(_new.title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultNews.push(_new);
      }
    }
    return resultNews;
  }

}
