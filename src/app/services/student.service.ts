import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../entities/student';
import { Activity } from '../entities/activity';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  url: string = 'http://localhost:8080/student';
  constructor(private http: HttpClient) {}

  public createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url + '/', student);
  }

  public deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(this.url + '/' + id);
  }

  public getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.url + '/Allactivities');
  }

  public getActivitiesInStudentCalendar(
    studentId: number
  ): Observable<Activity> {
    return this.http.get<Activity>(
      this.url + '/' + studentId + '/calendar-activities'
    );
  }

  public addActivityToCalendar(
    studentId: number,
    activityId: number
  ): Observable<Activity> {
    return this.http.post<Activity>(
      this.url + '/add-activity/' + studentId + '/' + activityId,
      null
    );
  }

  public modifyActivityInCalendar(
    studentId: number,
    activity: Activity
  ): Observable<Activity> {
    return this.http.put<Activity>(
      this.url + '/modify-activity/' + studentId + '/' + activity.id,
      activity
    );
  }
}
