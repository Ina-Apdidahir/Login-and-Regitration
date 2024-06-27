let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));
if (!registeredUsers) {
  registeredUsers = [{
    Id : 1,
    name : 'Ali hassan',
    gender: 'Male',
    phone : 700000,
    faculty:'computer science',
    semester: 'six'
  }]
  
}
 

document.getElementById('Register').addEventListener('click', validateForm )

function validateForm() {
    const Id = document.getElementById('Id').value.trim();
    const name = document.getElementById('name').value.trim();
    const gender = document.getElementById('Gender').value.trim();
    const phone = document.getElementById('Phone').value.trim();
    const faculty = document.getElementById('Faculty').value.trim();
    const semester = document.getElementById('Semester').value.trim();


    let hasErrors = false;
    
    let errorMessages = document.querySelectorAll('.errorMessage');
    errorMessages.forEach(errorMessage => {
        errorMessage.style.opacity = 0;
    });

    if (Id === '') {
        document.getElementById('id_error').style.opacity = 1;
        hasErrors = true;
    } 

    if (name === '') {
        document.getElementById('nam_error').style.opacity = 1;
        hasErrors = true;
    }

    if (gender === '') {
        document.getElementById('gen_error').style.opacity = 1;
        hasErrors = true;
    } 

    if (phone === '') {
        document.getElementById('pho_error').style.opacity = 1;
        hasErrors = true;
    } 
    if (faculty === '') {
        document.getElementById('fac_error').style.opacity = 1;
        hasErrors = true;
    } 
    if (semester === '') {
        document.getElementById('sems_error').style.opacity = 1;
        hasErrors = true;
    } 
    


    registerUser( Id, name, gender, phone, faculty, semester );  // Call to register the user
    return true;
}



function registerUser( Id, name, gender, phone, faculty, semester ) {
    // Add the user data to the registeredUsers array
        if( Id.trim() != '' && 
            name.trim() != '' && 
            gender.trim() != '' && 
            phone.trim() != '' && 
            faculty.trim() != '' && 
            semester.trim() != ''
        ){
            registeredUsers.push({ Id, name, gender, phone, faculty, semester});
        }

    savedata()

}

   let usersList = '';

registeredUsers.forEach((regUser) =>{
    
    usersList += `
        <tr class="UsersList">
            <td>${regUser.Id}</td>
            <td>${regUser.name}</td>
            <td>${regUser.gender}</td>
            <td>${regUser.phone}</td>
            <td>${regUser.faculty}</td>
            <td>${regUser.semester}</td>
        </tr>
    `
})
document.getElementById('table').innerHTML = usersList
console.log(registeredUsers)

function savedata(){   
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
}



