
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function setupMobileMenu() {
  const button = $(".mobile-menu");
  const sidebar = $(".sidebar");
  if (!button || !sidebar) return;

  button.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

function setupTabs() {
  $$(".tab[data-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const group = tab.closest("[data-tabs]");
      if (!group) return;

      $$(".tab", group).forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.tab;
      $$("[data-tab-panel]", group).forEach((panel) => {
        panel.hidden = panel.dataset.tabPanel !== target;
      });
    });
  });
}

function setupPasswordToggle() {
  $$("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.passwordToggle);
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
      button.textContent = input.type === "password" ? "Show" : "Hide";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupTabs();
  setupPasswordToggle();
});
