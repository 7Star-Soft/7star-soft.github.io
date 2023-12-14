async function getAuth() {
          let body = {
                   // api_key: "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TVRjd0xDSnVZVzFsSWpvaU1UWTVPVEV6T1RFek9DNDNNRFl6T0RraWZRLlMwdVlUbFZ6UFBhVFQ1SjI1QzJld1hzcHZsemZCVGxHeVNQZnpONmk2MGhfY3JNUHYtOUxHYWdWbVVlWUg3UkdNVURfVnNDVVFrVldwZElwZkVyQXBR",
                    username : "551122634",
                    password:"Aa@123456"
          }
          let request = await fetch('https://accept.paymob.com/api/auth/tokens', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( body )

          })
          let response = await request.json()
                    console.log(response)
          document.getElementById('pay').innerHTML = JSON.stringify(response)

          // let request2 = await fetch('https://accept.paymob.com/api/auth/tokens', {
          //           method: 'post',
          //           headers: { 'Content-Type': 'application/json' },
          //           body: JSON.stringify(body)
          // })

          // let response2 = await request2.json()

          // let token = response2.token
          // console.log(response2)
}
getAuth();