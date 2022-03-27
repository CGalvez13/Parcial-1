const APIController = (function() {

      const clientId = 'b26d24a2d68d4e6a83fb64206a1fd936';
      const clientSecret = '0b53f980050943469c1d4336f6ec9ad2';

      //metodos privados
      const _getToken = async () => {

        const result = await fetch ('https://acounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type' : 'aplication/x-www-form-urlencoded',
              'Authorization' : 'Basic' + btoa( clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.acess_token;
      }
      const _getTracks = async (token, tracksEndPoint) => {

            const limit = 10;

            const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
                  method: 'Get',
                  headers: { 'Authorization' : 'Bearer' + token}
            });

            const data  = await result.json();
            return data.items
      }

      return {
          getToken()  {
            return _getToken();
          },
          getTracks(token, tracksEndPoint) {
            return _getTracks(token, tracksEndPoint);
          }
      }
})();

  //Modulo UI
const UIController = (function()){

      //objeto para referencias de selectores de html
      const DOMElements = {
        selectGenre: '#select_genre',
        selectPlaylist: '#select_playlist',
        buttonSubmit: '#btn_submit',
        divSongDetail: '#song-detail',
        hfToken: '#hidden_token',
        divSonglist: '.song-list'
      }
  //Metodos Publicos
  return {

      //archivos  input
      inputField() {
        return {
          genre: document.querySelector(DOMElements.selectGenre),
          playlist: document.querySelector(DOMElements.selectPlaylist),
          tracks: document.querySelector(DOMElements.divSonglist),
          submit: document.querySelector(DOMElements.buttonSubmit),
          songDetail: document.querySelector(DOMElements.divSongDetail)
        }
      },
      
  }



}
