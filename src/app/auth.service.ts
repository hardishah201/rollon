import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private storageKey = 'rollon.auth';

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'secure123') {
      try { localStorage.setItem(this.storageKey, '1'); } catch (e) {}
      return true;
    }
    return false;
  }

  logout(): void {
    try { localStorage.removeItem(this.storageKey); } catch (e) {}
  }

  isAuthenticated(): boolean {
    try { return localStorage.getItem(this.storageKey) === '1'; } catch (e) { return false; }
  }
}
