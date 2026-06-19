import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import { PHONE, EMAIL, SOCIALS } from "./site";

const ICONS: Record<string, typeof Facebook> = { facebook: Facebook, instagram: Instagram };

export default function TopBar() {
  return (
    <div className="hidden bg-royal-2 text-[#cdd9ef] md:block">
      <div className="wrap flex h-9 items-center justify-between text-[12.5px]">
        <div className="flex items-center gap-5">
          <a href={`tel:+52${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-1.5 transition hover:text-white">
            <Phone className="h-3.5 w-3.5" aria-hidden /> {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} className="hidden items-center gap-1.5 transition hover:text-white lg:flex">
            <Mail className="h-3.5 w-3.5" aria-hidden /> {EMAIL}
          </a>
        </div>
        <div className="flex items-center gap-3.5">
          <span className="text-[#9fb3d6]">Síguenos</span>
          {SOCIALS.filter((s) => ICONS[s.key]).map((s) => {
            const Icon = ICONS[s.key];
            return (
              <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="transition hover:text-white">
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
