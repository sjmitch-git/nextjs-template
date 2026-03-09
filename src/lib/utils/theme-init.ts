export const themeInitScript = `
  (async () => {
    try {
      const req = indexedDB.open("app-theme", 1);
      req.onupgradeneeded = () => req.result.createObjectStore("settings");

      const db = await new Promise((res, rej) => {
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej();
      });

      const saved = await new Promise((resolve) => {
        const get = db.transaction("settings").objectStore("settings").get("theme");
        get.onsuccess = () => resolve(get.result);
      });

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const useDark = saved === "dark" || (!saved && prefersDark);

      if (useDark) {
        document.body.classList.add("dark");
      }
    } catch {
      // Fallback: system preference only
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
      }
    }
  })();
`
