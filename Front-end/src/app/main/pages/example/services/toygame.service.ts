import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, Subject } from 'rxjs';
import { IToyGame } from '../models/i-toygame';

@Injectable({
  providedIn: 'root'
})
export class ToygameService {
  private subject = new Subject<IToyGame[]>();
  constructor(private http: HttpClient) { }

  get $subject(){
    return this.subject;
  }

  getToysGames(): void{
    this.http.get<IToyGame[]>(`${environment.API_URL}/api/toygames`).subscribe((data) => {
      this.$subject.next(data);
    });
  }

  saveToyGame(toygame: IToyGame): Observable<IToyGame>{
    return this.http.post<IToyGame>(`${environment.API_URL}/api/toygames`, toygame);
  }

  updateToyGame(toygame: IToyGame): Observable<IToyGame>{
    return this.http.put<IToyGame>(`${environment.API_URL}/api/toygames/${toygame.id}`, toygame);
  }

  deleteToyGame(toygame: IToyGame): Observable<IToyGame>{
    return this.http.delete<IToyGame>(`${environment.API_URL}/api/toygames/${toygame.id}`);
  }
}
