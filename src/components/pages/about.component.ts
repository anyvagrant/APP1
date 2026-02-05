
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-4xl mx-auto pb-20">
      
      <!-- 1. HEADER: THE PURPOSE -->
      <header class="mb-16 border-b border-slate-200 pb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter mb-6">
          Por que criamos este manual
        </h1>
        <div class="prose prose-slate max-w-none text-slate-600 leading-relaxed">
          <p class="text-xl text-slate-700 font-medium">
            O mercado de ensino de idiomas é vasto, mas falha em um ponto crucial: a realidade executiva.
          </p>
          <p>
            Existem milhares de aplicativos para iniciantes aprenderem cores e números. 
            Existem centenas de cursos de gramática avançada. 
            Mas existe um vácuo imenso de materiais que ensinam o profissional sênior a <strong>operar</strong> no idioma.
          </p>
          <p>
            O <em>Business English Handbook</em> foi criado para preencher esse vácuo. 
            Não fomos feitos para quem quer "aprender inglês". Fomos feitos para quem precisa 
            entregar resultados em inglês.
          </p>
        </div>
      </header>

      <!-- 2. PHILOSOPHY -->
      <section class="mb-20">
        <h2 class="text-2xl font-bold text-slate-900 mb-8 tracking-tight">
          Nossa Filosofia
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <article class="border border-slate-200 p-8 hover:border-pink-600 transition-colors duration-300">
            <h3 class="text-lg font-bold text-slate-900 mb-3">Respeito ao Tempo</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Nossos usuários são executivos, gerentes e especialistas. Seu tempo é escasso. 
              Por isso, eliminamos vídeos de introdução, histórias motivacionais e exercícios de preenchimento. 
              Entregamos apenas a informação acionável.
            </p>
          </article>

          <article class="border border-slate-200 p-8 hover:border-pink-600 transition-colors duration-300">
            <h3 class="text-lg font-bold text-slate-900 mb-3">Ferramenta, não Identidade</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Não acreditamos que você precise "soar como um nativo" para ter sucesso. 
              Acreditamos em clareza, diplomacia e eficácia. O inglês é apenas a ferramenta que carrega a sua expertise.
            </p>
          </article>

          <article class="border border-slate-200 p-8 hover:border-pink-600 transition-colors duration-300">
            <h3 class="text-lg font-bold text-slate-900 mb-3">Inteligência Adulta</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Tratamos nosso usuário como o adulto inteligente que ele é. 
              Não usamos gamificação, mascotes ou "streaks" (dias seguidos). 
              A motivação para usar este manual vem da sua necessidade profissional, não de truques psicológicos.
            </p>
          </article>

          <article class="border border-slate-200 p-8 hover:border-pink-600 transition-colors duration-300">
            <h3 class="text-lg font-bold text-slate-900 mb-3">Autonomia</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Não queremos que você dependa deste manual para sempre. 
              O objetivo é que, através da consulta repetida em situações reais, os padrões de linguagem se tornem automáticos para você.
            </p>
          </article>
        </div>
      </section>

      <!-- 3. WHO IS BEHIND THIS -->
      <section class="mb-20 bg-slate-50 p-10 border-l-4 border-slate-900">
        <h2 class="text-xl font-bold text-slate-900 mb-4">
          Sobre a Curadoria Editorial
        </h2>
        <p class="text-slate-600 leading-relaxed mb-4">
          Este material não é fruto de um único "guru" de internet. 
          É o resultado compilado de anos de consultoria corporativa em multinacionais.
        </p>
        <p class="text-slate-600 leading-relaxed">
          O conteúdo foi desenvolvido por instrutores especializados em <em>English for Specific Purposes (ESP)</em>, 
          que acompanharam negociações reais, revisaram milhares de e-mails corporativos e prepararam executivos 
          para apresentações internacionais. O que você vê aqui é o filtro do que realmente funciona no "campo de batalha" corporativo.
        </p>
      </section>

      <!-- 4. POSITIONING / MANIFESTO -->
      <section class="bg-slate-900 text-slate-300 p-12 text-center rounded-sm">
        <h2 class="text-white text-2xl font-bold mb-6 tracking-tight">
          Onde nos posicionamos
        </h2>
        <div class="max-w-2xl mx-auto space-y-4 text-sm md:text-base font-light">
          <p>
            Somos contra a promessa de "fluência em 3 meses".<br>
            Somos contra a ideia de que você precisa perder seu sotaque brasileiro.<br>
            Somos contra cursos que exigem horas do seu dia.
          </p>
          <div class="h-px bg-slate-700 w-16 mx-auto my-6"></div>
          <p class="font-medium text-white text-lg">
            Somos a favor da competência, da precisão e da sua carreira.
          </p>
        </div>
      </section>

    </div>
  `
})
export class AboutComponent {}
