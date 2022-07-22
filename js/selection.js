// let getCookies = Cookies.get(`userSelection`);

// if(getCookies === undefined){
//     document.body.insertAdjacentHTML = `<h3>You have not made a selection</h3>`;

// }else{
//     let gotCookies = JSON.parse(cookie_user_json);
//     gotCookies()
// }

let getCookies = Cookies.get(`userSelection`);
let selectionVariable = JSON.parse(getCookies);

if (getCookies === undefined) {
  document.body.insertAdjacentHTML = `<h3>You have not made a selection</h3>`;
} else {
  document.body.insertAdjacentHTML = `<section id="objectInfo"></section>`;
  let objectInfo = document.getElementById(`objectInfo`);
  objectInfo[`innerHTML`] = `<img src="" alt="">`;
}
