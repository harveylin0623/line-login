<template>
  <div class="p-4">
    <button
      class="rounded border border-solid px-4 py-1 text-[red]"
      @click="loginHandler"
    >
      login
    </button>
  </div>
</template>

<script setup>

const loginHandler = () => {
  const queryString = new URLSearchParams({
    response_type: 'code',
    client_id: '2007083960',
    redirect_uri: 'https://line-login-gules.vercel.app/oauth',
    state: 'login',
    scope: 'openid profile email',
    bot_prompt: 'aggressive',
    prompt: 'login'
  })

  location.href = `https://access.line.me/oauth2/v2.1/authorize?${queryString.toString()}`
}
</script>