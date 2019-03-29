import { configure, setAddon, addDecorator } from '@storybook/react';
import { withConsole, setConsoleOptions } from '@storybook/addon-console';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';

addDecorator(centered);
addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
});

setAddon(JSXAddon);
const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
    require('./welcomeStory');
    req.keys().forEach(file => req(file));
}

configure(loadStories, module);
