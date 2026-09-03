/**
 * Slóðirnar eru skrifaðar frá rót ("/#verd") en ekki sem ber akkeri ("#verd").
 * Hausinn og fóturinn birtast núna á öllum síðum, og á /skilmalar og
 * /personuvernd eru þessi akkeri ekki til, svo bert akkeri myndi ekki gera
 * neitt. Á forsíðunni sjálfri leysist "/#verd" áfram sem skrun innan síðunnar.
 */
export const NAV_LINKS = [
  { href: "/#innifalid", label: "Innifalið" },
  { href: "/#verkefni", label: "Verkefni" },
  { href: "/#verd", label: "Verð" },
  { href: "/#ferlid", label: "Ferlið" },
  { href: "/#spurningar", label: "Spurt og svarað" },
] as const;

/** Slóð á sambandskaflann. Sama ástæða fyrir "/" í byrjun og að ofan. */
export const CONTACT_HREF = "/#samband";
