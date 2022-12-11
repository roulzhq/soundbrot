<script lang="ts">
  import supabase from "$lib/supabase";

  let loading = false;

  let email: string;
  let password: string;

  const sendPasswordResetRequest = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:1420",
    });
    console.log(data);
    console.log(error);
  };

  const handleLoginWithPassword = async () => {
    try {
      loading = true;
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };
</script>

<div>
  <h1 class="header">Supabase + SvelteKit</h1>
  <p class="description">Sign in via magic link with your email below</p>

  <input type="email" placeholder="Your email" bind:value={email} />
  <input type="password" placeholder="Your password" bind:value={password} />

  <button disabled={loading} on:click={handleLoginWithPassword}>Login</button>
  <hr />
  <button disabled={loading} on:click={sendPasswordResetRequest}
    >Reset password</button
  >
</div>
