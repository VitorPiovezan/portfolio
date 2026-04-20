import { AnimatePresence, motion } from 'motion/react';
import { useI18n } from '../i18n/context';

const PREVIEW_IMG = '/images/my-finance.png';

interface MyFinanceProjectModalProps {
  open: boolean;
  onClose: () => void;
  githubUrl: string;
  liveUrl: string;
}

export default function MyFinanceProjectModal({
  open,
  onClose,
  githubUrl,
  liveUrl,
}: MyFinanceProjectModalProps) {
  const { t, locale } = useI18n();
  const closeLabel = locale === 'pt-BR' ? 'Fechar' : 'Close';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="presentation"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          style={{
            backgroundColor: 'rgba(6, 8, 18, 0.72)',
            backdropFilter: 'blur(8px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="my-finance-modal-title"
            className="relative w-full max-w-[472px]"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full overflow-hidden rounded-[20px] border border-[#3f3f52] bg-[#0f0f18]/95 shadow-[0_0_0_1px_rgba(167,139,250,0.14),0_20px_52px_rgba(0,0,0,0.48)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#181825]">
                  <img
                    src={PREVIEW_IMG}
                    alt=""
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, #0f0f18 0%, transparent 42%, rgba(15,15,24,0.4) 100%)',
                    }}
                  />
                  <button
                    type="button"
                    className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-[#cdd6f4] transition-colors hover:bg-black/55"
                    onClick={onClose}
                    aria-label={closeLabel}
                  >
                    <span className="text-lg leading-none">×</span>
                  </button>
              </div>

              <div className="relative px-8 pb-8 pt-7 sm:px-9 sm:pb-9 sm:pt-8">
                  <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7f849c]">
                    React · Vite · Firebase
                  </div>
                  <h3
                    id="my-finance-modal-title"
                    className="mb-3 text-2xl font-bold tracking-tight"
                  >
                    <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                      My Finance
                    </span>
                  </h3>
                  <p className="mb-8 text-[14px] leading-[1.65] text-[#bac2de]">
                    {t.projects.myFinanceModalBody}
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
                    <motion.a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-[#45475a] bg-[#1e1e2e] px-4 py-2.5 text-[13px] font-semibold text-[#cdd6f4] no-underline transition-colors hover:border-[#6272a4] hover:bg-[#262636]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t.projects.myFinanceModalBtnProject}
                    </motion.a>
                    <motion.a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-[#a855f7]/50 bg-[rgba(168,85,247,0.18)] px-4 py-2.5 text-[13px] font-semibold text-[#e9d5ff] no-underline shadow-[0_0_24px_rgba(168,85,247,0.15)] transition-colors hover:border-[#c084fc] hover:bg-[rgba(168,85,247,0.28)]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t.projects.myFinanceModalBtnLive}
                    </motion.a>
                  </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
