import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'app/auth/services/data.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataSvc: DataService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.dataSvc.onCheck(environment.NAME_TOKEN)){
      this.router.navigate(['/auth', 'login']);
    }
    return this.dataSvc.onCheck(environment.NAME_TOKEN);
  }

}
