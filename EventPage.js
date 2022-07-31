function loadEvent(){
    var id = 'currentID';
    var eventData; //{name,datetime,location,description,color}

    if ( idExist(id) ) {

        eventData = JSON.parse( localStorage.getItem(id) );

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

function idExist(id){ return localStorage.getItem(id)!==null }

function writeTitle(){
    document.getElementById('name').innerHTML = eventData.name;
}

function writeDate(){}

function writeTime(){}

function writeLocation(){
    document.getElementById('location').innerHTML = eventData.location;
}

function writeDescription(){
    document.getElementById('description').innerHTML = eventData.description;
}

function writeBackgroundColor(){}
