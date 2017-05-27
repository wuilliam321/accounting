import { InMemoryDbService } from 'angular-in-memory-web-api';
export class MemoryDataService implements InMemoryDbService {
  createDb() {
    let profiles = [
      {id: 1, name: 'Gilza'},
      {id: 2, name: 'Carlos'},
      {id: 3, name: 'Wuilliam'}
    ];
    let outputs: any[] = [];
    let accounts = [
      {id: 1, name: 'Transport'},
      {id: 2, name: 'Food'},
      {id: 3, name: 'Fun'},
      {id: 4, name: 'Shared Spends'},
      {id: 5, name: 'Water'},
      {id: 6, name: 'Light'},
      {id: 7, name: 'Internet'},
      {id: 8, name: 'TV'},
      {id: 9, name: 'Health'},
      {id: 10, name: 'House'},
    ];
    let payments = [
      {id: 1, name: 'Cash'},
      {id: 2, name: 'Debit'},
      {id: 3, name: 'Credit'},
      {id: 4, name: 'Other'}
    ];
    let currencies = [
      {id: 1, name: 'Pesos', short_name: '$'},
      {id: 2, name: 'Dollars', short_name: 'U$S'}
    ];
    return {
      profiles,
      outputs,
      accounts,
      payments,
      currencies
    };
  }
}
