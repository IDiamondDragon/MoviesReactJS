import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming'

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
   req.keys().forEach(req);
}

configure(loadStories, module);

addDecorator(withInfo as any);
addDecorator(withKnobs);

addParameters({
  options: {
    theme: themes.dark
  }
})