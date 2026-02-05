
import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      
      <div class="w-full max-w-md">
        
        <!-- Header Section -->
        <div class="mb-10 text-center">
          <h1 class="text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Digite seu código de acesso
          </h1>
          <p class="text-slate-500 text-sm font-medium leading-relaxed">
            O acesso a este conteúdo é individual e exclusivo.
          </p>
        </div>

        <!-- Access Form -->
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div class="space-y-2">
            <label for="code" class="sr-only">Código de Acesso</label>
            <input 
              id="code" 
              type="text" 
              formControlName="code"
              placeholder="CÓDIGO"
              class="w-full px-4 py-4 border bg-slate-50 border-slate-200 rounded-none focus:bg-white focus:ring-1 focus:ring-pink-600 focus:border-pink-600 outline-none transition-all placeholder-slate-400 text-slate-900 text-center uppercase tracking-[0.2em] font-bold text-lg"
              autocomplete="off"
            />
            
            @if (errorMessage()) {
              <div class="flex items-center justify-center space-x-2 text-pink-600 mt-3 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-bold tracking-wide">
                  {{ errorMessage() }}
                </span>
              </div>
            }
          </div>

          <button 
            type="submit" 
            [disabled]="loginForm.invalid || isLoading()"
            class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 transition-colors duration-200 disabled:opacity-75 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
          >
            @if (isLoading()) {
              <span>Verificando...</span>
            } @else {
              <span>Acessar</span>
            }
          </button>
        </form>

        <!-- Footer / Help -->
        <div class="mt-12 text-center border-t border-slate-100 pt-6">
          <p class="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
            Business English Handbook
          </p>
        </div>

      </div>
    </div>
  `
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  
  loginForm = this.fb.group({
    code: ['', [Validators.required, Validators.minLength(3)]]
  });

  errorMessage = signal('');
  isLoading = signal(false);

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.isLoading.set(true);
    this.errorMessage.set('');

    // Artificial delay for better UX (simulates server validation)
    setTimeout(() => {
      const code = this.loginForm.get('code')?.value || '';
      const success = this.authService.login(code);
      
      if (!success) {
        this.errorMessage.set('Código inválido ou já utilizado.');
        this.isLoading.set(false);
        this.loginForm.get('code')?.reset();
      }
      // Success is handled by AuthService redirection
    }, 600);
  }
}
