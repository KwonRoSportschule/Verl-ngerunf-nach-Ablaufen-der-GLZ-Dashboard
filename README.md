# KwonRo Vertragsverlängerungs-Dashboard

Dieses statische Dashboard unterstützt Mitarbeitende bei Telefonaten zur Vertragsverlängerung. Auf einer Seite stehen der vollständige Telefonleitfaden, die Taekwondo-Preise 2026 und direkte Zugänge zu Tracking, MATOOL und Outlook bereit. Die Seite speichert oder überträgt keine Mitgliedsdaten und verwendet weder Analysewerkzeuge noch externe Bibliotheken.

## Dateien

- `index.html` enthält Aufbau, Telefonleitfaden, Preise und Schaltflächen.
- `style.css` enthält Farben, Layout und die Darstellung für Desktop, Tablet und Smartphone.
- `script.js` enthält ausschließlich die Logik zum Öffnen des Outlook-Kalenders.
- `README.md` ist diese Anleitung.

## Über GitHub Pages veröffentlichen

1. Die vier Dateien in die oberste Ebene eines GitHub-Repositorys hochladen.
2. Im Repository **Settings** öffnen.
3. Links **Pages** auswählen.
4. Unter **Build and deployment** bei **Source** „Deploy from a branch“ wählen.
5. Den Branch `main` und den Ordner `/ (root)` auswählen, dann **Save** anklicken.
6. GitHub zeigt nach kurzer Zeit die öffentliche Adresse der Seite an.

Ein Build-Prozess, npm oder eine Serverkonfiguration sind nicht erforderlich.

## Inhalte ändern

Die Dateien können mit einem normalen Texteditor bearbeitet werden.

### Links ändern

Die Links für **Tracking** und **MATOOL** stehen am Ende der Datei `index.html` im Abschnitt mit der Klasse `action-bar`. Nach `href=` kann jeweils die Adresse zwischen den Anführungszeichen ersetzt werden.

Die Outlook-Web-Adresse und das Desktop-Protokoll stehen oben in der Funktion `openOutlookCalendar()` in `script.js`:

```javascript
const desktopCalendarUri = "ms-outlook://calendar";
const webCalendarUrl = "https://outlook.office.com/calendar/";
```

### Preise ändern

Alle Tarife stehen in `index.html` im Abschnitt `pricing-panel`. Dort können Monatsbeiträge, Folgetarife, Laufzeiten und Texte direkt geändert werden.

### Telefonleitfaden ändern

Der Leitfaden steht in `index.html` im Abschnitt `guide-content`. Jeder Gesprächsschritt ist ein eigener Abschnitt mit der Klasse `guide-step`.

## Hinweis zu Outlook

Ein Browser kann aus Sicherheitsgründen nicht zuverlässig erkennen, ob Outlook Classic lokal installiert ist oder tatsächlich geöffnet wurde. Beim Klick versucht das Dashboard zuerst das Windows-/Outlook-Protokoll `ms-outlook://calendar`. Reagiert der Browser beziehungsweise das Betriebssystem erkennbar darauf, bleibt es bei diesem Versuch. Andernfalls öffnet sich nach kurzer Zeit automatisch der Outlook-Kalender im Browser.

Je nach Browser kann beim ersten Versuch eine Rückfrage erscheinen, ob Outlook geöffnet werden darf. Das ist eine Sicherheitsfunktion des Browsers. Wird ein Pop-up-Blocker verwendet, leitet die Seite als letzte Rückfallebene im selben Tab zu Outlook Web weiter.

## Datenschutz und Betrieb

Das Dashboard hat kein Backend, kein Login, kein Tracking und keinen lokalen Speicher. Es bindet keine externen Schriftarten, Skripte oder Bilder ein. Vertrauliche Mitgliedsdaten gehören ausschließlich in die dafür vorgesehenen Systeme MATOOL und Tracking.
