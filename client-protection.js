/**
 * 🔒 Client Pitch Anti-Theft & Inspect Protection Shield
 * =======================================================
 * Protects website prototypes from unauthorized source code inspection,
 * right-click copying, devtools element theft, and image asset downloading.
 * 
 * Features:
 * - Disables context menu (right-click)
 * - Blocks DevTools shortcuts (F12, Ctrl+Shift+I, Cmd+Option+I, Ctrl+U, Cmd+Option+U, etc.)
 * - Disables drag-and-drop on images
 * - Disables text selection across body (while keeping form inputs 100% interactive)
 * - DevTools open detection with debugger trap & watermark shield
 * - Console warning & auto-clear
 * - Floating anti-theft toast notification
 */

(function () {
  'use strict';

  // 1. Inject Anti-Copy CSS
  const style = document.createElement('style');
  style.id = 'demo-protection-styles';
  style.textContent = `
    /* Prevent text selection across elements */
    *:not(input):not(textarea):not(select):not(option) {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important;
    }
    
    /* Keep interactive inputs functional */
    input, textarea, select, option {
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }

    /* Prevent image dragging */
    img {
      -webkit-user-drag: none !important;
      -khtml-user-drag: none !important;
      -moz-user-drag: none !important;
      -o-user-drag: none !important;
      user-drag: none !important;
      pointer-events: auto;
    }

    /* Anti-Inspect Toast */
    #antiTheftToast {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: rgba(18, 18, 18, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      color: #FBF9F4;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
      padding: 12px 22px;
      border-radius: 9999px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.03em;
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 999999;
      pointer-events: none;
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #antiTheftToast.show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    #antiTheftToast .shield-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #DC2626;
      color: #fff;
      font-size: 11px;
    }

    /* DevTools Full-Screen Security Shield */
    #devToolsShield {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(10, 10, 10, 0.96);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      z-index: 1000000;
      align-items: center;
      justify-content: center;
      padding: 24px;
      color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      text-align: center;
    }
    #devToolsShield.active {
      display: flex;
    }
    .shield-card {
      max-width: 480px;
      background: #18181B;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 24px;
      padding: 36px 32px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    }
    .shield-card h3 {
      font-size: 20px;
      font-weight: 700;
      margin: 16px 0 8px;
      color: #FFFFFF;
    }
    .shield-card p {
      font-size: 13px;
      color: #A1A1AA;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    .shield-card .tag {
      display: inline-block;
      font-family: monospace;
      font-size: 11px;
      padding: 4px 10px;
      background: rgba(220, 38, 38, 0.15);
      border: 1px solid rgba(220, 38, 38, 0.3);
      color: #F87171;
      border-radius: 9999px;
      font-weight: 600;
    }
  `;
  document.head.appendChild(style);

  // 2. Toast Notification Element
  let toastEl = null;
  let toastTimer = null;

  function getToast() {
    if (!toastEl && document.body) {
      toastEl = document.createElement('div');
      toastEl.id = 'antiTheftToast';
      toastEl.innerHTML = '<span class="shield-icon">🔒</span><span id="antiTheftMsg">Source Inspection Disabled</span>';
      document.body.appendChild(toastEl);
    }
    return toastEl;
  }

  function showToast(message) {
    const toast = getToast();
    if (!toast) return;
    const msgEl = document.getElementById('antiTheftMsg');
    if (msgEl) msgEl.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // 3. DevTools Warning Modal Shield
  let shieldEl = null;
  function getShield() {
    if (!shieldEl && document.body) {
      shieldEl = document.createElement('div');
      shieldEl.id = 'devToolsShield';
      shieldEl.innerHTML = `
        <div class="shield-card">
          <span class="tag">🔒 PROPRIETARY CLIENT PREVIEW</span>
          <h3>Source Inspection Disabled</h3>
          <p>
            This website preview is protected against unauthorized copying, reverse-engineering, and source theft.
            Please close Developer Tools to continue browsing the live interactive demo.
          </p>
          <div style="font-size: 11px; color: #71717A; font-family: monospace;">
            Developer Demo Shield • Prototype Rights Reserved
          </div>
        </div>
      `;
      document.body.appendChild(shieldEl);
    }
    return shieldEl;
  }

  function setShield(active) {
    const shield = getShield();
    if (shield) {
      if (active) shield.classList.add('active');
      else shield.classList.remove('active');
    }
  }

  // 4. Disable Context Menu (Right Click)
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showToast('🔒 Right-click inspect is disabled on this preview');
    return false;
  }, true);

  // 5. Block DevTools & Source Keyboard Shortcuts
  document.addEventListener('keydown', function (e) {
    const key = e.key;
    const keyCode = e.keyCode || e.which;
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const ctrlOrMeta = isMac ? e.metaKey : e.ctrlKey;

    // F12 key
    if (key === 'F12' || keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      showToast('🔒 F12 Developer Tools is disabled');
      return false;
    }

    // Inspect / Developer Tools shortcuts:
    // Ctrl+Shift+I (Windows/Linux) or Cmd+Opt+I (Mac) -> keyCode 73
    // Ctrl+Shift+J (Windows/Linux) or Cmd+Opt+J (Mac) -> keyCode 74
    // Ctrl+Shift+C (Windows/Linux) or Cmd+Opt+C (Mac) -> keyCode 67
    // Ctrl+U (View Source) or Cmd+Opt+U (Mac) -> keyCode 85
    // Ctrl+S (Save Page) or Cmd+S (Mac) -> keyCode 83
    const isInspect = (ctrlOrMeta && e.shiftKey && (key === 'I' || key === 'i' || keyCode === 73)) ||
                      (isMac && e.metaKey && e.altKey && (key === 'I' || key === 'i' || keyCode === 73));

    const isConsole = (ctrlOrMeta && e.shiftKey && (key === 'J' || key === 'j' || keyCode === 74)) ||
                      (isMac && e.metaKey && e.altKey && (key === 'J' || key === 'j' || keyCode === 74));

    const isElementPicker = (ctrlOrMeta && e.shiftKey && (key === 'C' || key === 'c' || keyCode === 67)) ||
                            (isMac && e.metaKey && e.altKey && (key === 'C' || key === 'c' || keyCode === 67));

    const isViewSource = (ctrlOrMeta && (key === 'U' || key === 'u' || keyCode === 85)) ||
                         (isMac && e.metaKey && e.altKey && (key === 'U' || key === 'u' || keyCode === 85));

    const isSavePage = ctrlOrMeta && (key === 'S' || key === 's' || keyCode === 83);

    if (isInspect || isConsole || isElementPicker || isViewSource || isSavePage) {
      e.preventDefault();
      e.stopPropagation();
      showToast('🔒 Source inspection shortcuts are disabled');
      return false;
    }
  }, true);

  // 6. Disable Image Drag-and-Drop
  document.addEventListener('dragstart', function (e) {
    if (e.target && e.target.nodeName === 'IMG') {
      e.preventDefault();
      return false;
    }
  }, true);

  // 7. DevTools Open Detection via Viewport Threshold & Debugger Trap
  let isDevToolsOpen = false;
  const threshold = 160;

  function checkDevTools() {
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;

    if (widthDiff || heightDiff) {
      if (!isDevToolsOpen) {
        isDevToolsOpen = true;
        setShield(true);
      }
    } else {
      if (isDevToolsOpen) {
        isDevToolsOpen = false;
        setShield(false);
      }
    }
  }

  // Periodic check
  setInterval(checkDevTools, 500);
  window.addEventListener('resize', checkDevTools);

  // 8. Debugger Defense Loop (Triggers if DevTools is active)
  setInterval(function () {
    const startTime = performance.now();
    debugger; // If DevTools is open, execution pauses here
    const endTime = performance.now();
    if (endTime - startTime > 100) {
      setShield(true);
      console.clear();
      console.log(
        '%c🔒 DEMO PROTECTION ACTIVE',
        'color: #EF4444; font-size: 20px; font-weight: bold; background: #18181B; padding: 10px 16px; border-radius: 8px;'
      );
      console.log(
        '%cThis client presentation is protected against copying. Source code is licensed to the developer.',
        'color: #A1A1AA; font-size: 12px;'
      );
    }
  }, 1000);

  // 9. Console Clearing & Warning
  try {
    console.clear();
    console.log(
      '%c🔒 PROPRIETARY PREVIEW %c Source code inspection is disabled.',
      'background: #DC2626; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
      'color: #888; font-size: 11px;'
    );
  } catch (err) {}

})();

