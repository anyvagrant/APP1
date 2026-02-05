
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ViewportScroller } from '@angular/common'; 

@Component({
  selector: 'app-course',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-4xl mx-auto pb-24">
      
      <!-- HEADER & INTRO -->
      <header class="mb-16 border-b border-slate-200 pb-10">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-6">
          Manual de Inglês Corporativo
        </h1>
        <div class="prose prose-slate max-w-none text-slate-600">
          <p class="lead text-xl text-slate-700">
            Este não é um curso para ser memorizado. É uma ferramenta para ser consultada.
          </p>
          <p>
            Abaixo você encontrará as estruturas fundamentais para operar profissionalmente em inglês.
            Não se preocupe com regras gramaticais obscuras. Foque na <strong>funcionalidade</strong>.
            Quando estiver escrevendo um e-mail ou se preparando para uma call, abra este manual na seção correspondente e use os modelos.
          </p>
        </div>

        <!-- TABLE OF CONTENTS -->
        <nav class="mt-10 bg-slate-50 p-6 rounded-sm border border-slate-200">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Índice Rápido</p>
          <div class="grid md:grid-cols-2 gap-4 text-sm font-medium text-slate-900">
            <!-- 
               FIX APPLIED: 
               Replaced href="#id" with (click)="scrollTo('id')" 
               Added 'cursor-pointer' to ensure it looks clickable
            -->
            <a (click)="scrollTo('section-1')" class="cursor-pointer hover:text-pink-600 flex items-center transition-colors">
              <span class="w-6 text-slate-400">01</span> Comunicação Essencial
            </a>
            <a (click)="scrollTo('section-2')" class="cursor-pointer hover:text-pink-600 flex items-center transition-colors">
              <span class="w-6 text-slate-400">02</span> Reuniões e Calls
            </a>
            <a (click)="scrollTo('section-3')" class="cursor-pointer hover:text-pink-600 flex items-center transition-colors">
              <span class="w-6 text-slate-400">03</span> Escrita Corporativa
            </a>
            <a (click)="scrollTo('section-4')" class="cursor-pointer hover:text-pink-600 flex items-center transition-colors">
              <span class="w-6 text-slate-400">04</span> Apresentações
            </a>
            <a (click)="scrollTo('section-5')" class="cursor-pointer hover:text-pink-600 flex items-center transition-colors">
              <span class="w-6 text-slate-400">05</span> Negociação
            </a>
          </div>
        </nav>
      </header>

      <!-- SECTION 1 -->
      <section id="section-1" class="mb-20 scroll-mt-24">
        <div class="flex items-center mb-8">
          <span class="text-pink-600 font-bold text-sm uppercase tracking-widest mr-4">Módulo 01</span>
          <div class="h-px bg-slate-200 flex-grow"></div>
        </div>
        <h2 class="text-3xl font-bold text-slate-900 mb-8">Comunicação Profissional Essencial</h2>

        <!-- Lesson 1.1 -->
        <article class="mb-12">
          <h3 class="text-xl font-bold text-slate-800 mb-3">1.1 Contextualizando Conversas</h3>
          <p class="text-slate-600 mb-4">
            Em inglês profissional, a clareza é rei. Nunca assuma que a outra pessoa sabe por que você está ligando ou enviando mensagem. Defina o contexto imediatamente.
          </p>
          
          <div class="bg-slate-50 border-l-4 border-pink-600 p-6 my-6">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frases Funcionais</h4>
            <ul class="space-y-2 font-mono text-sm text-slate-700">
              <li>"The reason I'm calling is to discuss..."</li>
              <li>"I'm reaching out regarding..."</li>
              <li>"Just a quick note to update you on..."</li>
            </ul>
          </div>

          <div class="bg-white border border-slate-200 p-6">
            <p class="text-xs font-bold text-slate-900 mb-2">Exemplo Prático</p>
            <p class="text-slate-600 italic">
              "Hi John, <strong class="text-slate-900 not-italic">I'm reaching out regarding</strong> the Q3 budget report we discussed last week."
            </p>
          </div>
        </article>

        <!-- Lesson 1.2 -->
        <article class="mb-12">
          <h3 class="text-xl font-bold text-slate-800 mb-3">1.2 Clareza e Objetividade</h3>
          <p class="text-slate-600 mb-4">
            Evite floreios. Em culturas de língua inglesa (especialmente EUA/UK), tempo é dinheiro. Vá direto ao ponto (Get to the point).
          </p>
          
          <div class="bg-slate-50 border-l-4 border-pink-600 p-6 my-6">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frases Funcionais</h4>
            <ul class="space-y-2 font-mono text-sm text-slate-700">
              <li>"In a nutshell, we need to..." (Em resumo)</li>
              <li>" The bottom line is..." (O ponto principal é)</li>
              <li>"Let's stick to the facts."</li>
            </ul>
          </div>
        </article>
      </section>

      <!-- SECTION 2 -->
      <section id="section-2" class="mb-20 scroll-mt-24">
        <div class="flex items-center mb-8">
          <span class="text-pink-600 font-bold text-sm uppercase tracking-widest mr-4">Módulo 02</span>
          <div class="h-px bg-slate-200 flex-grow"></div>
        </div>
        <h2 class="text-3xl font-bold text-slate-900 mb-8">Reuniões e Calls</h2>

        <!-- Lesson 2.1 -->
        <article class="mb-12">
          <h3 class="text-xl font-bold text-slate-800 mb-3">2.1 Abrindo a Reunião</h3>
          <p class="text-slate-600 mb-4">
            Assuma o controle. Uma abertura forte define o tom profissional. Estabeleça a agenda e o tempo limite.
          </p>
          
          <div class="bg-slate-50 border-l-4 border-pink-600 p-6 my-6">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frases Funcionais</h4>
            <ul class="space-y-2 font-mono text-sm text-slate-700">
              <li>"Let's get started, shall we?"</li>
              <li>"The main goal of this meeting is to..."</li>
              <li>"We have a lot to cover, so let's jump right in."</li>
            </ul>
          </div>
        </article>

        <!-- Lesson 2.2 -->
        <article class="mb-12">
          <h3 class="text-xl font-bold text-slate-800 mb-3">2.2 Interrompendo Educadamente</h3>
          <p class="text-slate-600 mb-4">
            Interromper é necessário, mas rude se feito errado. Use "softeners" (suavizadores) para entrar na conversa sem ofender.
          </p>
          
          <div class="bg-slate-50 border-l-4 border-pink-600 p-6 my-6">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frases Funcionais</h4>
            <ul class="space-y-2 font-mono text-sm text-slate-700">
              <li>"Can I just come in here for a second?"</li>
              <li>"Sorry to interrupt, but..."</li>
              <li>"May I add something to that point?"</li>
            </ul>
          </div>
        </article>

        <!-- Lesson 2.3 -->
        <article class="mb-12">
          <h3 class="text-xl font-bold text-slate-800 mb-3">2.3 Discordando (Técnica "Yes, but")</h3>
          <p class="text-slate-600 mb-4">
            Nunca diga apenas "No" ou "You are wrong". Valide o ponto da pessoa antes de discordar.
          </p>
          
          <div class="bg-slate-50 border-l-4 border-pink-600 p-6 my-6">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frases Funcionais</h4>
            <ul class="space-y-2 font-mono text-sm text-slate-700">
              <li>"I see your point, but I think..."</li>
              <li>"That's a valid concern, however..."</li>
              <li>"I'm afraid I have a slightly different view."</li>
            </ul>
          </div>
          
          <div class="p-4 bg-slate-900 text-slate-300 text-sm italic">
            <strong>Nota do Editor:</strong> "I'm afraid" não significa medo. É uma forma polida de dizer "Sinto muito, mas não posso concordar/fazer isso".
          </div>
        </article>
      </section>

      <!-- SECTION 3 -->
      <section id="section-3" class="mb-20 scroll-mt-24">
        <div class="flex items-center mb-8">
          <span class="text-pink-600 font-bold text-sm uppercase tracking-widest mr-4">Módulo 03</span>
          <div class="h-px bg-slate-200 flex-grow"></div>
        </div>
        <h2 class="text-3xl font-bold text-slate-900 mb-8">Comunicação Escrita</h2>

        <!-- Lesson 3.1 -->
        <article class="mb-12">
          <h3 class="text-xl font-bold text-slate-800 mb-3">3.1 Estrutura de E-mail de Alta Performance</h3>
          <p class="text-slate-600 mb-4">
            E-mails longos não são lidos. Use a estrutura: <strong>Saudação > Motivo > Ação Necessária > Fechamento</strong>.
          </p>
          
          <div class="bg-slate-50 border-l-4 border-pink-600 p-6 my-6">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frases Funcionais</h4>
            <ul class="space-y-2 font-mono text-sm text-slate-700">
              <li>"I'm writing to enquire about..." (Motivo)</li>
              <li>"Could you please clarify..." (Ação/Pedido)</li>
              <li>"Please let me know by EOD." (Prazo)</li>
            </ul>
          </div>
        </article>

        <!-- Lesson 3.2 -->
        <article class="mb-12">
          <h3 class="text-xl font-bold text-slate-800 mb-3">3.2 "Call to Action" (Chamada para Ação)</h3>
          <p class="text-slate-600 mb-4">
            Seja específico sobre o que você quer que a pessoa faça. Ambiguidade gera inércia.
          </p>
          
          <div class="bg-white border border-slate-200 p-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <p class="text-red-500 font-bold text-xs uppercase mb-2">Evite (Fraco)</p>
                <p class="text-slate-500 italic text-sm">"Let me know what you think."</p>
              </div>
              <div>
                <p class="text-emerald-600 font-bold text-xs uppercase mb-2">Use (Forte)</p>
                <p class="text-slate-900 font-medium text-sm">"Please approve the attached draft by Friday."</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <!-- SECTION 4 -->
      <section id="section-4" class="mb-20 scroll-mt-24">
        <div class="flex items-center mb-8">
          <span class="text-pink-600 font-bold text-sm uppercase tracking-widest mr-4">Módulo 04</span>
          <div class="h-px bg-slate-200 flex-grow"></div>
        </div>
        <h2 class="text-3xl font-bold text-slate-900 mb-8">Apresentações</h2>

        <article class="mb-12">
          <h3 class="text-xl font-bold text-slate-800 mb-3">4.1 Signposting (Sinalização)</h3>
          <p class="text-slate-600 mb-4">
            Guie sua audiência. Diga onde você está e para onde vai. Isso evita que as pessoas se percam no meio da apresentação.
          </p>
          
          <div class="bg-slate-50 border-l-4 border-pink-600 p-6 my-6">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frases Funcionais</h4>
            <ul class="space-y-2 font-mono text-sm text-slate-700">
              <li>"First of all, I'll give you an overview..."</li>
              <li>"Moving on to the next slide..."</li>
              <li>"To wrap up, I'd like to summarize..."</li>
            </ul>
          </div>
        </article>

        <article class="mb-12">
          <h3 class="text-xl font-bold text-slate-800 mb-3">4.2 Explicando Dados</h3>
          <p class="text-slate-600 mb-4">
            Não apenas leia o slide. Interprete o que os números significam para o negócio.
          </p>
          
          <div class="bg-slate-50 border-l-4 border-pink-600 p-6 my-6">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frases Funcionais</h4>
            <ul class="space-y-2 font-mono text-sm text-slate-700">
              <li>"As you can see from the graph..."</li>
              <li>"These numbers indicate a significant trend..."</li>
              <li>"This increase is due to..."</li>
            </ul>
          </div>
        </article>
      </section>

      <!-- SECTION 5 -->
      <section id="section-5" class="mb-20 scroll-mt-24">
        <div class="flex items-center mb-8">
          <span class="text-pink-600 font-bold text-sm uppercase tracking-widest mr-4">Módulo 05</span>
          <div class="h-px bg-slate-200 flex-grow"></div>
        </div>
        <h2 class="text-3xl font-bold text-slate-900 mb-8">Negociação e Fechamento</h2>

        <article class="mb-12">
          <h3 class="text-xl font-bold text-slate-800 mb-3">5.1 Fazendo Propostas (Condicionais)</h3>
          <p class="text-slate-600 mb-4">
            O segredo da negociação é o "Se... então". Use condicionais para trocar concessões.
          </p>
          
          <div class="bg-slate-50 border-l-4 border-pink-600 p-6 my-6">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frases Funcionais</h4>
            <ul class="space-y-2 font-mono text-sm text-slate-700">
              <li>"If you commit to a 2-year contract, we can offer a 10% discount."</li>
              <li>"We might be able to adjust the price, provided that..."</li>
            </ul>
          </div>
        </article>

        <article class="mb-12">
          <h3 class="text-xl font-bold text-slate-800 mb-3">5.2 Fechamento e Próximos Passos</h3>
          <p class="text-slate-600 mb-4">
            Não saia da mesa sem definir o que acontece a seguir. Clareza evita mal-entendidos futuros.
          </p>
          
          <div class="bg-slate-50 border-l-4 border-pink-600 p-6 my-6">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frases Funcionais</h4>
            <ul class="space-y-2 font-mono text-sm text-slate-700">
              <li>"I think we have a deal."</li>
              <li>"Let's outline the next steps."</li>
              <li>"I'll have my team draw up the contract."</li>
            </ul>
          </div>
        </article>
      </section>

    </div>
  `
})
export class CourseComponent {
  // Method to handle smooth scrolling without triggering Angular Router
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
