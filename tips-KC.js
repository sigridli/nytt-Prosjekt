function visGruppe() {
    var valgt = document.getElementById("tips_valg");
    var kategori = valgt.options[valgt.selectedIndex].value; 
    var sections = document.getElementsByTagName("section");

    for (i = 0; i < sections.length; i++) {
        if (sections[i].classList.contains(kategori)) {
            sections[i].style.display = "flex";
        } else {
            sections[i].style.display = "none";
        }
    }    
}