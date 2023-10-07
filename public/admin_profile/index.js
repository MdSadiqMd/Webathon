let requestCardMsg=document.getElementById("requestchange");
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

// fs.writeFile("./data_req_faculty.json", JSON.stringify(users), (err) => {
//     if (err) {
//       return res.status(500).json({ error: "Error saving user data" });
//     }
//     return res.status(201).json({ status: "success", id: newUserId });
//   });
let table=document.createElement('table')
table.classList.add("table-Style")
let tr1=document.createElement('tr')
tr1.classList.add("row-head")
let th1=document.createElement('th')
th1.textContent="Faculty Name"
let th2=document.createElement('th')
th2.textContent="Room No"
let th3=document.createElement('th')
th3.textContent="Timing"
tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
tr1.classList.add("row-head-style")

function create_room_ele(eachRoom){
    let tr2=document.createElement('tr')
    let td1=document.createElement('td')
    td1.textContent=eachRoom["faculty_name"]
    let td2=document.createElement('td')
    td2.textContent=eachRoom["room_no"]
    let td3=document.createElement('td')
    td3.textContent=eachRoom["timings"]
    tr2.appendChild(td1)
    tr2.appendChild(td2)
    tr2.appendChild(td3)
    tr2.classList.add("row-head-style")
    
    table.appendChild(tr2)

    
}

let roomList=document.getElementById("room-list");

let roomListMsg=document.getElementById("roomList-para")
let roomsListCount=0

if (roomsListCount!=0){
    roomListMsg.textContent="No rooms to allote"
}else{
    let roomsArray=[{"faculty_name":"Bitchip","room_no":247,"timings":"2:10 PM"},
    {"faculty_name":"Wrapsafe","room_no":217,"timings":"2:19 PM"}]

    table.appendChild(tr1)
    roomList.appendChild(table)
    for (let eachRoom of roomsArray){
        create_room_ele(eachRoom)
    }
}