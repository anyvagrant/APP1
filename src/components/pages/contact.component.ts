
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-4xl mx-auto pb-20">
      
      <!-- HEADER -->
      <header class="mb-12 border-b border-slate-200 pb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter mb-6">
          Central de Atendimento
        </h1>
        <div class="prose prose-slate max-w-none text-slate-600 leading-relaxed">
          <p class="text-xl text-slate-700 font-medium">
            Canal dedicado para suporte administrativo e técnico.
          </p>
        </div>
      </header>

      <!-- PRIMARY CONTACT (WHATSAPP) -->
      <section class="mb-16">
        <div class="bg-slate-900 text-white p-8 md:p-12 rounded-sm shadow-xl shadow-slate-200/50">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 class="text-2xl font-bold mb-3 tracking-tight">WhatsApp Business</h2>
              <p class="text-slate-300 mb-6 max-w-md text-sm leading-relaxed">
                Canal oficial para recuperação de acesso, dúvidas sobre faturamento e suporte técnico à plataforma.
              </p>
              
              <div class="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Status: Disponível</span>
              </div>
            </div>

            <!-- Note: Replace '5511999999999' with the actual business number when deploying -->
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center justify-center bg-white text-slate-900 font-bold py-4 px-8 hover:bg-emerald-50 transition-colors uppercase tracking-widest text-sm w-full md:w-auto min-w-[200px]">
               <span class="mr-2">Iniciar Conversa</span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
               </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- EXPECTATIONS & SCOPE -->
      <section class="grid md:grid-cols-2 gap-12 border-t border-slate-200 pt-12">
        
        <!-- Info Column -->
        <div>
          <h3 class="text-lg font-bold text-slate-900 mb-4">Informações Importantes</h3>
          <ul class="space-y-6">
            <li class="flex flex-col">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Horário de Atendimento</span>
              <span class="text-slate-700 text-sm">Segunda a Sexta, das 09h às 18h (Horário de Brasília).</span>
            </li>
            <li class="flex flex-col">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Tempo de Resposta</span>
              <span class="text-slate-700 text-sm">Geralmente respondemos em até 2 horas úteis. Em períodos de alta demanda, aguarde até 24h.</span>
            </li>
          </ul>
        </div>

        <!-- Scope Column -->
        <div>
          <h3 class="text-lg font-bold text-slate-900 mb-4">Escopo do Suporte</h3>
          <div class="bg-slate-50 p-6 border-l-4 border-pink-600">
            <div class="mb-4">
              <p class="text-emerald-700 font-bold text-xs uppercase mb-1">O que atendemos</p>
              <p class="text-slate-600 text-sm">Problemas de login, dúvidas sobre cobrança, report de bugs na plataforma.</p>
            </div>
            <div>
              <p class="text-red-500 font-bold text-xs uppercase mb-1">O que NÃO atendemos</p>
              <p class="text-slate-600 text-sm">
                Este canal não oferece consultoria de inglês, correção de e-mails pessoais, tradução de documentos ou aulas particulares.
              </p>
            </div>
          </div>
        </div>

      </section>

    </div>
  `
})
export class ContactComponent {}
