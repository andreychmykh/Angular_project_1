import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch'; //to catch errors
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';




@Injectable()
export class DataService {
    constructor(private url: string, private http: Http) { }

    getAll() {
        return this.http.get(this.url)
            .map(response => response.json())
            .catch(this.handleError);
    }

    create(resource: any) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    update(resource: any) {
        return this.http.patch(this.url + '/' + resource.id, resource)
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id: string) {
        return this.http.delete(this.url + '/' + id)
            .map(response => response.json())
            .catch(this.handleError);

    }

    private handleError(error: Response) {
        if (error.status === 400)
            return Observable.throw(new BadRequestError());
        if (error.status === 404)
            return Observable.throw(new NotFoundError());
        else
            return Observable.throw(new AppError(error));
    }
}
