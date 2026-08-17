# Google → ChatGPT

A small userscript that adds a floating **Ask ChatGPT** button to Google search
results. Clicking it opens ChatGPT in a new tab with a prompt asking it to
search for the current Google keywords and summarize the results in the same
language as those keywords.

The script does not replace Google, make network requests, collect data, or send
the query anywhere before the button is clicked.

## Install

1. Install a userscript host for your browser, such as
   [Userscripts](https://apps.apple.com/app/userscripts/id1463298887) for
   Safari, [Tampermonkey](https://www.tampermonkey.net/),
   [Violentmonkey](https://violentmonkey.github.io/get-it/), or
   [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/).
2. Import [`google-to-chatgpt.user.js`](google-to-chatgpt.user.js).
3. Allow the script to run on `www.google.com` search pages.

The script uses a date-based version number in `YYYY.MM.DD` format.

## Use

Search with Google normally. When you want deeper treatment of the current
query, click the floating **Ask ChatGPT** button. Google remains open in its
tab.

## Privacy

The userscript has no dependencies, telemetry, storage, API calls, or external
assets. Its only externally visible action is opening `https://chatgpt.com/`
with the current query after an explicit click.

## Disclaimer

This is an independent, unofficial userscript. It is not affiliated with,
endorsed by, sponsored by, or otherwise associated with Google LLC, OpenAI,
L.L.C., or their affiliates.

Google, Google Search, ChatGPT, OpenAI, and related names, marks, and logos are
trademarks or registered trademarks of their respective owners. Their use is
solely descriptive and does not imply endorsement.

Use of Google and ChatGPT remains subject to their respective terms and privacy
policies.

This script and its documentation were fully AI-generated using
[**GPT-5.6 Sol**](https://developers.openai.com/api/docs/models/gpt-5.6-sol)
and may contain errors, omissions, or unexpected behavior. Use it entirely at
your own risk.

This software is provided "as is", without warranty of any kind. Websites may
change without notice and may affect the script's operation. Users are
responsible for reviewing the source and deciding whether to install it.
