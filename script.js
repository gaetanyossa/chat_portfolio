var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+33758304167'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>0758304167</label></div> </a> <a href='mailto:gaetanyossa@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/gaetanyossa'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/message/7FBIMEVTYV5RE1'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/gaetanyossa'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/g.a.e.ta.n_m.h.d'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/gaetan-yossa-4121a4200/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Gaetan_Yossa.pdf</label></div><a href='assets/cv_gaetan_yossa.pdf' download='gaetan_yossa_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://goo.gl/maps/nCJpX2jYqR29gpjZA' class='map'></iframe></div><label class='add'><address>264 'Rue de leyde'<br>Residence le nouveau peyrou<br>Bat B4 Etage 7, Montpellier 34080</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Bonjour à toi 👋🏻,<br><br>je m'appelle <span class='bold'><a class='alink'>Gaetan Wonkoue Yossa</a>.</span><br><br>Je suis étudiant en Data Science et Developpement chez <span class='bold'>Open IT 👨🏻‍💻📚</span><br><br>Je suis impatient de connaître les opportunités de carrière potentielles, donc je serais heureux de discuter des offres d'emploi dans le domaine de la data et du dévéloppement.<br><br>écrire <span class='bold'>'aide'</span> pour mieux me connaitre.<br>");
            }, 2000);
            break;
        case "aide":
            sendTextMessage("<span class='sk'>Envoyez un mot-clé pour obtenir ce que vous voulez savoir sur moi...<br>ex<br><span class='bold'>'skills'</span> - pour connaitre mes compétences<br><span class='bold'>'resume'</span> - pour télécharger mon CV<br><span class='bold'>'education'</span> - pour avoir mon parcours scolaire<br><span class='bold'>'address'</span> - pour avoir mon adresse<br><span class='bold'>'contact'</span> - pour obtenir des moyens de communiquer avec moi<br><span class='bold'>'projects'</span> - pour avoir les détails de mon parcours<br><span class='bold'>'clear'</span> - pour supprimer la conversation<br><span class='bold'>'about'</span> - pour connaitre ce site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>Je poursuis actuellement des études de Bachelor en Developpement informatique.<br><br>J'écris du code confortablement dans les langages suivants :<br><span class='bold'>Python<br>C<br>PHP<br>Javascipt<br>CSS<br>HTML</span><br><br>J'ai utilisé dans ma carrière les frameworks suivants :<span class='bold'><br>Symphony<br>ReactJs<br>Django</span><br><br>J'utilise <span class='bold'>Windows 11</span> comme SE sur mon LENOVO 11eme Génération Intel(R) core(TM) i7-1165G7 <br>OS:Windows 11 Famille 64 Bits<br>mon IDE Favoris:VSCode</span>");
            break;

        case "education":
            sendTextMessage("Je suis actuellement en train d'effectuer un parcours de type Bachelor en Developpement informatique<br>Année d'obtention du diplome :2023-2024<br><br>J'ai validé mon Baccalaureat scientifique<br>Année:2019<br>Moyenne:13.24/20 Mention Assez-bien<br><br>J'ai terminé mes etudes secondaires dans une école locale connue sous le nom de FKN.");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 Ce site Web de portfolio est construit à l'aide de HTML, CSS et JavaScript de SCRATCH!<br><br>👨🏻‍💻 Designé et dévéloppé par  <a class='alink' target='_blank' href='https:\/\/instagram.com/g.a.e.ta.n_m.h.d/'><span class='bold'>Gaetan Yossa</a> avec le ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("Vous voulez voir mes projets? Allez-y juste faire un tour dans mon compte GITHUB.<br><br><div class='social'><a target='_blank' href='https://github.com/gaetanyossa'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Je ne vous comprends pas...😢<br>écrivez 'aide' pour en savoir plus sur l'utilisation de l'application.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
