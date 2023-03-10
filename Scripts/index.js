window.onload = function () {
  if (window.location.href === "https://luauscripts.github.io/Scripts/index.html") {
    noIndexScripts()
  }
  function noIndexScripts() {
    location.replace("https://luauscripts.github.io/Scripts/")
  }
  else if (window.location.href === "https://luauscripts.github.io/Scripts/") {
  }
};
