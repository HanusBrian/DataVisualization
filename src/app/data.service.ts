import { Injectable } from '@angular/core';

import { Violations } from './violations';
import { DATA } from './mock-data';

@Injectable()

export class DataService {
    getData(): Promise<Violations[]> {
        return Promise.resolve(DATA);
    }
}