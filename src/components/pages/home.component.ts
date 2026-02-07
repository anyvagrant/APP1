
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-16 md:space-y-24 pb-12">
      
      <!-- 1. HERO SECTION -->
      <section class="text-left border-b border-slate-100 pb-12">
        <p class="text-pink-600 font-bold uppercase tracking-widest text-xs mb-4">
          Edição Executiva • Acesso Validado
        </p>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tighter leading-[1.1] mb-6">
          Você não estuda inglês aqui.<br>
          Você aprende a <span class="text-pink-600">usar</span>.
        </h1>
        <p class="text-xl text-slate-600 leading-relaxed max-w-2xl">
          O manual definitivo para profissionais que já falam inglês, mas precisam de 
          estratégia, precisão e confiança no ambiente corporativo global.
        </p>
      </section>

      <!-- 2. PROBLEM CLARIFICATION -->
      <section class="max-w-3xl">
        <h2 class="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
          O Paradoxo da Fluência
        </h2>
        <div class="prose prose-slate text-slate-600 leading-relaxed">
          <p>
            Você lê relatórios complexos. Você assiste filmes sem legenda. 
            Você entende tudo o que é dito na reunião.
          </p>
          <p>
            Mas quando chega a sua vez de falar, algo acontece. 
            O vocabulário some. As frases ficam simples demais. 
            Você sente que soa menos inteligente em inglês do que é em português.
          </p>
          <p class="font-medium text-slate-900 border-l-2 border-pink-600 pl-4 italic">
            O problema não é o seu nível de inglês. O problema é a falta de um repertório estratégico para situações específicas de trabalho.
          </p>
        </div>
      </section>

      <!-- 3. POSITIONING STATEMENT -->
      <section class="bg-slate-50 p-8 md:p-10 border border-slate-100">
        <div class="grid md:grid-cols-2 gap-10">
          <div>
            <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">O que isto NÃO é</h3>
            <ul class="space-y-3 text-slate-600 text-sm">
              <li class="flex items-start">
                <span class="text-red-400 mr-2">✕</span> Um curso tradicional de gramática.
              </li>
              <li class="flex items-start">
                <span class="text-red-400 mr-2">✕</span> Uma coleção de vídeos longos.
              </li>
              <li class="flex items-start">
                <span class="text-red-400 mr-2">✕</span> Uma fórmula mágica de fluência em 30 dias.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-bold text-pink-600 uppercase tracking-widest mb-4">O que isto É</h3>
            <ul class="space-y-3 text-slate-900 font-medium text-sm">
              <li class="flex items-start">
                <span class="text-emerald-600 mr-2">✓</span> Um manual de consulta rápida.
              </li>
              <li class="flex items-start">
                <span class="text-emerald-600 mr-2">✓</span> Uma fonte de templates prontos ("copy-paste").
              </li>
              <li class="flex items-start">
                <span class="text-emerald-600 mr-2">✓</span> Focado 100% em utilidade profissional.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 4. WHAT YOU WILL LEARN -->
      <section>
        <h2 class="text-2xl font-bold text-slate-900 mb-8 tracking-tight">
          O que você vai dominar
        </h2>
        <div class="grid sm:grid-cols-2 gap-8">
          <div class="space-y-2">
            <h4 class="font-bold text-slate-900">Comunicação Escrita</h4>
            <p class="text-sm text-slate-600">
              E-mails diplomáticos, relatórios executivos e mensagens de Slack que geram ação sem soarem rudes.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="font-bold text-slate-900">Reuniões e Calls</h4>
            <p class="text-sm text-slate-600">
              Como interromper educadamente, discordar sem ofender e liderar a pauta (agenda) com autoridade.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="font-bold text-slate-900">Apresentações</h4>
            <p class="text-sm text-slate-600">
              "Signposting" (sinalização), descrição de dados financeiros e gestão de Q&A (Perguntas e Respostas).
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="font-bold text-slate-900">Negociação</h4>
            <p class="text-sm text-slate-600">
              Frases condicionais, linguagem hipotética e técnicas para destravar impasses.
            </p>
          </div>
        </div>
      </section>

      <!-- 5. TARGET AUDIENCE -->
      <section class="border-t border-slate-100 pt-12">
        <div class="grid md:grid-cols-2 gap-12">
          
          <!-- Who is it for -->
          <div>
            <h3 class="text-lg font-bold text-slate-900 mb-4">Para quem é este manual</h3>
            <ul class="space-y-3">
              <li class="flex items-start text-slate-700">
                <span class="inline-block w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Profissionais que trabalham (ou buscam trabalhar) em multinacionais ou remotamente para o exterior.
              </li>
              <li class="flex items-start text-slate-700">
                <span class="inline-block w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Pessoas que já possuem nível Intermediário (B1/B2) ou Avançado.
              </li>
              <li class="flex items-start text-slate-700">
                <span class="inline-block w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Quem valoriza objetividade e não tem tempo a perder.
              </li>
            </ul>
          </div>

          <!-- Who is it NOT for -->
          <div class="opacity-75">
            <h3 class="text-lg font-bold text-slate-500 mb-4">Para quem NÃO é</h3>
            <ul class="space-y-3">
              <li class="flex items-start text-slate-500">
                <span class="inline-block w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Iniciantes absolutos no idioma (A1/A2).
              </li>
              <li class="flex items-start text-slate-500">
                <span class="inline-block w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Quem busca entretenimento ou "gamificação" do aprendizado.
              </li>
              <li class="flex items-start text-slate-500">
                <span class="inline-block w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Quem espera certificação acadêmica (TOEFL/IELTS).
              </li>
            </ul>
          </div>

        </div>
      </section>

      <!-- 6. FINAL CTA -->
      <section class="bg-slate-900 text-white p-10 text-center rounded-sm shadow-xl shadow-slate-200/50">
        <h2 class="text-2xl font-bold mb-4 tracking-tight">Seu acesso está ativo.</h2>
        <p class="text-slate-300 mb-8 max-w-lg mx-auto">
          Use a barra de navegação para explorar os módulos ou comece pelo índice completo.
        </p>
        <a routerLink="/course" class="inline-block bg-white text-slate-900 font-bold py-4 px-8 hover:bg-pink-50 transition-colors uppercase tracking-widest text-sm">
          Acessar o Índice do Manual
        </a>
      </section>

    </div>
  `
})
export class HomeComponent {}
