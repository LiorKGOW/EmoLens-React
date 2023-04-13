import React from 'react';
import { Button, TextContent, Text, TextVariants } from '@patternfly/react-core';

const IndexPage = () => (
  <>
    <TextContent>
      <Text component={TextVariants.h1}>Welcome to EmoLens</Text>
      <Text component={TextVariants.h5}>This is the project of Guy & Lior</Text>
    </TextContent>
    <Button variant="primary">Checking PF4 works</Button>
  </>
);

export default IndexPage;
