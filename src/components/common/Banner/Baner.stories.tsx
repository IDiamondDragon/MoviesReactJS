import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Baner } from './Baner';
import { text } from '@storybook/addon-knobs';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store/store';

const stories = storiesOf('ExampleComponent', module);

stories.add('Baner', () => 
  (
    <Provider store={configureStore(false, undefined)}>
      <Baner className={text('className', 'Some text')} />
    </Provider>
  ) , {
   info: { inline: true },
   className: `test-class`
});