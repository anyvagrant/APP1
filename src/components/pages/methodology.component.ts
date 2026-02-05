
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-methodology',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-4xl mx-auto pb-20">
      
      <!-- 1. OPENING STATEMENT -->
      <header class="mb-16 border-b border-slate-200 pb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter mb-6">
          A Estratégia por Trás do Manual
        </h1>
        <div class="prose prose-slate max-w-none text-slate-600 leading-relaxed">
          <p class="text-xl text-slate-700 font-medium">
            Este não é um curso de inglês convencional. É um sistema de suporte à performance.
          </p>
          <p>
            A maioria dos profissionais falha em inglês no trabalho não por falta de gramática, 
            mas por <strong>hesitação</strong>. O <em>Business English Handbook</em> foi desenhado para eliminar 
            essa hesitação através de acesso rápido a modelos mentais e frases validadas.
          </p>
        </div>
      </header>

      <!-- 2. CORE PRINCIPLES -->
      <section class="mb-20">
        <h2 class="text-2xl font-bold text-slate-900 mb-8 tracking-tight">
          Princípios Fundamentais
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Principle 1 -->
          <div class="bg-slate-50 p-6 border-t-4 border-pink-600">
            <h3 class="font-bold text-slate-900 mb-3">Abordagem Lexical</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Não ensinamos palavras isoladas. O cérebro processa a linguagem em "blocos" (chunks). 
              Você aprenderá frases inteiras prontas para uso, garantindo que a gramática interna esteja sempre correta.
            </p>
          </div>

          <!-- Principle 2 -->
          <div class="bg-slate-50 p-6 border-t-4 border-slate-900">
            <h3 class="font-bold text-slate-900 mb-3">Aprendizado "Just-in-Time"</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Adultos aprendem melhor quando têm um problema imediato para resolver. 
              O manual é estruturado para ser aberto 2 minutos antes de você escrever aquele e-mail difícil.
            </p>
          </div>

          <!-- Principle 3 -->
          <div class="bg-slate-50 p-6 border-t-4 border-slate-900">
            <h3 class="font-bold text-slate-900 mb-3">Princípio de Pareto (80/20)</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Ignoramos exceções e regras obscuras. Focamos nos 20% da linguagem que resolvem 
              80% das situações corporativas reais. Eficiência máxima, ruído zero.
            </p>
          </div>
        </div>
      </section>

      <!-- 3. HOW TO USE -->
      <section class="mb-20">
        <div class="flex items-center mb-8">
          <span class="text-pink-600 font-bold text-sm uppercase tracking-widest mr-4">Instruções de Uso</span>
          <div class="h-px bg-slate-200 flex-grow"></div>
        </div>
        
        <h2 class="text-2xl font-bold text-slate-900 mb-8">Como utilizar este manual</h2>
        
        <div class="space-y-6">
          <article class="flex md:items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold text-lg rounded-sm mr-6">
              1
            </div>
            <div>
              <h3 class="font-bold text-slate-900 text-lg">Identifique o Contexto</h3>
              <p class="text-slate-600">
                Não tente ler o manual capa a capa. Tenha um objetivo claro: "Preciso discordar do meu chefe na reunião de amanhã" ou "Preciso cobrar um cliente atrasado".
              </p>
            </div>
          </article>

          <article class="flex md:items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-white border border-slate-200 text-slate-900 flex items-center justify-center font-bold text-lg rounded-sm mr-6">
              2
            </div>
            <div>
              <h3 class="font-bold text-slate-900 text-lg">Consulte e Adapte</h3>
              <p class="text-slate-600">
                Vá até a seção correspondente. Encontre a frase que melhor se adapta ao tom da conversa. 
                Use a estrutura fornecida e apenas preencha as lacunas com os dados do seu projeto.
              </p>
            </div>
          </article>

          <article class="flex md:items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-white border border-slate-200 text-slate-900 flex items-center justify-center font-bold text-lg rounded-sm mr-6">
              3
            </div>
            <div>
              <h3 class="font-bold text-slate-900 text-lg">Repetição Ativa</h3>
              <p class="text-slate-600">
                A memorização virá do uso real, não de exercícios. Quanto mais vezes você consultar o manual para resolver problemas reais, menos precisará dele no futuro.
              </p>
            </div>
          </article>
        </div>
      </section>

      <!-- 4. WHAT WE AVOID -->
      <section class="bg-slate-50 p-8 md:p-12 border border-slate-200 mb-20">
        <h2 class="text-2xl font-bold text-slate-900 mb-6">O que escolhemos ignorar</h2>
        <p class="text-slate-600 mb-8 max-w-2xl">
          Para respeitar o seu tempo e inteligência, removemos propositalmente elementos comuns em cursos de idiomas, mas ineficazes para executivos:
        </p>
        
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="flex items-center text-slate-700 font-medium">
            <span class="text-red-400 mr-3 text-xl">✕</span> Vídeos longos e passivos
          </li>
          <li class="flex items-center text-slate-700 font-medium">
            <span class="text-red-400 mr-3 text-xl">✕</span> Gamificação infantil (badges, pontuação)
          </li>
          <li class="flex items-center text-slate-700 font-medium">
            <span class="text-red-400 mr-3 text-xl">✕</span> Explicações gramaticais acadêmicas
          </li>
          <li class="flex items-center text-slate-700 font-medium">
            <span class="text-red-400 mr-3 text-xl">✕</span> Exercícios de preencher lacunas sem contexto
          </li>
        </ul>
      </section>

      <!-- 5. EXPECTED RESULTS -->
      <section class="text-center max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold text-slate-900 mb-6">Resultados Esperados</h2>
        <p class="text-slate-600 leading-relaxed mb-8">
          Ao utilizar este manual consistentemente, você não se tornará um falante nativo. 
          Esse não é o objetivo. O objetivo é a <span class="text-pink-600 font-bold">Competência Operacional</span>.
        </p>
        <p class="text-slate-600 leading-relaxed">
          Você desenvolverá a capacidade de entrar em reuniões, escrever e-mails e negociar contratos 
          sem a ansiedade paralisante de "não saber como dizer". Você terá as ferramentas para fazer o seu trabalho, em inglês.
        </p>
      </section>

    </div>
  `
})
export class MethodologyComponent {}
