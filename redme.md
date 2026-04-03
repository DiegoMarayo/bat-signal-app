# 🦇 Bat Signal App (React Native)

Aplicativo mobile desenvolvido com **React Native** como parte do aprendizado em desenvolvimento mobile.

O app simula um “Bat Signal”, onde o usuário pode preencher um formulário para enviar um chamado.

---


## 📱 Preview

* Tela inicial com logo do Batman
* Botão para ativar o formulário
* Formulário com validação de campos
* Alertas de sucesso/erro

---

## 🚀 Tecnologias utilizadas

* React Native
* TypeScript
* Expo
* Hooks (`useState`)
* Componentização

---

## 📂 Estrutura do Projeto

```
src/
 ├── components/
 │   ├── Button/
 │   ├── Input/
 │   └── Logo/
 │
 ├── screens/
 │   └── Home/
 │       ├── Home.tsx
 │       └── Formulario/
 │
 ├── styles/
 │   └── colors.ts
```

---

## 🧠 Funcionalidades

* 🔁 Navegação simples entre telas (sem biblioteca externa)
* 📋 Formulário com validação
* 🚨 Alertas com feedback ao usuário
* 🎨 Estilização com tema dark (inspirado no Batman)
* ♻️ Componentes reutilizáveis (Input, Button, Logo)

---

## ✅ Validação do Formulário

O envio só acontece se todos os campos estiverem preenchidos:

* Nome
* Telefone
* Localização
* Observações

Caso contrário:

```
Erro: Preencha todos os campos!
```

---

## 🎨 Design

O app utiliza uma paleta inspirada no tema do Batman:

* Fundo escuro (#1c1c1c)
* Destaque em amarelo (#FFD700)
* Inputs com borda suave
* Texto claro para contraste

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/DiegoMarayo/bat-signal-app.git
```

---

### 2. Instalar dependências

```bash
npm install
```

---

### 3. Rodar o projeto

```bash
npx expo start
```

---

### 4. Executar no celular

* Instale o app **Expo Go**
* Escaneie o QR Code

---

## 📌 Observações

* Projeto desenvolvido com foco educacional
* Não utiliza navegação avançada (React Navigation) propositalmente
* Estrutura pensada para aprendizado de base

---

## 🚀 Próximos passos (melhorias futuras)

* [ ] Navegação com React Navigation
* [ ] Validação visual dos inputs
* [ ] Feedback de loading no botão
* [ ] Melhorias de UI/UX
* [ ] Integração com API

---

## 👨‍💻 Autor

Desenvolvido por Diego 🚀

---

## ⭐ Se gostou

Deixa uma estrela no repositório 👍
