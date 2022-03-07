import React from "react";
import { storiesOf } from "@storybook/react";

import { PageWithLoadData } from "../05/lifecycle";

storiesOf('Lifecycle', module).addWithJSX('loadData', () => (
    <PageWithLoadData loadData = {() => fetch('/').then(() => 'hello')} />
));