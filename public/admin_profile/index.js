let requestCardMsg=document.getElementById("requestchange");
let roomList=document.getElementById("room-list");
let requestCard=document.getElementById("request-card");
const faculty_count=100

function create_request_faculty_ele(eachFaculty){
    let facultyItem=document.createElement('li')
    facultyItem.classList.add("faculty_i")

    let facultyDiv=document.createElement('div')
    facultyDiv.classList.add("facultyDiv")

    let facultyName=document.createElement('h1')
    facultyName.textContent=eachFaculty["faculty_name"];
    facultyName.classList.add("faculty_name");

    facultyDiv.appendChild(facultyName)
    facultyItem.appendChild(facultyDiv) 

    let facultyLabel=document.createElement('span')

    

    

    if (eachFaculty["shifting_faculty_name"]!==null){
        
        facultyLabel.textContent="Swap"
        facultyLabel.classList.add("shifting_label")
    }else{
        facultyLabel.textContent="Leave"
    }

    facultyLabel.classList.add("faculty_label")
    facultyDiv.appendChild(facultyLabel)

    

    

    let btnsDiv=document.createElement('div')
    btnsDiv.classList.add("btn-Div")
    
    let btnWrong=document.createElement('button')
    btnWrong.classList.add("btn-wrong")
    btnWrong.textContent='Decline'

    let btnCorrect=document.createElement('button')
    btnCorrect.classList.add("btn-correct")
    btnCorrect.textContent="Accept"
    btnsDiv.appendChild(btnWrong)
    btnsDiv.appendChild(btnCorrect)

    facultyItem.appendChild(btnsDiv)

    requestCard.appendChild(facultyItem)

}

if (faculty_count!=0){
    console.log('Eneter Comething')
    let list_arrays=[{"faculty_name":"Barb","shifting_faculty_name":"Tin","date":"9/1/2023","room_no":228},
    {"faculty_name":"Bartholomeo","shifting_faculty_name":null,"date":"4/9/2023","room_no":224}]

    let tableRow=document.createElement('li');
    tableRow.classList.add("faculty_i_head")

    let reqAttri=document.createElement('p')
    reqAttri.textContent="Requested Faculty"
    reqAttri.classList.add("req-attri")

    

    let btnAction=document.createElement('p')
    btnAction.textContent="Action"
    btnAction.classList.add("req-attri")

    tableRow.appendChild(reqAttri)
    tableRow.appendChild(btnAction)

    requestCard.appendChild(tableRow)

    for (let eachFaculty of list_arrays){
        create_request_faculty_ele(eachFaculty)
    }
}else{
    requestCardMsg.textContent="No Faculty Requests"
}