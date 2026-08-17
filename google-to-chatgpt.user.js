// ==UserScript==
// @name         Google → ChatGPT
// @namespace    local.google-chatgpt
// @version      2026.08.17
// @description  Manually send the current Google search query to ChatGPT.
// @match        https://www.google.com/search*
// @grant        none
// @run-at       document-end
// @noframes
// ==/UserScript==

/*
 * Disclaimer
 * ----------
 * This is an independent, unofficial userscript. It is not affiliated with,
 * endorsed by, sponsored by, or otherwise associated with Google LLC, OpenAI,
 * L.L.C., or their affiliates.
 *
 * Google, Google Search, ChatGPT, OpenAI, and related names, marks, and logos
 * are trademarks or registered trademarks of their respective owners. Their
 * use here is solely descriptive and does not imply endorsement.
 *
 * The script makes no background network requests, stores no search history,
 * and sends no query to ChatGPT until the user explicitly clicks the button.
 * Clicking the button opens a ChatGPT URL containing the current Google query;
 * use of Google and ChatGPT remains subject to their respective terms and
 * privacy policies.
 *
 * This script and its documentation were fully AI-generated using GPT-5.6 Sol
 * and may contain errors, omissions, or unexpected behavior. Use it entirely
 * at your own risk.
 *
 * This software is provided "as is", without warranty of any kind. Websites
 * may change without notice and may affect the script's operation. Users are
 * responsible for reviewing the source and deciding whether to install it.
 */

(() => {
    "use strict";

    const BUTTON_ID = "google-to-chatgpt";
    const STYLE_ID = `${BUTTON_ID}-style`;

    function getCurrentQuery() {
        const query = new URL(window.location.href).searchParams.get("q");
        return query && query.trim();
    }

    function openChatGPT() {
        const query = getCurrentQuery();

        if (!query) {
            return;
        }

        const prompt =
            `Search the web using these keywords: "${query}". ` +
            "Summarize the results in the same language as the keywords.";
        const target = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
        window.open(target, "_blank", "noopener,noreferrer");
    }

    function addStyles() {
        if (document.getElementById(STYLE_ID)) {
            return;
        }

        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = `
            #${BUTTON_ID} {
                position: fixed;
                right: max(16px, env(safe-area-inset-right));
                bottom: max(24px, env(safe-area-inset-bottom));
                z-index: 2147483647;
                box-sizing: border-box;
                padding: 10px 16px;
                border: 1px solid ButtonBorder;
                border-radius: 999px;
                background: Canvas;
                color: CanvasText;
                font: 600 14px/1.25 system-ui, -apple-system, sans-serif;
                cursor: pointer;
                box-shadow: 0 2px 8px rgb(0 0 0 / 18%);
                -webkit-tap-highlight-color: transparent;
                touch-action: manipulation;
            }

            #${BUTTON_ID}:hover {
                filter: brightness(0.96);
            }

            #${BUTTON_ID}:focus-visible {
                outline: 2px solid Highlight;
                outline-offset: 2px;
            }

            #${BUTTON_ID}:active {
                transform: translateY(1px);
            }

            @media (max-width: 600px) {
                #${BUTTON_ID} {
                    right: max(12px, env(safe-area-inset-right));
                    bottom: max(16px, env(safe-area-inset-bottom));
                }
            }
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    function createButton() {
        if (document.getElementById(BUTTON_ID) || !document.body) {
            return;
        }

        addStyles();

        const button = document.createElement("button");
        button.id = BUTTON_ID;
        button.type = "button";
        button.textContent = "Ask ChatGPT";
        button.setAttribute("aria-label", "Open current Google search in ChatGPT");
        button.addEventListener("click", openChatGPT);

        document.body.appendChild(button);
    }

    createButton();
})();
