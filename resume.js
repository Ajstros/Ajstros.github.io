function displayContent(event, tab) {
  var i, content, tabs;

  content = document.getElementsByClassName("content");
  for (i=0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  tabs = document.getElementsByClassName("tabBtn");
  for (i=0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";
  event.currentTarget.className += " active";
}

document.getElementById("default").click() // Show the default page
