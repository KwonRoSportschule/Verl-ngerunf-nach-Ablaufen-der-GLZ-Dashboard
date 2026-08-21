"use strict";

/**
 * Versucht, den lokalen Outlook-Kalender zu öffnen. Falls der Browser keinen
 * Protokoll-Handler erkennt, wird nach kurzer Zeit Outlook Web geöffnet.
 * Die Funktion ist bewusst gekapselt, damit das Protokoll später leicht
 * ausgetauscht werden kann.
 */
function openOutlookCalendar() {
  const desktopCalendarUri = "ms-outlook://calendar";
  const webCalendarUrl = "https://outlook.office.com/calendar/";
  let applicationLikelyOpened = false;

  const markAsOpened = () => {
    applicationLikelyOpened = true;
  };

  window.addEventListener("blur", markAsOpened, { once: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      markAsOpened();
    }
  }, { once: true });

  try {
    const protocolLink = document.createElement("a");
    protocolLink.href = desktopCalendarUri;
    protocolLink.setAttribute("aria-hidden", "true");
    protocolLink.style.display = "none";
    document.body.appendChild(protocolLink);
    protocolLink.click();
    protocolLink.remove();
  } catch (_error) {
    // Browserfehler werden absichtlich nicht an die Nutzerin weitergegeben.
  }

  window.setTimeout(() => {
    if (!applicationLikelyOpened) {
      const fallbackWindow = window.open(webCalendarUrl, "_blank", "noopener,noreferrer");
      if (!fallbackWindow) {
        window.location.assign(webCalendarUrl);
      }
    }
  }, 1400);
}

const outlookButton = document.getElementById("outlook-button");

if (outlookButton) {
  outlookButton.addEventListener("click", openOutlookCalendar);
}
