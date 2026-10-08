# KwonRo Vertragsverlängerungs-Dashboard

Dieses statische Dashboard unterstützt Mitarbeitende bei Telefonaten zur Vertragsverlängerung. Auf einer Seite stehen der Telefonleitfaden (inklusive Einwandbehandlung), die Preise ab 01.11.2026 für Taekwondo, Kickboxen & Boxen und Functional Fitness sowie direkte Zugänge zu Tracking, MATOOL und dem Outlook-Kalender. Die Seite speichert oder überträgt keine Mitgliedsdaten und verwendet weder Analysewerkzeuge noch externe Bibliotheken.

## Dateien

- `index.html` enthält Aufbau, Telefonleitfaden und Schaltflächen.
- `style.css` enthält Farben (KwonRo-CI), Layout und die Darstellung für Desktop, Tablet und Smartphone.
- `script.js` enthält **alle Preise** und die Funktionen: Sportart wechseln, Preiskarte anklicken → fertiger Satz zum Vorlesen, Schritt-Navigation im Leitfaden.
- `preislisten/` enthält die Original-Preislisten als PDF. Sie lassen sich über die PDF-Buttons im Dashboard öffnen.
- `README.md` ist diese Anleitung.

## Über GitHub Pages veröffentlichen

1. Im Repository **Settings** öffnen.
2. Links **Pages** auswählen.
3. Unter **Build and deployment** bei **Source** „Deploy from a branch“ wählen.
4. Den Branch `main` und den Ordner `/ (root)` auswählen, dann **Save** anklicken.
5. GitHub zeigt nach kurzer Zeit die öffentliche Adresse der Seite an.

Ein Build-Prozess, npm oder eine Serverkonfiguration sind nicht erforderlich.

## Inhalte ändern

Die Dateien können mit einem normalen Texteditor bearbeitet werden.

### Preise ändern

Alle Preise stehen ganz oben in `script.js` im Objekt `SPORTS`. Pro Tarif gibt es:

- `flex`: Flex-Preis (monatlich kündbar)
- `offers`: Laufzeit-Angebote mit `months` (Laufzeit), `price` (Monatsbeitrag), `after` (Beitrag nach Ablauf laut Preisliste) und `discount` (Rabatt-Text)

Die Ersparnis („spart … €“) und der Satz zum Vorlesen werden automatisch berechnet. Bei einer neuen Preisliste auch die PDFs im Ordner `preislisten/` austauschen und die Links in `index.html` (Abschnitt `pdf-links`) anpassen.

### Links ändern

Die Links für **Tracking**, **MATOOL** und **Outlook** stehen am Ende der Datei `index.html` im Abschnitt mit der Klasse `action-bar`.

### Telefonleitfaden ändern

Der Leitfaden steht in `index.html` im Abschnitt `guide-content`. Jeder Gesprächsschritt ist ein eigener Abschnitt mit der Klasse `guide-step`. Sätze zum Vorlesen haben die Klasse `say`, Platzhalter wie `[Name]` die Klasse `ph`. Die Einwände stehen im Abschnitt `objections`.

## Datenschutz und Betrieb

Das Dashboard hat kein Backend, kein Login, kein Tracking und keinen lokalen Speicher. Es bindet keine externen Schriftarten, Skripte oder Bilder ein. Vertrauliche Mitgliedsdaten gehören ausschließlich in die dafür vorgesehenen Systeme MATOOL und Tracking.
