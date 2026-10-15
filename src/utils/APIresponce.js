const APIResponse = class {
  constructor(message, data, error , statusCode) {
    this.success = statusCode < 400;       ;
    this.message = message;
    this.data = data;
    this.error = error;
    this.statusCode = statusCode;
  }
};
