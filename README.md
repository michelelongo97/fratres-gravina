# ❤️ Fratres Gravina in Puglia – Sito Web Ufficiale

Sito web realizzato per l'associazione **Fratres Gravina in Puglia**, dedicata alla promozione della donazione di sangue e alla sensibilizzazione del volontariato sul territorio.

👉 Demo online: https://fratresgravina.it  
👉 Deploy su: Vercel

---

## 📌 Obiettivo del progetto

Realizzare un sito moderno, responsive e facilmente aggiornabile che permetta di:

- Informare sulla donazione del sangue
- Pubblicare eventi e giornate di raccolta
- Rendere disponibili moduli scaricabili
- Fornire contatti e informazioni utili
- Migliorare la presenza digitale dell'associazione

---

## 🚀 Tecnologie utilizzate

### Frontend

- React (Vite)
- React Router DOM
- Bootstrap 5
- FontAwesome Icons

### Backend / Servizi

- API serverless su Vercel
- Resend (invio email form contatti)

### SEO & Ottimizzazione

- Sitemap XML
- Meta tag Open Graph
- Favicon multi formato
- Ottimizzazione social preview

---

## 📂 Struttura progetto

src/
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ └── ScrollToTop.jsx
│
├── layouts/
│ └── DefaultLayout.jsx
│
├── pages/
│ ├── HomePage.jsx
│ ├── ChiSiamoPage.jsx
│ ├── DonazionePage.jsx
│ ├── EventiPage.jsx
│ ├── EventDetailPage.jsx
│ ├── ModulisticaPage.jsx
│ ├── PrivacyPolicy.jsx
│ ├── CookiePolicy.jsx
│ └── PageNotFound.jsx
│
├── data/
│ └── events.js
│
├── api/
│ └── contact.js

---

## 📅 Gestione eventi

Gli eventi vengono gestiti tramite un file statico:
src/data/events.js

Questo permette di aggiornare rapidamente:

- Data evento
- Luogo
- Orario
- Immagine
- Descrizione

---

## 📄 Modulistica

I moduli PDF sono salvati nella cartella:
public/moduli/

E collegati tramite variabili d’ambiente.

---

## ✉️ Form contatti

Il form utilizza:

- API route serverless
- Servizio Resend per invio email

Endpoint:
/api/contact

---

## 🌍 Variabili ambiente

Creare file `.env` nella root:
VITE_EMAIL=
VITE_EMAIL_PEC=
VITE_PHONE_NUMBER=
VITE_SOCIAL_FACEBOOK=
VITE_SOCIAL_INSTAGRAM=
VITE_WHATSAPP_NUMBER=

VITE_MODULO=
VITE_MODULO_1=
VITE_MODULO_2=

---

## 🛠️ Installazione locale

Clonare il progetto:

```bash
git clone https://github.com/USERNAME/fratres-gravina.git

Installare dipendenze:
npm install
Avviare server sviluppo:
npm run dev

📱 Responsive Design

Il sito è ottimizzato per:
	•	Desktop
	•	Tablet
	•	Mobile
	•	Navigazione accessibile

 🔎 SEO

Il sito include:
	•	Meta description
	•	Open Graph
	•	Twitter Card
	•	Sitemap

⸻

⚖️ Privacy e Cookie

Sono presenti pagine dedicate:
	•	Privacy Policy
	•	Cookie Policy

⸻

🌐 Dominio

Dominio registrato tramite Aruba:
fratresgravina.it

🤝 Collaborazione

Progetto sviluppato come iniziativa di supporto digitale per associazione no-profit.

⸻

👨‍💻 Autore

Sviluppato da:

[Michele Longo]
	•	GitHub: https://github.com/michelelongo97
	•	LinkedIn: https://www.linkedin.com/in/michelelongo97/
	•	Portfolio: https://longomichele.it/

⸻

❤️ Ringraziamenti

Un ringraziamento speciale a tutti i volontari Fratres per il loro impegno quotidiano nella salvaguardia della salute pubblica.
```
