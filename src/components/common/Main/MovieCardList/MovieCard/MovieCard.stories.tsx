import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MovieCard } from './MovieCard';
import { text } from '@storybook/addon-knobs';
import { object } from '@storybook/addon-knobs'
import { IMovie } from '../../../../../models/common/interfaces/IMovie';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store/store';

const stories = storiesOf('ExampleComponent', module);

const movie: IMovie =   {
  id: 337167,
  title: "Fifty Shades Freed",
  tagline: "Don't miss the climax",
  voteAverage: 6.1,
  voteCount: 1195,
  releaseDate: "2018-02-07",
  posterPath: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
  overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
  budget: 55000000,
  revenue: 136906000,
  genres: [
      "Drama",
      "Romance"
  ],
  runtime: 106
};

stories.add('MovieCard', () => 
(    
  <Provider store={configureStore(false, undefined)}>
    <MovieCard className={text('className', 'Some text')} 
              movie={object('movie', movie, 'GROUP-ID3')}
    />
  </Provider>
  ) , {
   info: { inline: true },
   className: `test-class`
});