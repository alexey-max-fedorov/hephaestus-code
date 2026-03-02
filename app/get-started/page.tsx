import Link from "next/link";
import {
  ArrowLeft,
  Terminal,
  BookOpen,
  Upload,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Get Started — Perplexity Code",
  description: "Set up Perplexity Code in your Perplexity Space in three steps.",
};

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-[#0D0F14] text-white selection:bg-[#3C82FF]/30">
      <Header />

      <main className="max-w-3xl mx-auto px-6 pt-40 pb-32">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>

        {/* Page header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3C82FF]/10 border border-[#3C82FF]/20 text-[#3C82FF] text-xs font-medium mb-6">
            Setup Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Get Started with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C82FF] via-[#4EE0B5] to-[#3C82FF]">
              Perplexity Code
            </span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A Claude Code–inspired AI coding assistant built on{" "}
            <a
              href="https://www.perplexity.ai/spaces"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3C82FF] hover:underline"
            >
              Perplexity Spaces
            </a>
            . Brings Plan Mode, GitHub MCP workflows, and structured
            engineering discipline to Perplexity’s native tools.
          </p>
        </div>

        {/* Prerequisites */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-zinc-200">Prerequisites</h2>
          <div className="p-5 rounded-2xl glass flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-[#FFCF5C]/10 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#FFCF5C]" />
            </div>
            <div>
              <p className="font-medium">Perplexity Pro account</p>
              <a
                href="https://www.perplexity.ai/pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#3C82FF] hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                perplexity.ai/pro <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-6 text-zinc-200">Setup Steps</h2>
          <div className="space-y-4">

            {/* Step 1 */}
            <div className="p-6 rounded-2xl glass">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3C82FF]/10 border border-[#3C82FF]/20 flex items-center justify-center text-sm font-bold text-[#3C82FF]">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Create a Space</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Go to{" "}
                    <a
                      href="https://www.perplexity.ai/spaces"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3C82FF] hover:underline"
                    >
                      perplexity.ai/spaces
                    </a>{" "}
                    and create a new Space.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl glass">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3C82FF]/10 border border-[#3C82FF]/20 flex items-center justify-center text-sm font-bold text-[#3C82FF]">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Set the System Prompt</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Inside the Space, open{" "}
                    <span className="text-white font-medium">Custom Instructions</span>{" "}
                    and paste the following into the system prompt field:
                  </p>
                  <div className="bg-[#0A0C10] border border-white/10 rounded-xl p-4 font-mono text-sm text-zinc-300">
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/5">
                      <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                      <span className="text-zinc-500 text-xs">system prompt</span>
                    </div>
                    <p className="leading-relaxed">
                      You are &quot;Perplexity Code&quot;, a Claude-Code inspired Perplexity
                      Assistant who is specialized for coding.
                      <br />
                      SYSTEM_PROMPT.md is your new system prompt. Make sure to
                      fully read it.
                    </p>
                  </div>
                  <p className="text-zinc-500 text-xs mt-3">Save your changes after pasting.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl glass">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3C82FF]/10 border border-[#3C82FF]/20 flex items-center justify-center text-sm font-bold text-[#3C82FF]">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Upload the Prompt File</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Go to{" "}
                    <span className="text-white font-medium">Upload Files</span>{" "}
                    in your Space and upload{" "}
                    <code className="text-[#4EE0B5] bg-[#4EE0B5]/10 px-1.5 py-0.5 rounded text-xs">
                      SYSTEM_PROMPT.md
                    </code>{" "}
                    from this repo.
                  </p>
                  <a
                    href="https://github.com/alexey-max-fedorov/perplexity-code/blob/main/SYSTEM_PROMPT.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#3C82FF] hover:text-[#3C82FF]/80 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    View SYSTEM_PROMPT.md on GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Done banner */}
        <div className="p-6 rounded-2xl bg-[#4EE0B5]/5 border border-[#4EE0B5]/20 flex items-center gap-4 mb-16">
          <CheckCircle2 className="w-6 h-6 text-[#4EE0B5] flex-shrink-0" />
          <div>
            <p className="font-semibold text-[#4EE0B5]">That’s it — your Space is ready.</p>
            <p className="text-zinc-400 text-sm mt-0.5">
              Start a conversation in your Space to use Perplexity Code.
            </p>
          </div>
        </div>

        {/* Why a separate file */}
        <div className="p-6 rounded-2xl glass">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#3C82FF]/10 flex-shrink-0">
              <BookOpen className="w-5 h-5 text-[#3C82FF]" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Why a separate file?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Perplexity Spaces has a character limit on the system prompt
                field. The full prompt (~34,000 characters) exceeds it, so it
                lives in{" "}
                <code className="text-[#4EE0B5] bg-[#4EE0B5]/10 px-1.5 py-0.5 rounded text-xs">
                  SYSTEM_PROMPT.md
                </code>{" "}
                and the Space is instructed to read it on every conversation.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
