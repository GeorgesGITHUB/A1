function saveEvent(){
    var id = generateID();
    localStorage.setItem( id, getEventData() );

    window.alert(`Your Event ID is : ${id}`)
}

function getEventData(){
    var eventData =
    {
        name: document.getElementById('name').value,
        datetime: document.getElementById('datetime').value,
        location: document.getElementById('location').value,
        description: document.getElementById('description').value,
        color: document.getElementById('color').value
    };
    
    return JSON.stringify(eventData); //Object --> String
}

function generateID(){
    var id = Math.random().toString(16).slice(2);
    
    //Generating new id if current id is already taken
    while ( localStorage.getItem(id)!==null ) 
    { id = Math.random().toString(16).slice(2);}
    
    return id; //String
}