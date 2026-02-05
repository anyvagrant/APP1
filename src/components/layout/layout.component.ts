
import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-pink-100 selection:text-pink-900">
      
      <!-- Top Navigation Bar (Sticky) -->
      <header class="sticky top-0 z-40 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
        <div class="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <!-- Brand Identity -->
          <a routerLink="/" (click)="closeMobileMenu()" class="group flex flex-col leading-none select-none">
            <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-pink-600 transition-colors">Business English</span>
            <span class="text-xl font-bold tracking-tight text-slate-900">Handbook<span class="text-pink-600">.</span></span>
          </a>

          <!-- Desktop Menu -->
          <nav class="hidden md:flex items-center space-x-8">
            <ng-container *ngTemplateOutlet="navItems"></ng-container>
            <div class="h-4 w-px bg-slate-200 mx-2"></div>
            <button (click)="logout()" class="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors">
              Sair
            </button>
          </nav>

          <!-- Mobile Menu Toggle -->
          <button (click)="toggleMobileMenu()" class="md:hidden p-2 -mr-2 text-slate-900 hover:text-pink-600 transition-colors focus:outline-none" aria-label="Menu">
            @if (!isMobileMenuOpen()) {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            }
          </button>
        </div>
      </header>

      <!-- Mobile Navigation Drawer (Slide-in) -->
      @if (isMobileMenuOpen()) {
        <div class="fixed inset-0 z-50 md:hidden">
          <!-- Backdrop -->
          <div class="fixed inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" (click)="closeMobileMenu()"></div>
          
          <!-- Drawer Content -->
          <div class="fixed inset-y-0 right-0 w-[80%] max-w-[300px] bg-white shadow-2xl border-l border-slate-100 flex flex-col p-8 animate-in slide-in-from-right duration-300">
            <div class="mb-10">
              <span class="text-xs font-bold text-pink-600 uppercase tracking-widest">Menu</span>
            </div>
            
            <nav class="flex flex-col space-y-6">
              <ng-container *ngTemplateOutlet="navItems"></ng-container>
            </nav>

            <div class="mt-auto pt-8 border-t border-slate-100">
              <button (click)="logout()" class="flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                Encerrar Acesso
              </button>
            </div>
          </div>
        </div>
      }

      <!-- Main Content Area -->
      <main class="flex-grow w-full max-w-4xl mx-auto px-6 py-12 md:py-16">
        <router-outlet></router-outlet>
      </main>

      <!-- Minimal Footer -->
      <footer class="border-t border-slate-100 bg-slate-50 py-12 mt-auto">
        <div class="max-w-5xl mx-auto px-6 text-center">
          <p class="text-sm text-slate-900 font-semibold mb-2">Business English Handbook</p>
          <p class="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            Material didático profissional para uso individual.<br>
            Desenvolvido com foco em inglês instrumental e comunicação global.
          </p>
        </div>
      </footer>

    </div>

    <!-- Reusable Nav Items Template -->
    <ng-template #navItems>
      <a routerLink="/home" 
         routerLinkActive="text-pink-600 font-bold" 
         [routerLinkActiveOptions]="{exact: true}"
         (click)="closeMobileMenu()" 
         class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wide">
        Início
      </a>
      <a routerLink="/course" 
         routerLinkActive="text-pink-600 font-bold" 
         (click)="closeMobileMenu()" 
         class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wide">
        Curso
      </a>
      <a routerLink="/methodology" 
         routerLinkActive="text-pink-600 font-bold" 
         (click)="closeMobileMenu()" 
         class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wide">
        Metodologia
      </a>
      <a routerLink="/about" 
         routerLinkActive="text-pink-600 font-bold" 
         (click)="closeMobileMenu()" 
         class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wide">
        Sobre
      </a>
    </ng-template>
  `
})
export class LayoutComponent {
  authService = inject(AuthService);
  isMobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  logout() {
    this.authService.logout();
  }
}
