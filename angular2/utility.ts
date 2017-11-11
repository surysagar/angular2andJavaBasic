// use of 

anyFun() {
    const constList =
      ['abc',
        'xyz',
        'lmn',
        'dfg'];

    const promise = new Promise<any>((resolve, reject) => {
      resolve(constList)
    });
    return promise;
}


+++++++++++++++++++++++++++++++




setTimeout(() => {
    this.goBack();
  }, 1000);

this.anyService.anything(this.value)
    .subscribe(response => {

      this.Service.broadcast('toasterNotification', Data);
      
    }, (err) => {
      this.submitButtonDisabled = false;
});



    ++++++


    this.service.call1().subscribe(
      (list) => {
        this.list = list.map((aitem) => {

    	return xyx


    }
    });

        call1(): Observable<WalletManagementAudit[]> {
    		return this.httpClientService.get('walletManagementAudit')
      	.map(res => res);
  }

  get(url, options?) {
    this.eventsService.broadcast('loaderOn', true);
    const params: URLSearchParams = new URLSearchParams();
    if (url === 'one' || url === 'two') {
      params.set('source', 'Admin');
    }
    return this.http.get(this.getFullUrl(url, options), {search: params})
      .map((res: Response) => res.json())
      .catch(err => {
        this.handleError(err);
        return Observable.throw(err);
      }).finally(() => {
        this.eventsService.broadcast('loaderOn', false);
      });
  }



  <div class="container wallet-select-container ng-scope" 
    ng-include="vm.isC ? 'app/modules/Select/list.html' : 'app/modules/Select/list2.html'">