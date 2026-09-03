const header = document.querySelector("[data-header]");

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px" },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

const activateTab = (tab) => {
  tabs.forEach((candidate) => {
    const isActive = candidate === tab;
    candidate.setAttribute("aria-selected", String(isActive));
    candidate.tabIndex = isActive ? 0 : -1;
  });

  panels.forEach((panel) => {
    panel.hidden = panel.id !== tab.getAttribute("aria-controls");
  });
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    activateTab(tabs[nextIndex]);
    tabs[nextIndex].focus();
  });
});

document.querySelectorAll("[data-open-tab]").forEach((link) => {
  link.addEventListener("click", () => {
    const targetTab = document.getElementById(link.getAttribute("data-open-tab"));
    if (targetTab) activateTab(targetTab);
  });
});

const copyButton = document.querySelector("[data-copy-bib]");
const copyStatus = document.querySelector("[data-copy-status]");
const bibtex = document.querySelector("#bibtex");

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(bibtex?.textContent ?? "");
    copyButton.textContent = "Copied";
    copyStatus.textContent = "BibTeX copied to clipboard.";
  } catch {
    copyStatus.textContent = "Select the citation text and copy it manually.";
  }

  window.setTimeout(() => {
    copyButton.textContent = "Copy";
    copyStatus.textContent = "";
  }, 2200);
});
