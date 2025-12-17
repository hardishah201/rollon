import { Component, signal, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('rollOn');
  constructor(private router: Router, private auth: AuthService) {}

  menuOpen = false;

  isLogged() {
    return this.auth.isAuthenticated();
  }

  logout(event?: Event) {
    if (event) { event.preventDefault(); }
    this.auth.logout();
    this.router.navigate(['/']);
    this.closeMenu();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollTo(fragment: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${fragment}`); } catch (_) {}
    } else {
      // fallback: update hash without reloading
      try { location.hash = fragment; } catch (_) {}
    }
    this.closeMenu();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop || 0;
    const header = document.querySelector('.header');
    if (!header) return;
    if (scrolled > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}
