"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var PaymentService = (function () {
    // private headers = new Headers({'Content-Type': 'application/json'});
    function PaymentService(http) {
        this.http = http;
        this.serviceUrl = 'api/payments';
    }
    PaymentService.prototype.getPayments = function () {
        return this.http.get(this.serviceUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // getPayment(id: number): Promise<Payment> {
    //   const url = `${this.serviceUrl}/${id}`;
    //   return this.http
    //              .get(url)
    //              .toPromise()
    //              .then(response => response.json().data as Payment)
    //              .catch(this.handleError);
    // }
    // update(payment: Payment): Promise<Payment> {
    //   const url = `${this.serviceUrl}/${payment.id}`;
    //   return this.http
    //              .put(url, JSON.stringify(payment), {headers: this.headers})
    //              .toPromise()
    //              .then(() => payment)
    //              .catch(this.handleError);
    // }
    // create(payment: any): Promise<Payment> {
    //   return this.http
    //              .post(this.serviceUrl, JSON.stringify(payment), {headers: this.headers})
    //              .toPromise()
    //              .then((response) => response.json().data as Payment)
    //              .catch(this.handleError);
    // }
    // delete(id: number): Promise<void> {
    //   const url = `${this.serviceUrl}/${id}`;
    //   return this.http
    //              .delete(url, {headers: this.headers})
    //              .toPromise()
    //              .then(() => null)
    //              .catch(this.handleError);
    // }
    PaymentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PaymentService;
}());
PaymentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map