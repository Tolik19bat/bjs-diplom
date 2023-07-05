"use strict";
class UserForm {
  constructor(data, loginFormCallback) {
    this.data = data;
    this.loginFormCallback = loginFormCallback;
  }
  loginFormCallback = function (data) {
    loginForm(data)
    return data
  };
  
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