
import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  
  // Predefined valid codes (Simulating a database of issued codes)
  private validCodes = new Set(['EXEC-2024', 'START-NOW', 'BUSINESS-PRO']);
  
  // Storage keys
  private readonly SESSION_KEY = 'beh_session';
  private readonly USED_CODES_KEY = 'beh_used_codes';
  
  // Signal to track auth state
  isAuthenticated = signal<boolean>(this.checkInitialAuth());

  constructor() {}

  private checkInitialAuth(): boolean {
    // Check local storage for persistence across reloads
    return localStorage.getItem(this.SESSION_KEY) === 'active';
  }

  private getUsedCodes(): string[] {
    const stored = localStorage.getItem(this.USED_CODES_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  private markCodeAsUsed(code: string): void {
    const used = this.getUsedCodes();
    if (!used.includes(code)) {
      used.push(code);
      localStorage.setItem(this.USED_CODES_KEY, JSON.stringify(used));
    }
  }

  login(code: string): boolean {
    // Normalize code input
    const cleanCode = code.trim().toUpperCase();
    
    // 1. Check if code exists in valid list
    if (!this.validCodes.has(cleanCode)) {
      return false;
    }

    // 2. Check if code has already been used on this device
    // This satisfies the "Single Use" requirement for the client-side context
    const usedCodes = this.getUsedCodes();
    if (usedCodes.includes(cleanCode)) {
      return false;
    }

    // 3. Success: Mark used and start session
    this.markCodeAsUsed(cleanCode);
    localStorage.setItem(this.SESSION_KEY, 'active');
    this.isAuthenticated.set(true);
    this.router.navigate(['/']);
    return true;
  }

  logout() {
    localStorage.removeItem(this.SESSION_KEY);
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
    return false;
  }
}
