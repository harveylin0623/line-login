<template>
  <div>
    <p>是否為官方帳號好友: {{ isFriendByUrlParams }} (透過friendship_status_changed參數取得)</p>
    <p>是否為官方帳號好友: {{ isFriendByLoginApi }} (透過line login api取得)</p>
    <p>是否為官方帳號好友: {{ isFriendByMessageApi }} (透過message api取得)</p>
  </div>
</template>

<script setup>
import axios from 'axios'

const isFriendByUrlParams = ref(false)
const isFriendByLoginApi = ref(false)
const isFriendByMessageApi = ref(false)

const getLineMemberProfile = async() => {
  const paramsObj = new URL(location.href).searchParams
  if (paramsObj.get('error') !== null) {
    return {
      status: false,
      payload: null
    }
  }

  isFriendByUrlParams.value = paramsObj.get('friendship_status_changed')

  // 使用code取得accessToken
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

  //使用idToken取得profile
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

  //使用accessToken取得profile
  const accessTokenResponse = await axios({
    url: 'https://api.line.me/v2/profile',
    method: 'get',
    headers: {
      Authorization: `Bearer ${oauthResponse.data.access_token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  console.log(accessTokenResponse.data)

  // 透過Friendship status api查詢是否加入官方帳號
  const friendStatusByLoginApi = await axios({
    url: 'https://api.line.me/friendship/v1/status',
    method: 'get',
    headers: {
      Authorization: `Bearer ${oauthResponse.data.access_token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  isFriendByLoginApi.value = friendStatusByLoginApi.data.friendFlag

  // 透過message api查詢是否加入官方帳號 (因資安問題必須由server打,前端打會被跨域)
  try {
    const friendStatusByMessageApi = await axios({
      url: `https://api.line.me/v2/bot/profile/${accessTokenResponse.data.userId}`,
      method: 'get',
      headers: {
        Authorization: `Bearer y2VUPJdOnjk357uXvChTAA8u6Ct7zKhQY5syV5zKWn0/xJCZJd6bTS1IgRhRYPLFwJRjFLoYAP4pnsXnxknTqbkRiyjLIXyAxbE8vTrHlSXpmIkyxBcmIE0YkuLdkfVBPILMcPm1DJQbkoToeUWNhgdB04t89/1O/w1cDnyilFU=`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    console.log(friendStatusByMessageApi)
    isFriendByMessageApi.value = true
  } catch (err) {
    console.log(err)
    isFriendByMessageApi.value = false
  }

}

onMounted(async() => {
  await getLineMemberProfile()
})
</script>

<style lang="scss" scoped>

</style>