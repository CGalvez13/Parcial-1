const APIController = (function() {

      const clientId = 'b26d24a2d68d4e6a83fb64206a1fd936';
      const clientSecret = '0b53f980050943469c1d4336f6ec9ad2';

      //metodos privados
      const _getToken = async () => {

        const result = await fetch ('https://acounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type' : 'aplication/x-www-form-urlencoded',
              'Authorization' : 'Basic' +btoa( clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.acess_token;
      }

}
)
