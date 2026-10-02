import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle, X } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Quick Prompt Tooltip */}
      {showTooltip && (
        <div className="relative flex items-center gap-2 rounded-xl bg-card border border-border/80 px-4 py-2.5 text-xs shadow-lg text-foreground animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[260px]">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-foreground hover:text-background transition-colors"
            aria-label="Dismiss chat tip"
          >
            <X className="h-2.5 w-2.5" />
          </button>
          <div>
            <p className="font-semibold text-foreground">Need quick answers?</p>
            <p className="text-[11px] text-muted-foreground">Chat directly with our senior scoping team on WhatsApp.</p>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={siteConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-label="Chat with WaveOn on WhatsApp (opens in a new window)"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
        <MessageCircle className="h-7 w-7" />
      </a>
    </aside>
  );
};
