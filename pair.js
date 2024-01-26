function information() {
    var fullName = document.getElementById('FullName').value
    var email = document.getElementById('email').value
    var phoneNumber = document.getElementById('PhoneNumber').value
    var address = document.getElementById('Adress').value
    var codePostal = document.getElementById('CodePostal').value
    var dateOfBirth = document.getElementById('DateOfBirth').value
    var education = document.getElementById('Education').value
    var otherEducation = document.getElementById('OtherEducation').value
    var workExperience = document.getElementById('WorkExperience').value
    var languages = document.getElementById('languages').value
    var skills = document.getElementById('Skills').value


    var cv = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        codePostal: codePostal,
        dateOfBirth: dateOfBirth,
        education: education,
        otherEducation: otherEducation,
        workExperience: workExperience,
        languages: languages,
        skills: skills
    }

    var cvJSON = JSON.stringify(cv)
    localStorage.setItem('cv', cvJSON)
    window.location.href = 'pair3.html'
}


document.addEventListener('DOMContentLoaded', information)
function displayCV() {
    var cvJSON = localStorage.getItem('cv')
    if (cvJSON) {
        var cv = JSON.parse(cvJSON)

        document.getElementById('fullName').innerText = cv.fullName
        document.getElementById('email').innerText = cv.email
        document.getElementById('phoneNumber').innerText = cv.phoneNumber
        document.getElementById('address').innerText = cv.address
        document.getElementById('codePostal').innerText = cv.codePostal
        document.getElementById('dateOfBirth').innerText = cv.dateOfBirth
        document.getElementById('education').innerText = cv.education
        document.getElementById('otherEducation').innerText = cv.otherEducation
        document.getElementById('workExperience').innerText = cv.workExperience
        document.getElementById('languages').innerText = cv.languages
        document.getElementById('skills').innerText = cv.skills

    }
}

window.addEventListener('load', displayCV)