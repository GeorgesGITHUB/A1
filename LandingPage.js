//alert("PLEASE READ : For the corrector of this assignment. Please start on this html page to navigate to the others. This is how it was intented. Visiting the other html pages out of order does not make contextual sense.");
            
function go(){
    var id = document.getElementById('eventID').value;

    if ( idExist(id) ){
          localStorage.setItem('currentID',id);
          window.location.assign('EventPage.html');
    }
    else{
          window.alert("Event ID entered does not exist");
    }

}

function idExist(id){ return localStorage.getItem(id)!==null }

function creationPage(){
    window.location.assign('EventMaker.html'); 
    return false;
}