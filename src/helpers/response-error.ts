class ResponseError {
  private message: string;

  private status: number;

  constructor(message: string, status = 200) {
    this.message = message;
    this.status = status;
  }

  getMessage() {
    return this.message;
  }

  getStatus() {
    return this.status;
  }

  toString() {
    return this.message;
  }
}

export default ResponseError;
