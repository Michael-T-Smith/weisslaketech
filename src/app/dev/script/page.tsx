import { notFound, redirect } from "next/navigation";
import { DEV_AUTOFILL_ENABLED } from "@/lib/dev-service-request";

export default function DevScriptPage() {
  if (!DEV_AUTOFILL_ENABLED) {
    notFound();
  }

  redirect("/contact?devAutofill=1");
}
