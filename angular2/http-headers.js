this.httpClientService.registerGlobalHeader('X-Requested-By', '1');
this.httpClientService.registerGlobalHeader('Content-Type', 'application/json');



 private globalHeaders: Headers = new Headers();

 
  registerGlobalHeader(key, value): void {
    this.globalHeaders.append(key, value);
  }