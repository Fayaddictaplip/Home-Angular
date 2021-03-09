import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListResponse } from '../../../core/models/list-response.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<ListResponse<Job>>('https://localhost:5001/api/Jobs').pipe(
      map(value => value.data)
    );
  }
}
