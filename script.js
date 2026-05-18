//     <!--
//     ═══════════════════════════════════════════════════════════
//     JAVASCRIPT — kept as simple and readable as possible.
//     Only two jobs:
//       1. Hamburger menu open/close
//       2. Level tab switching

//     Every line is explained. Nothing fancy.
//     ═══════════════════════════════════════════════════════════
//   -->
      // ── JOB 1: HAMBURGER MENU ───────────────────────────────────
      // Grab the elements we need by their id attributes
      const navbar = document.getElementById("navbar");
      const hamburger = document.getElementById("hamburger");

      // Listen for a click on the hamburger button
      hamburger.addEventListener("click", function () {
        // Toggle means: if the class is there, remove it. If not, add it.
        // .nav-open on .navbar is what CSS uses to slide the mobile menu open.
        navbar.classList.toggle("nav-open");

        // Also toggle .active on the button itself
        // This is what CSS uses to animate bars → X
        hamburger.classList.toggle("active");

        // Update aria-expanded for accessibility (screen readers)
        // If it's currently "false", set it to "true", and vice versa
        const isOpen = hamburger.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isOpen);
      });

      // Close the menu when a link inside it is clicked (for same-page links)
      function closeMenu() {
        navbar.classList.remove("nav-open");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }

      // Close menu if user clicks anywhere outside the navbar
      document.addEventListener("click", function (event) {
        // event.target is the element the user clicked
        // .contains() checks if that element is inside the navbar
        if (!navbar.contains(event.target)) {
          closeMenu();
        }
      });

      // ── JOB 2: LEVEL TAB SWITCHING ──────────────────────────────
      // Grab all tab buttons and all panels
      const tabs = document.querySelectorAll(".level-tab");
      const panels = document.querySelectorAll(".level-panel");

      // A reusable function so footer links can also switch tabs
      function switchTab(levelId) {
        // Remove .active from every tab and every panel
        tabs.forEach(function (tab) {
          tab.classList.remove("active");
        });
        panels.forEach(function (panel) {
          panel.classList.remove("active");
        });

        // Add .active to the panel that matches levelId
        document.getElementById(levelId).classList.add("active");

        // Add .active to the tab whose data-level matches levelId
        // querySelector finds the first element matching the CSS selector
        const matchingTab = document.querySelector(
          '[data-level="' + levelId + '"]',
        );
        if (matchingTab) matchingTab.classList.add("active");
      }

      // Listen for clicks on each tab button
      tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
          // Read the data-level attribute from the clicked tab
          // e.g. data-level="level200" gives us "level200"
          const levelId = tab.getAttribute("data-level");
          switchTab(levelId);
        });
      });
