function scrollToSec(sectionId){
    const sec=document.getElementById(sectionId);
    if (sec){
        sec.scrollIntoView({behaviour:"smooth"})
    }
}
function toggle(){
    const element=document.body;
    element.classList.toggle("dark-mode");
}