# KwonRo Vertragsverlängerungs-Dashboard

Dieses statische Dashboard unterstützt Mitarbeitende bei Telefonaten zur Vertragsverlängerung. Auf einer Seite stehen der vollständige Telefonleitfaden, die Taekwondo-Preise 2026 und direkte Zugänge zu Tracking und MATOOL bereit. Die Seite speichert oder überträgt keine Mitgliedsdaten und verwendet weder Analysewerkzeuge noch externe Bibliotheken.

## Dateien

- `index.html` enthält Aufbau, Telefonleitfaden, Preise und Schaltflächen.
- `style.css` enthält Farben, Layout und die Darstellung für Desktop, Tablet und Smartphone.
- `script.js` ist für mögliche spätere Funktionen vorbereitet.
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

### Preise ändern

Alle Tarife stehen in `index.html` im Abschnitt `pricing-panel`. Dort können Monatsbeiträge, Folgetarife, Laufzeiten und Texte direkt geändert werden.

### Telefonleitfaden ändern

Der Leitfaden steht in `index.html` im Abschnitt `guide-content`. Jeder Gesprächsschritt ist ein eigener Abschnitt mit der Klasse `guide-step`.

## Datenschutz und Betrieb

Das Dashboard hat kein Backend, kein Login, kein Tracking und keinen lokalen Speicher. Es bindet keine externen Schriftarten, Skripte oder Bilder ein. Vertrauliche Mitgliedsdaten gehören ausschließlich in die dafür vorgesehenen Systeme MATOOL und Tracking.
