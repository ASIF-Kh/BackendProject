class ApiError extends Error {
  constructor(
    statusCode, 
    message="something went wrong",
    errors=[],
    stack=""
) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.data = null; // need to learn more about this
    this.success = false;

    if (stack){
        this.stack = stack;
    }else{
        Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };