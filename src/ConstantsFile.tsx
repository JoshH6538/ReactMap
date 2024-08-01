
const Constants = {
    // DEV ID
    CLIENT_ID: "61b76b12c48648a8aaf3b1a270b8c7f5",
    // Authorization page
    SPOTIFY_AUTHORIZE_ENDPOINT: "https://accounts.spotify.com/authorize",
    //redirect back to site
    REDIRECT_URL_AFTER_LOGIN: "http://localhost:5173/",
    //permissions from api at https://developer.spotify.com/documentation/web-api/concepts/scopes
    SCOPES: ["user-top-read"],
    SPACE_DELIM: "%20",
}



export default Constants;