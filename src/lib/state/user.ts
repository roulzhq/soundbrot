import type { User } from "@supabase/supabase-js";
import { writable } from "svelte/store";

export default writable<User | null>(null);
