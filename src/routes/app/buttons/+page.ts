import type { LayoutLoad } from "../$types";

import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import type { Session } from "@supabase/supabase-js";

import supabase from "$lib/supabase";
import type { Sound } from "$lib/types/sound";

export const prerender = true;
export const csr = true;

export const load: LayoutLoad = async (event) => {
  const { session } = await getSupabase(event);
  return { sounds: await getSounds(session) };
};

const getSounds = async (session: Session | null): Promise<Sound[]> => {
  if (!session) return [];

  const res = await supabase.from("sounds").select(`id, user_id, name`);

  if (res.error) console.log(res.error);

  return res.data || [];
};
