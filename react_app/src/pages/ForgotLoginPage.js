import React from "react";
import { Text, TextContent, TextVariants } from "@patternfly/react-core";
import { trollFace } from "./resources/TrollFace.js";

const ForgotLoginPage = () => {
  return (
    <>
      <TextContent>
        <Text component={TextVariants.h1}>Forgot Login?</Text>
        <Text component={TextVariants.h5}>Too Bad ... </Text>
      </TextContent>
      {trollFace}
    </>
  );
};

export default ForgotLoginPage;
