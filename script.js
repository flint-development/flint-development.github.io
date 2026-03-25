const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";

  // Nur für die aktuelle Sitzung speichern
  sessionStorage.setItem("theme", isDark ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = sessionStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    toggle.textContent = "🌙";
  }

  // Login/Registrierung nur falls vorhanden
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const showRegister = document.getElementById("show-register");
  const showLogin = document.getElementById("show-login");

  if (showRegister && showLogin && loginForm && registerForm) {
    showRegister.addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("hidden");
      registerForm.classList.remove("hidden");
    });

    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      registerForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    });
  }
});

//Cockies
function acceptCookies() {
  const statistik = document.getElementById("statistik").checked;
  const marketing = document.getElementById("marketing").checked;

  sessionStorage.setItem("cookiesAccepted", "true");
  sessionStorage.setItem("cookie_statistik", statistik ? "true" : "false");
  sessionStorage.setItem("cookie_marketing", marketing ? "true" : "false");

  document.getElementById("cookie-popup").style.display = "none";

  // Optional: hier kannst du Scripts je nach Auswahl laden
  if (statistik) {
    console.log("Statistik-Cookies aktiviert");
    // z.B. Google Analytics laden
  }

  if (marketing) {
    console.log("Marketing-Cookies aktiviert");
    // z.B. Werbeskripte laden
  }
}

function declineCookies() {
  sessionStorage.setItem("cookiesAccepted", "false");
  sessionStorage.setItem("cookie_statistik", "false");
  sessionStorage.setItem("cookie_marketing", "false");
  document.getElementById("cookie-popup").style.display = "none";
}

function toggleAccordion() {
  const content = document.getElementById("accordion");
  const arrow = document.getElementById("arrow");
  content.classList.toggle("open");
  arrow.classList.toggle("open");
  arrow.textContent = content.classList.contains("open") ? "▲" : "▼";
}

window.onload = function() {
  if (!sessionStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookie-popup").style.display = "block";
  }
}

function setupDropdown(buttonId, menuId) {
  const btn = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Schließen beim Klicken außerhalb
  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupDropdown("dropdownBtn1", "dropdownMenu1");
  setupDropdown("dropdownBtn2", "dropdownMenu2");
  setupDropdown("dropdownBtn3", "dropdownMenu3");
});
//------------------------------------------------------
document.querySelectorAll('.section-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const currentBox = toggle.closest('.section-box');

    // Alle anderen Boxen schließen
    document.querySelectorAll('.section-box').forEach(box => {
      if (box !== currentBox) {
        box.classList.remove('open');
      }
    });

    // Aktuelle Box umschalten
    currentBox.classList.toggle('open');
  });
});


// ------------------------------------------------------------------------------------
// Haupt-Tabs
document.querySelectorAll('.haupt-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.haupt-bereich').forEach(sec => sec.classList.remove('aktiv'));
    document.getElementById(btn.dataset.ziel).classList.add('aktiv');
  });
});

// Unter-Tabs
document.querySelectorAll('.unter-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.unter-inhalt').forEach(div => div.style.display = 'none');
    document.getElementById(btn.dataset.ziel).style.display = 'block';
  });
});
