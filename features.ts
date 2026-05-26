// ============================================================
// src/features.ts — Feature Flags da Barbearia do Ico
// ============================================================
export const FEATURES = {
  whatsapp:       import.meta.env.VITE_FEATURE_WHATSAPP === 'true',
  asaas:          import.meta.env.VITE_FEATURE_ASAAS === 'true',
  clubeBeneficios: import.meta.env.VITE_FEATURE_CLUBE === 'true',
  filaEspera:     import.meta.env.VITE_FEATURE_FILA === 'true',
} as const;

if (import.meta.env.DEV) {
  console.log('[FEATURES]', FEATURES);
}
