import React from "react";
import {
  LoginFooterItem,
  LoginForm,
  LoginMainFooterBandItem,
  LoginPage,
  ListItem,
  ListVariant,
} from "@patternfly/react-core";

import ExclamationCircleIcon from "@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon";

export const Login = () => {
  const [showHelperText, setShowHelperText] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [isValidUsername, setIsValidUsername] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [isValidPassword, setIsValidPassword] = React.useState(true);
  const [isRememberMeChecked, setIsRememberMeChecked] = React.useState(false);
  const handleUsernameChange = (value) => {
    setUsername(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const onRememberMeClick = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };
  const onLoginButtonClick = (event) => {
    event.preventDefault();
    setIsValidUsername(!!username);
    setIsValidPassword(!!password);
    setShowHelperText(!username || !password);
  };
  const signUpMessage = (
    <LoginMainFooterBandItem>
      Don't have an account? <a href="/account/create">Create one now !</a>
    </LoginMainFooterBandItem>
  );
  const forgotCredentials = (
    <LoginMainFooterBandItem>
      <a href="login/forgot">Forgot username or password?</a>
    </LoginMainFooterBandItem>
  );
  const listItem = (
    <React.Fragment>
      <ListItem>
        <LoginFooterItem href="/">Terms of Use </LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="/">Help</LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="/">Privacy Policy</LoginFooterItem>
      </ListItem>
    </React.Fragment>
  );
  const loginForm = (
    <LoginForm
      showHelperText={showHelperText}
      helperText="Invalid login credentials."
      helperTextIcon={<ExclamationCircleIcon />}
      usernameLabel="Username"
      usernameValue={username}
      onChangeUsername={handleUsernameChange}
      isValidUsername={isValidUsername}
      passwordLabel="Password"
      passwordValue={password}
      isShowPasswordEnabled
      onChangePassword={handlePasswordChange}
      isValidPassword={isValidPassword}
      rememberMeLabel="Keep me logged in"
      isRememberMeChecked={isRememberMeChecked}
      onChangeRememberMe={onRememberMeClick}
      onLoginButtonClick={onLoginButtonClick}
      loginButtonLabel="Log in"
    />
  );
  const backgroundImage = "https://e1.pxfuel.com/desktop-wallpaper/931/255/desktop-wallpaper-pulsar-220-login-page.jpg";  // Doesn't work
  return (
    <LoginPage
      footerListVariants={ListVariant.inline}
      // brandImgSrc={"https://previews.123rf.com/images/dniprodd/dniprodd1902/dniprodd190200240/117924018-winking-cartoon-heart-with-glasses-symbol-of-love-vector-illustration.jpg"}
      brandImgAlt="EmoLens Logo"
      backgroundImgSrc={backgroundImage}
      footerListItems={listItem}
      textContent="This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users."
      loginTitle="Log in to Your Account"
      // socialMediaLoginContent={socialMediaLoginContent} -> This can be found in resources
      signUpForAccountMessage={signUpMessage}
      forgotCredentials={forgotCredentials}
    >
      {loginForm}
    </LoginPage>
  );
};

export default Login;
