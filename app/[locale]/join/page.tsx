import { redirect } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

// /join has been renamed to /talent. Redirect any inbound traffic.
export default function JoinRedirect({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  redirect(localePath(locale, "/talent"));
}
