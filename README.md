# 📱 Desafio de Automação Mobile - Banco Carrefour

## 🚀 Tecnologias

- Appium v2
- WebdriverIO
- Mocha
- Chai
- Allure Reports

---

## ⚙️ Pré-requisitos

- Android Emulator (ex: `emulator-5554`)
- Appium instalado globalmente (`npm install -g appium`)
- APK localizado em `/app/android/android.wdio.native.app.v1.0.8.apk`

---

## ▶️ Executar os testes

````bash
npm install
npm run test


## 📊 Relatórios Allure

Para gerar e visualizar os relatórios:

```bash
npm run allure:generate
npm run allure:open

📂 Estrutura

test/specs/: testes automatizados

test/pageobjects/: Page Objects

app/: APK
````
