# [kartik-soni18.github.io](https://kartik-soni18.github.io)

## AI Portfolio Assistant

The portfolio remains a GitHub Pages React/Vite site. A small floating assistant handles obvious navigation locally, then only forwards open-ended questions to a Cloudflare Worker:

`GitHub Pages → Cloudflare Worker → LLM provider → validated JSON action → browser action executor`

Supported actions are `scroll` (`home`, `skills`, `projects`, `contact`), `click` (`github`, `linkedin`, `email`), `extract_contact`, `extract_personal_info`, and `answer`. The browser never runs model-provided JavaScript, selectors, URLs, or HTML.

### Configure and deploy the Worker

1. From `worker/`, install the Worker development dependency: `npm install`
2. The Worker defaults to AI Credits: `LLM_PROVIDER=aicredits` and `LLM_MODEL=inclusionai/ling-3.0-flash` in [`worker/wrangler.jsonc`](worker/wrangler.jsonc). It uses `https://api.aicredits.in/v1/chat/completions` with OpenAI-compatible tool calling.
3. Add the only secret interactively: `npx wrangler secret put LLM_API_KEY`
4. Verify and deploy: `npx wrangler check && npx wrangler deploy`
5. Put the deployed Worker origin (without `/agent`) in a local `.env.production` file as `VITE_AGENT_API_URL=https://kartik-portfolio-agent.<your-subdomain>.workers.dev`, then run `npm run deploy`.

Every assistant question is sent to the Worker with approved `scroll`, `click`, `extract_contact`, and `extract_personal_info` tools. The model may return a response, request an action, or do both; the browser validates each action against the allowlist. The Worker permits only `https://kartik-soni18.github.io` (plus localhost for development), limits AI requests to 5 per minute per visitor IP, caps request/message and output sizes, and validates model tool calls. `LLM_API_KEY` is a Cloudflare secret and must never be added to a frontend file, `.env` committed to Git, or Wrangler configuration.
