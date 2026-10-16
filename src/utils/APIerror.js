class APIError extends Error {
  constructor(message, statusCode , error=[] , stack = ""  ) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
    this.stack = stack;
    this.success = false;
    this.data = null;

if(stack){
  this.stack = stack;
}else{
    Error.captureStackTrace(this, this.constructor);
}



  }


}
