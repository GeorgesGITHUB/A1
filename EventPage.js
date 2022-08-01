loadEvent();

var eventData; //{name,datetime,location,description,color}
function loadEvent(){
    var id = 'currentID';
    
    if ( idExist(id) ) {
        
        eventData = JSON.parse(
            //Very specific data topology trick to always track currentID 
            localStorage.getItem(
                localStorage.getItem(id)
            )
        );

        writeTitle();
        writeDate();
        writeTime();
        writeLocation();
        writeDescription();
        writeBackgroundColor();

    } else {
        //This triggering means there's an error w/ the input to 'currentID'
        window.alert('Please use the Event Creation Form before accessing an Event');
    }

}

function writeTitle(){
    document.getElementById('name').innerHTML = eventData.name;
}

function writeDate(){
    document.getElementById('date').innerHTML = eventData.date;
}

function writeTime(){
    document.getElementById('time').innerHTML = eventData.time;
}

function writeLocation(){
    document.getElementById('location').innerHTML = eventData.location;
}

function writeDescription(){
    document.getElementById('description').innerHTML = eventData.description;
}

function writeBackgroundColor(){
    document.body.style.backgroundColor = eventData.color;
}

function idExist(id){ return localStorage.getItem(id)!==null }