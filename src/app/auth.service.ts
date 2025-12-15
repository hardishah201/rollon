import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    // Check if running in browser
    this.isBrowser = isPlatformBrowser(platformId);

    // Restore state only if browser
    if (this.isBrowser) {
      this.loggedIn = localStorage.getItem('auth') === 'true';
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'secure123') {
      this.loggedIn = true;
      if (this.isBrowser) {
        localStorage.setItem('auth', 'true');   // persist
      }
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    if (this.isBrowser) {
      localStorage.removeItem('auth');          // clear persistence
    }
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
