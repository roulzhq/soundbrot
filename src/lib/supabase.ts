import { createClient } from "@supabase/auth-helpers-sveltekit";
import { env } from "$env/dynamic/public";

export default createClient(
  env.PUBLIC_SUPABASE_URL!,
  env.PUBLIC_SUPABASE_ANON_KEY!
);
