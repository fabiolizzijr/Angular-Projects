#  🅰️ Projeto 02: Issue Tracker (Angular + Clarity)

Baseado no livro: Angular Projects (Third Edition)

Este projeto foi desenvolvido como parte do meu estudo do livro  
*Angular Projects – Third Edition* de Aristeidis Bampakos (Packt Publishing).  
O objetivo é compreender profundamente o uso de Angular em aplicações reais,  
refatorando e aprimorando o código com base nas boas práticas aprendidas e
excelência UI e UX.

> ❗ Código original sob licença MIT disponível em:  
> https://github.com/PacktPublishing/Angular-Projects-Third-Edition
---

Usarei **Angular (standalone, versão moderna)**, utilizando o **Clarity Design System** para um visual limpo e responsivo.  
Foco em **design moderno, arquitetura modular** e **responsividade** (mobile-first).

---

## 🎯 Objetivo

Criar uma aplicação de **gerenciamento de problemas (issue tracker)** que permita:
- Listar, criar e remover *issues*;
- Exibir informações como tipo, prioridade, título e descrição;
- Aplicar boas práticas de arquitetura Angular (Core / Shared / Features);
- Evoluir com novas *features* (busca, filtros, status, etc);

---

## 🧱 Estrutura inicial
src/
├── app/
│ ├── core/
│ │ ├── services/
│ │ │ └── issues.service.ts
│ │ └── models/
│ │ └── issue.interface.ts
│ ├── features/
│ │ ├── issue-list/
│ │ ├── issue-report/
│ │ └── confirm-dialog/
│ ├── shared/
│ │ ├── footer/
│ │ ├── header/
│ │ ├── menus/
│ │ └── breadcrumb/
│ └── pages/
│ └── issue-dashboard/
├── assets/

---

## 🚀 Tecnologias

- [Angular 18+ (Standalone Components)](https://angular.dev/)
- [Clarity Design System](https://clarity.design/)
- TypeScript • RxJS • SCSS
- Responsividade (Mobile / Desktop)

---

## 📆 Cronograma (Sprints)

| Semana | Entrega | Descrição |
|--------|----------|-----------|
| 1 | Setup & Layout base | Estrutura inicial, header, menu, footer e dashboard | :white_check_mark:
| 2 | Serviço e interface | Mock service, interface Issue |
| 3 | Issue List | Listagem de issues no dashboard |
| 4 | Issue Report | Formulário de criação |
| 5 | Confirm Dialog | Exclusão e refinamentos |
| 6 | Responsividade & Deploy | Ajustes visuais e publicação no GitHub Pages |

---

## 📸 Layout inicial

Wireframe criado no estilo mobile-first (360x640) no drawio.com:



---

## 📸 Demonstração
(adicionarei uma screenshot aqui posteriormente).
---

## ⚙️ Como executar

```bash
git clone https://github.com/fabiolizzijr/angular-projects/02-Issue-tracker.git
cd angular-projects/02-Issue-tracker
npm install
ng serve
Acesse em http://localhost:4200/
---

## 🚩 Créditos
Projeto original do livro *Angular Projects – Third Edition* de Aristeidis Bampakos (Packt Publishing).  
Com propósitos educacionais e Licença MIT.
Modificado por @fabiolizzijr.
Wireframe original desenvolvido no drawio.
Logo desenvolvido usando como base no design "Black & White Minimalist Business Logo" criado por: https://www.canva.com/p/powerofvictory/