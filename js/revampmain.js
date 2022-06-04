let liner = document.getElementById("liner");
let terminal = document.getElementById("terminal");
let before = document.getElementById("before");
let textarea = document.getElementById("texter"); 
let command = document.getElementById("typer"); 

let get = 0;
let commands = [];

setTimeout(() => {
  window.addEventListener('keyup', enterKey);
}, 1200);

setTimeout(() => {
  loopLines(banner, "", 60);
  textarea.focus();
}, 80);
  
textarea.value = "";
command.innerHTML = textarea.value;

console.log(
  "%cHello, I'm defnoterr.",
  "color: #7EC8E3; font-weight: bold; font-size: 32px;"
)
// Defines

// init


// Functions

function addLine(text, style, time) {
  let txt = "";
  for (let i =0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      txt += "&nbsp;&nbsp;";
      i++;
    } else {
      txt += text.charAt(i);
    }
  }
  setTimeout(function() {
    let next = document.createElement("p");
    next.innerHTML = txt;
    next.className = style;
    before.parentNode.insertBefore(next, before);
    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}


function loopLines(name, style, time) {
  name.forEach((item, index) => {
    addLine(item, style, index * time);
  })
}

function newTab(link){
  setTimeout(() => {
    window.open(link, "_blank");
  }, 500);
}

// main

function enterKey(key) {
  // key codes : 13 == Enter , 38 == Arrow Up,  9 == Tab,  40 == Arrow Down
  if (key.keyCode == 13) {
    commands.push(command.innerHTML);
    get = commands.length;
    addLine("guest@defnoterr:~$" + command.innerHTML, "no-animation", 0);
    mngCmds(command.innerHTML.toLowerCase());
    textarea.value = "";
    command.innerHTML = "";
  }
  if(key.keyCode == 38 && get != 0) {
    get--;
    textarea.value = commands[get];
    command.innerHTML = textarea.value;
  }
  if(key.keyCode == 40 && get != commands.length) {
    get++;
    if(commands[git] == undefined) {
      textarea.value = "";
    } else {
      textarea.value = commands[get];
    }
    command.innerHTML = textarea.value;
  }
}

function mngCmds(cmd) {
  switch (cmd.toLowerCase()) {
    // help
    case "help":
      window.removeEventListener('keyup', enterKey);
      loopLines(help, "color2 margin", 65);
      setTimeout(() => {
        window.addEventListener('keyup', enterKey);
      }, 655);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 65);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 65);
      break;
    case "social":
      loopLines(social, "color2 margin", 65);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 65);
      break;
    case "secret":
      addLine("<span class=\"inherit\"> Coming soon dude. maybe. maybe not. </span>", "error", 65);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 65);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:tropiczmodz@outlook.fr">tropiczmodz@outlook.fr</a>...', "color2", 65);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      window.removeEventListener('keyup', enterKey);
      loopLines(banner, "", 65);
      setTimeout(() => {
        window.addEventListener('keyup', enterKey);
      }, 1200);
      break;
    // Socials
    case "youtube":
      addLine('Opening Youtube...', "color2", 65);
      newTab(youtube);
      break;
    case "twitter":
      addLine('Opening Twitter...', "color2", 65);
      newTab(twitter);
      break;
    case "github":
      addLine('Opening Github...', "color2", 65);
      newTab(github);
      break;
    case "biolink":
      addLine('Opening BioLink...', "color2", 65);
      newTab(biolink);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 65);
      break;
  }
}
