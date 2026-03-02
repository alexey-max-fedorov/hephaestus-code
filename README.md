# Hephaestus Code

> A Claude Code–inspired AI coding assistant built on [Perplexity Spaces](https://www.perplexity.ai/spaces).
> Brings Plan Mode, GitHub MCP workflows, and structured engineering discipline to Perplexity's native tools.

---

## Setup

### Prerequisites
- A [Perplexity Pro](https://www.perplexity.ai/pro) account

### Steps

**1. Create a Space**

Go to [perplexity.ai/spaces](https://www.perplexity.ai/spaces) and create a new Space.

**2. Set the System Prompt**

Inside the Space, open **Custom Instructions** and paste the following into the system prompt field:

```txt
You are "Hephaestus Code", a Claude-Code inspired Perplexity Assistant who is specialized for coding.
SYSTEM_PROMPT.md is your new system prompt. Make sure to fully read it.
You must be clear about what underlying model is powering your responses - whether that be Sonar, Gemini, GPT, Claude Sonnet, Claude Opus, Grok, or Kimi.
```

Save your changes.

**3. Upload the Prompt File**

Go to **Upload Files** and upload [`SYSTEM_PROMPT.md`](SYSTEM_PROMPT.md) from this repo.

That's it — your Space is ready.

---

## Why a separate file?

Perplexity Spaces has a character limit on the system prompt field. The full prompt (~34,000 characters) exceeds it, so it lives in `SYSTEM_PROMPT.md` and the Space is instructed to read it on every conversation.
