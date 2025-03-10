const kenttä = document.getElementById("tekstisyöte");
const lisätyt = document.getElementById("lista");
const toggleListaBtn = document.getElementById("toggleLista");





toggleListaBtn.textContent = "Piilota lista"; 

toggleListaBtn.addEventListener("click", function(event) {
    event.preventDefault();  

    
    lisätyt.classList.toggle("hidden");

    
    if (lisätyt.classList.contains("hidden")) {
        toggleListaBtn.textContent = "Näytä lista";
    } else {
        toggleListaBtn.textContent = "Piilota lista";
    }
});








function lisää(){
    
    let tekstisyöte = document.querySelector('#tekstisyöte').value;
    console.log(tekstisyöte);
    event.preventDefault();
    
    if (tekstisyöte.value == ''){
        kenttä.classList.add("error");
        alert("Kenttä ei voi olla tyhjä!!!");
        return;

    }else if (tekstisyöte.length < 3){
        kenttä.classList.add("error");
        alert("Kenttään on kirjoitettava vähintään kolme kirjainta sisältäviä sanoja!!!")
        return;   
    }else if (tekstisyöte.length > 30){
        kenttä.classList.add("error");
        alert("Suomenkielen pisin sana on 30 merkkiä, tarkistahan mitä kirjoitat!!!")
        return;
    }

    
    
    kenttä.classList.remove("error");

    
    let li = document.createElement("li");
    li.innerHTML = kenttä.value;
    lisätyt.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    

    kenttä.value = '';
    tallenna();
    
    

}

lisätyt.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("valmis");
        tallenna();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        tallenna();

    }
})


function tallenna(){
    localStorage.setItem("data", lisätyt.innerHTML);
}

function näytäLista(){
    lisätyt.innerHTML = localStorage.getItem("data");
}



    


näytäLista();