"use strict";
class UserForm {
  constructor(
    loginFormCallback,
    registerFormCallback,
  ) {
    this.loginFormCallback = loginFormCallback;
    this.registerFormCallback = registerFormCallback;
  }
  loginFormCallback = loginFormAction(data);
  loginFormCallback();
  registerFormCallback();
}
class ApiConnector {
  constructor (
    loginForm,
    registerForm,
    loginErrorMessageBox,
    registerErrorMessageBox,) {
    this.loginForm;
    this.registerForm;
    this.loginErrorMessageBox;
    this.registerErrorMessageBox;

  }
  setLoginErrorMessage(message);
  setRegisterErrorMessage(message);
  registerFormAction();
  getData(form);
}