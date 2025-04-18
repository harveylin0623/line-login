<template>
  <div>
  </div>
</template>

<script setup>
import axios from 'axios'

const getLineMemberProfile = async() => {
  const paramsObj = new URL(location.href).searchParams
  if (paramsObj.get('error') !== null) {
    return {
      status: false,
      payload: null
    }
  }

  console.log(paramsObj.get('friendship_status_changed'))

  const oauthResponse = await axios({
    url: 'https://api.line.me/oauth2/v2.1/token',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      grant_type: 'authorization_code',
      code: paramsObj.get('code'),
      redirect_uri: 'https://line-login-gules.vercel.app/oauth',
      client_id: '2007083960',
      client_secret: 'a51f5efbc77fa254f533564306e54714'
    }
  })

  console.log(oauthResponse.data)

  const idTokenResponse = await axios({
    url: 'https://api.line.me/oauth2/v2.1/verify',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      id_token: oauthResponse.data.id_token,
      client_id: '2007083960'
    }
  })

  console.log(idTokenResponse.data)

  const accessTokenResponse = await axios({
    url: 'https://api.line.me/v2/profile',
    method: 'get',
    headers: {
      Authorization: `Bearer ${oauthResponse.data.access_token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  console.log(accessTokenResponse.data)
}

onMounted(async() => {
  await getLineMemberProfile()
})
</script>

<style lang="scss" scoped>

</style>