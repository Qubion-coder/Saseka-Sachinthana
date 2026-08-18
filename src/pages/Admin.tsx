import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

export const Admin: React.FC = () => {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const generateLink = () => {
    if (!guestName.trim()) {
      alert("Please enter a guest name.");
      return;
    }
    const baseUrl = window.location.origin;
    const url = new URL(baseUrl);
    url.searchParams.set('prefix', prefix);
    url.searchParams.set('guest', guestName.trim());
    setGeneratedLink(url.toString());
    setCopiedLink(false);
    setCopiedMessage(false);
  };

  const messageTemplate = `Dear ${prefix} ${guestName} ❤️

With joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.

Please view our wedding invitation and all the event details through the link below 🌐:

${generatedLink}

Your presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.

With love,
❤️ Sachinthana & Saseka`;

  const copyToClipboard = async (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="min-h-screen bg-brand-ivory p-8 font-sans text-brand-black flex justify-center items-start">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 border border-brand-gold/20 mt-12">
        <h1 className="text-3xl font-serif text-brand-gold-deep mb-8 text-center uppercase tracking-widest">
          Invitation Link Generator
        </h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-600">Select Prefix</label>
            <select
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              className="w-full p-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
            >
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss">Miss</option>
              <option value="Mr. & Mrs.">Mr. & Mrs.</option>
              <option value="Family">Family</option>
              <option value="Dear">Dear</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-600">Guest Name</label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="e.g. Sanjaya"
              className="w-full p-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
            />
          </div>

          <button
            onClick={generateLink}
            className="w-full py-4 bg-brand-gold-deep text-white rounded-lg font-medium hover:bg-brand-gold transition-colors shadow-md"
          >
            Generate Link & Message
          </button>

          {generatedLink && (
            <div className="mt-8 space-y-6 animate-fade-in border-t border-stone-100 pt-8">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-stone-600">Generated Link</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={generatedLink}
                    className="flex-1 p-3 bg-stone-50 rounded-lg border border-stone-200 text-sm font-mono text-stone-600 outline-none"
                  />
                  <button
                    onClick={() => copyToClipboard(generatedLink, setCopiedLink)}
                    className="p-3 bg-stone-100 text-stone-600 rounded-lg hover:bg-stone-200 transition-colors flex items-center justify-center min-w-[48px]"
                    title="Copy Link"
                  >
                    {copiedLink ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-stone-600">Invitation Message</label>
                <div className="relative">
                  <textarea
                    readOnly
                    value={messageTemplate}
                    rows={12}
                    className="w-full p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-700 outline-none resize-none font-sans whitespace-pre-wrap"
                  />
                  <button
                    onClick={() => copyToClipboard(messageTemplate, setCopiedMessage)}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-600 rounded-md hover:bg-stone-50 transition-colors flex items-center gap-2 shadow-sm text-sm font-medium"
                  >
                    {copiedMessage ? (
                      <>
                        <Check size={16} className="text-green-600" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} /> Copy Full Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
