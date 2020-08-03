import React, { forwardRef } from 'react';

import { StyledText } from './StyledText';

const Text = forwardRef(({ color, tag, as, ...rest }, ref) => (
  <StyledText as={!as && tag ? tag : as} colorProp={color} {...rest} ref={ref} />
));

Text.defaultProps = {
  level: 1,
};

let TextDoc;
if (process.env.NODE_ENV !== 'production') {
  TextDoc = require('./doc').doc(Text); // eslint-disable-line global-require
}
const TextWrapper = TextDoc || Text;

export { TextWrapper as Text };
