import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean {
        if (this.checkIfLogged()) {
            return true;
        } else {
           
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }

    checkIfLogged(): boolean {
        
        const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        return isLoggedIn;
    }
}
