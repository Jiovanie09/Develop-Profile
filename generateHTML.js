const colors = {
  green: {
    
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <style>
          @page {
              margin: 0;
          }
  
          *,
          *::after,
          *::before {
              box-sizing: border-box;
          }
  
          html,
          body {
              padding: 0;
              margin: 0;
          }
  
          html,
          body,
          
          body {
              background-color: white;
              -webkit-print-color-adjust: exact !important;
              font-family: 'Cabin', sans-serif;
          }
  
          main {
              background-color: #E9EDEE;
              height: auto;
              padding-top: 30px;
          }
  
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
              font-family: 'BioRhyme', serif;
              margin: 0;
          }
  
          h1 {
              font-size: 3em;
          }
  
          h2 {
              font-size: 2.5em;
          }
  
          h3 {
              font-size: 2em;
          }
  
          h4 {
              font-size: 1.5em;
          }
  
          h5 {
              font-size: 1.3em;
          }
  
          h6 {
              font-size: 1.2em;
          }
  
          .photo-header {
              position: relative;
              margin: 0 auto;
              margin-bottom: -50px;
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
  
              background-color: ${
                  colors[data.color].headerBackground
              }
  
              ;
  
              color: ${
                  colors[data.color].headerColor
              }
  
              ;
              padding: 10px;
              width: 95%;
              border-radius: 6px;
          }
  
          .photo-header img {
              width: 250px;
              height: 250px;
              object-fit: cover;
              margin-top: -75px;
  
              border: 6px solid black;
  
              
              box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
          }
  
          .photo-header h1,
          .photo-header h2 {
              width: 100%;
              text-align: center;
          }
  
          .photo-header h1 {
              margin-top: 10px;
          }
  
          .links-nav {
              width: 100%;
              text-align: center;
              padding: 20px 0;
              font-size: 1.1em;
          }
  
          .nav-link {
              display: inline-block;
              margin: 5px 10px;
          }
  
          .workExp-date {
              font-style: italic;
              font-size: .7em;
              text-align: right;
              margin-top: 10px;
          }
  
          .container {
              padding: 50px;
              padding-left: 100px;
              padding-right: 100px;
          }
  
          .row {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              margin-top: 20px;
              margin-bottom: 20px;
          }
  
          .card {
              padding: 20px;
              border-radius: 6px;
  
              background-color: ${
                  colors[data.color].headerBackground
              }
  
              ;
  
              color: ${
                  colors[data.color].headerColor
              }
  
              ;
              margin: 20px;
          }
  
          .col {
              flex: 1;
              text-align: center;
          }
  
          a,
          a:hover {
              text-decoration: none;
              color: inherit;
              font-weight: bold;
          }
  
          @media print {
              body {
                  zoom: .75;
              }
          }
      </style>
  </head>
  
  <body>
      <div class="wrapper">
          <div class="photo-header">
              <img src="${data.avatar_url}" alt="Photo of ${data.name}" />
              <h1>Hello Everyone!</h1>
              <h2>
                  My name is ${data.name}!</h1>
                  <h5>${data.company ? `Currently @ ${data.company}` : ""}</h5>
                  <nav class="links-nav">
                      ${
                      data.location
                      ? `<a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/${
          data.location
          }"><i class="fas fa-location-arrow"></i> ${
                          data.location
                          }</a>`
                      : ""
                      }
                      <a class="nav-link" target="_blank" rel="noopener noreferrer" href="${
        data.html_url
        }"><i class="fab fa-github-alt"></i> GitHub</a>
                      ${
                      data.blog
                      ? `<a class="nav-link" target="_blank" rel="noopener noreferrer" href="${
          data.blog
          }"><i class="fas fa-rss"></i> Blog</a>`
                      : ""
                      }
                  </nav>
          </div>
          <main>
              <div class="container">
                  <div class="col">
                      <div class="row-1">
                          <h3>${data.bio ? `${data.bio}` : ""}</h3>
                      </div>
                  </div>
                  <div class="row-2">
  
                      <div class="card">
                          <h3>Public Repositories</h3>
                          <h4>${data.public_repos}</h4>
                      </div>
  
                      <div class="row-3">
                          <div class="card">
                              <h3>Followers</h3>
                              <h4>${data.followers}</h4>
                          </div>
  
                      </div>
                      <div class="row-4">
  
                          <div class="card">
                              <h3>GitHub Stars</h3>
                              <h4>${data.stars}</h4>
                          </div>
  
                          <div class="row-5">
                              <div class="card">
                                  <h3>Following</h3>
                                  <h4>${data.following}</h4>
                              </div>
                          </div>
                      </div>
                  </div>
          </main>
      </div>
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"></script>
  </body>
  
  </html>`
};


module.exports = generateHTML;
