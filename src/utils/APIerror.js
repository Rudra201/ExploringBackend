class APIError extends Error {
  constructor(message, statusCode , error=[] , statck = ""  ) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
    this.stack = statck;
    this.success = false;
    this.data = null;

if(stack){
  this.stack = stack;
}else{
    Error.captureStackTrace(this, this.constructor);
}



  }


}
