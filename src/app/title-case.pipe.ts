import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  title;

  transform(value: string): string {
    if (!value)
      return null;

    this.title = value.split(' ');

    this.title.forEach((element, index) => {
      this.title[index] = capitalizeFirstLetter(element);
    });

    function capitalizeFirstLetter(word: string) {
      let capitalizedWord = '';

      for (let currentLetter = 0; currentLetter < word.length; ++currentLetter) {
        if (currentLetter == 0) {
          capitalizedWord = word[currentLetter].toUpperCase();
        } else {
          capitalizedWord += word[currentLetter].toLowerCase();
        }
      };

      return capitalizedWord;
    }

    for (let i = 1; i < this.title.length; ++i) {
      if ((this.title[i] == 'The') || (this.title[i] == 'Of')) {
        this.title[i] = this.title[i].toLowerCase();
      }
    }

    return this.title.join(' ');
  }

}
