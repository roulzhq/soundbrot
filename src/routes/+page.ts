import type { LayoutLoad } from "./$types";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";

import "@fontsource/ubuntu-mono";

export const prerender = true;
export const csr = true;

export const load: LayoutLoad = async (event) => {
  const { session } = await getSupabase(event);
  return { session };
};
