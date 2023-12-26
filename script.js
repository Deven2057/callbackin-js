//callbacks
function loadScript(src){
  var script = document.createElement("script");
  script.src = src;
  script.onload=function(){
    console.log("Loaded script with SRC: " + src)
  }
  document.body.appendChild(script);
}
function hello(){
  alert("Hello World!");
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", hello)
