import { Pipe, PipeTransform } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives/number_value_accessor';


@Pipe({
    name: 'movie'
})
export class MoviePipe implements PipeTransform {
    preposition = new Set(["a", "an", "the", "and", "for", "nor", "but", "or", "yet", "so", "at", "around", "by", "after", "along", "from", "of", "on", "to", "with", "without"])

    private isPreposition(word) {
        return this.preposition.has(word)
    }

    private capitalize(word:string) {
        return (word.charAt(0).toUpperCase() + word.substr(1));
    }

    transform(value:string, limit?: number) {
        if (!value) return null;

        let cleanerValue = value.replace("  ", " ");
        let words = cleanerValue.toLowerCase().split(" ");

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (i < 1 || !this.isPreposition(word)) {
                word = this.capitalize(word);
            }
            words[i] = word;
        }

        return words.join(" ");
    }
}