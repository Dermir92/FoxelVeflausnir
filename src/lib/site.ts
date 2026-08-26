/**
 * Single source of truth for Foxel's business details.
 *
 * These appear in several places (footer, contact section, contact form error
 * fallback, and later in LocalBusiness structured data). Keeping them here
 * stops one of them drifting out of date — which is how the site ended up
 * shipping "setja inn síðar" in four places.
 */

/** Registered legal entity name. */
export const LEGAL_NAME = "Foxel ehf.";

/** Icelandic company registration number (kennitala). */
export const KENNITALA = "500925-0270";

/** Public contact address. Do not use a personal address here. */
export const CONTACT_EMAIL = "foxel@foxel.is";
