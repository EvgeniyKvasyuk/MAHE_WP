import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {
    number,
    text,
} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import {
    Button,
} from './button';

storiesOf('Button', module).add('Button', () => (
    <Button
        label={text('Label', 'Simple button')}
        onClick={action('onClick')}
    />
));

storiesOf('Button', module).add('Button with width', () => (
    <Button
        label={text('Label', 'Simple button')}
        onClick={action('onClick')}
        width={number('Width', 250)}
    />
));

storiesOf('Button', module).add('Button primary', () => (
    <Button
        primary
        label={text('Label', 'Simple button')}
        onClick={action('onClick')}
    />
));

storiesOf('Button', module).add('Button danger', () => (
    <Button
        primary
        danger
        label={text('Label', 'Simple button')}
        onClick={action('onClick')}
    />
));


