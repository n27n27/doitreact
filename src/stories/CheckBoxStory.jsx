import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CheckBox from '../04/CheckBox';
import Text from '../04/Text';

storiesOf('CheckBox', module)
    .addWithJSX('기본 설정', () => <CheckBox name="agree" />);