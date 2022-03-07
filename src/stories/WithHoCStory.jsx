import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../04/Button";
import Text from "../04/Text";
import withHoC from "../05/withHoC";

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf('WithHoC', module)
    .addWithJSX('기본 설정', () => (
        <div>
            <ButtonWithHoC>안녕하세요</ButtonWithHoC>
            <TextWithHoC>텍스트</TextWithHoC>
        </div>
    ))
    .addWithJSX('large', () => (
        <div>
            <ButtonWithHoC large>안녕하세요</ButtonWithHoC>
            <TextWithHoC large>텍스트</TextWithHoC>
        </div>
    ));