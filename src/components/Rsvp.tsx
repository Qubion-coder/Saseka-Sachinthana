import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { submitToGoogleSheet } from '../googleSheets';

export const Rsvp: React.FC = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'accept' | 'decline' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    
    if (!status) {
      setError('Please select whether you can attend.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await submitToGoogleSheet('rsvp', { name, status });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="py-24 px-4 relative overflow-hidden bg-cover bg-center bg-fixed text-stone-900" 
      style={{ backgroundImage: `url('/ChatGPT%20Image%20Aug%2017,%202026,%2001_00_12%20AM.png')` }}
      id="rsvp"
    >
      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-4">RSVP</h2>
          <p className="text-stone-600 font-light tracking-wider">
            Please let us know if you can make it
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-xl relative"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-brand-gold mb-2">Thank You!</h3>
                <p className="text-stone-600">
                  {status === 'accept' 
                    ? "We can't wait to celebrate with you!" 
                    : "We're sorry you can't make it, but we'll keep you in our hearts."}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/80 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-light shadow-sm"
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3">
                    Will you attend?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setStatus('accept')}
                      disabled={isSubmitting}
                      className={`py-3 px-4 rounded-lg border transition-all duration-300 shadow-sm ${
                        status === 'accept'
                          ? 'border-brand-gold bg-brand-gold/10 text-brand-gold font-medium'
                          : 'border-stone-200 bg-white/50 hover:border-brand-gold/50 text-stone-600'
                      }`}
                    >
                      Accept with Pleasure
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus('decline')}
                      disabled={isSubmitting}
                      className={`py-3 px-4 rounded-lg border transition-all duration-300 shadow-sm ${
                        status === 'decline'
                          ? 'border-red-500 bg-red-500/10 text-red-500 font-medium'
                          : 'border-stone-200 bg-white/50 hover:border-red-500/50 text-stone-600'
                      }`}
                    >
                      Decline with Regret
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center font-light">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !status}
                  className="w-full bg-brand-gold text-black font-bold py-4 rounded-lg hover:bg-brand-champagne transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? 'Submitting...' : 'Send RSVP'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
