# 🧪 Automação de Testes com Cypress - SauceDemo

## 📌 Sobre o projeto

Este projeto tem como objetivo praticar e demonstrar automação de testes end-to-end utilizando Cypress, simulando cenários reais de validação de uma aplicação web.

A aplicação utilizada foi o site público SauceDemo, que simula um fluxo de e-commerce.

---

## 🎯 Objetivo

- Validar fluxos principais da aplicação
- Automatizar cenários críticos
- Garantir qualidade nas funcionalidades essenciais
- Praticar boas práticas de automação de testes
- Construir um projeto de portfólio voltado para atuação como QA

---

## 🌐 Aplicação testada

https://www.saucedemo.com/

---

## 🛠️ Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub

---

## ✅ Cenários automatizados

### 🔐 Login

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT-LOGIN-001 | Login com credenciais válidas | Usuário deve acessar a página de produtos |
| CT-LOGIN-002 | Login com credenciais inválidas | Sistema deve exibir mensagem de erro |
| CT-LOGIN-003 | Login sem informar usuário | Sistema deve exibir erro de usuário obrigatório |
| CT-LOGIN-004 | Login sem informar senha | Sistema deve exibir erro de senha obrigatória |
| CT-LOGIN-005 | Login com usuário bloqueado | Sistema deve exibir mensagem de erro |

---

### 🛒 Carrinho

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT-CART-001 | Adicionar produto ao carrinho | Badge do carrinho deve exibir 1 item |
| CT-CART-002 | Validar produto no carrinho | Produto deve ser exibido no carrinho |
| CT-CART-003 | Remover produto do carrinho | Badge do carrinho não deve ser exibido |

---

### 💳 Checkout

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT-CHECKOUT-001 | Finalizar checkout com sucesso | Sistema deve exibir mensagem de pedido concluído |
| CT-CHECKOUT-002 | Continuar checkout sem nome | Sistema deve exibir erro de nome obrigatório |
| CT-CHECKOUT-003 | Continuar checkout sem sobrenome | Sistema deve exibir erro de sobrenome obrigatório |
| CT-CHECKOUT-004 | Continuar checkout sem CEP | Sistema deve exibir erro de CEP obrigatório |

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/IzaBalizardo/qa-automation-cypress-saucedemo.git
```

### 2. Acessar a pasta do projeto

```bash
cd qa-automation-cypress-saucedemo
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Abrir o Cypress em modo interativo

```bash
npx cypress open
```

### 5. Executar os testes em modo headless

```bash
npx cypress run
```