
let myObj = [
  {
    'overskrift': "Baristakurs",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/baristakurs.jpg", "Baristakurs"]
  },
  {
    'overskrift': "Byvandring",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/byvandring.jpg", "Byvandring"]
  },
  {
    'overskrift': "Fotosafari",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/fotosafari.jpg", "Fotosafari"]
  },
  {
    'overskrift': "Hyttetur",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/hyttetur.jpg", "Hyttetur"]
  },
  {
    'overskrift': "Nidarosdomen",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/nidarosdomen.jpg", "Nidarosdomen"]}
]

for (let x of myObj){
  console.log(x)
  let wrapper = document.createElement("div")
  wrapper.setAttribute("class", "pakketilbud")
  let img = document.createElement("img")
  img.setAttribute("class","imgpakketilbud")
  img.setAttribute("src",x.bildet[0])
  img.setAttribute("alt",x.bildet[1])
  let div = document.createElement("div")
  div.setAttribute("class", "contentpakke")
  let h2 = document.createElement("h2")
  h2.setAttribute("class", "headerpakke")
  let p = document.createElement("p")

  let link = document.createElement("a")
  link.setAttribute("href", "file:///C:/Users/Sigrid/OneDrive%20-%20NTNU/Informatikk-LAPTOP-7TI9PI04/Webtek/Prosjekt/Nettside-webtek/bestilling.html")
  let knapp = document.createElement("input")
  knapp.setAttribute("class", "bestill")
  knapp.setAttribute("type", "button")
  knapp.setAttribute("name", "bestill")
  knapp.setAttribute("value", "Bestill")

  link.appendChild(knapp)


  div.appendChild(h2)
  div.appendChild(p)
  div.appendChild(link)
  wrapper.appendChild(img)
  wrapper.appendChild(div)
  document.body.appendChild(wrapper)


  h2.innerHTML = x.overskrift
  p.innerHTML = x.kontekst


}
