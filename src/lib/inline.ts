const ESCAPES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

export const escapeHtml = (text: string): string => text.replace(/[&<>"]/g, (char) => ESCAPES[char] ?? char);

/** Converte trechos entre crases em `<code>` e escapa o restante. */
export const renderInline = (text: string): string =>
  escapeHtml(text).replace(/`([^`]+)`/g, '<code>$1</code>');

export const splitWords = (text: string): string[] => text.trim().split(/\s+/);
