"use strict";
var MemoryDataService = (function () {
    function MemoryDataService() {
    }
    MemoryDataService.prototype.createDb = function () {
        var profiles = [
            { id: 1, name: 'Gilza' },
            { id: 2, name: 'Carlos' },
            { id: 3, name: 'Wuilliam' }
        ];
        var outputs = [
          { id: 1, profile_id: 1, account_id: 1, payment_id: 1, currency_id: 1, amount: 30, account: null, payment: null, currency: null, date: Date.now()},
          { id: 2, profile_id: 1, account_id: 1, payment_id: 1, currency_id: 1, amount: 30, account: null, payment: null, currency: null, date: Date.now()},
          { id: 3, profile_id: 1, account_id: 1, payment_id: 1, currency_id: 1, amount: 30, account: null, payment: null, currency: null, date: Date.now()},
        ];
        var accounts = [
            { id: 1, name: 'Transport' },
            { id: 2, name: 'Food' },
            { id: 3, name: 'Fun' },
            { id: 4, name: 'Shared Spends' },
            { id: 5, name: 'Water' },
            { id: 6, name: 'Light' },
            { id: 7, name: 'Internet' },
            { id: 8, name: 'TV' },
            { id: 9, name: 'Health' },
            { id: 10, name: 'House' },
        ];
        var payments = [
            { id: 1, name: 'Cash' },
            { id: 2, name: 'Debit' },
            { id: 3, name: 'Credit' },
            { id: 4, name: 'Other' }
        ];
        var currencies = [
            { id: 1, name: 'Pesos', short_name: '$' },
            { id: 2, name: 'Dollars', short_name: 'U$S' }
        ];
        return {
            profiles: profiles,
            outputs: outputs,
            accounts: accounts,
            payments: payments,
            currencies: currencies
        };
    };
    return MemoryDataService;
}());
exports.MemoryDataService = MemoryDataService;
//# sourceMappingURL=memory-data.service.js.map
