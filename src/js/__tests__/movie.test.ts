import Cinema, { Product } from '../main/cinema';

test('Создание описания для карточки', () => {
  const cinema = new Cinema();
  const product = new Product('Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключение', '137 мин. / 02:17');
  cinema.add(product);

  expect(cinema.getAll()).toEqual([{
    name: 'Мстители',
    year: 2012,
    country: 'США',
    tagline: 'Avengers Assemble!',
    genre: 'фантастика, боевик, фэнтези, приключение',
    time: '137 мин. / 02:17',
  }]);
});
