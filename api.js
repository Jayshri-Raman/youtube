const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://youtube-v31.p.rapidapi.com/captions?part=snippet&order=date&q=reactjs");
xhr.setRequestHeader("X-RapidAPI-Key", "1c7e76f226msh4c2993481ce2e84p119201jsn807e5c7c3b07");
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);