import IMovie from './movie';

export class Product implements IMovie {

  constructor(
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string,
    readonly time: string,
  ) {
    this.name = name;
    this.year = year;
    this.country = country;
    this.tagline = tagline;
    this.genre = genre;
    this.time = time;
  }

}

export default class Cinema {

  private _items: IMovie[] = [];

  add(item: IMovie): void {
    this._items.push(item);
  }

  getAll(): IMovie[] {
    return [...this._items];
  }

}
