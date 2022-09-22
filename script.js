let arrayStudent;
let arrayData = [];
let objData = {};
// let form = document.createElement("form");

let formStudent = document.querySelector(".form-student");
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let secondName = document.getElementById("secondName");
let birthday = document.getElementById("birthday");
let yearOfStudy = document.getElementById("yearOfStudy");
let faculty = document.getElementById("faculty");
let button = document.querySelector(".formButton")
let student = document.querySelector(".student")
let facultyColumn = document.querySelector(".facultyColumn")
let birthdaySort = document.querySelector(".birthdaySort")
let StudySort = document.querySelector(".StudySort")
let table = document.querySelector(".table")

//
let filterFaculty = document.getElementById("filterFaculty");
let filterFacultyBtn = document.querySelector(".filterFacultyBtn")

let filterFIO = document.getElementById("filterFIO")
let filterFioBtn = document.querySelector(".filterFioBtn")

let filterBirthday = document.getElementById("filterBirthday")
let filterBirthdayBtn = document.querySelector(".filterBirthdayBtn")

let filterStudy = document.getElementById("filterStudy")
let filterStudyBtn = document.querySelector(".filterStudyBtn")
//

let tBody = document.createElement('tbody')
let studentData = document.createElement('tr');

let studentName = document.createElement('td');
let studentFaculty   = document.createElement('td');
let studentBirthday = document.createElement('td');
let studentYearEducation = document.createElement('td');


let fields = document.querySelectorAll(".field")
let lab = document.querySelectorAll(".lab")
let birthdayError = document.querySelector(".birthday")
let studyError = document.querySelector(".yearOfStudy")

let proba = document.querySelector(".proba")

let birthdayText = document.createElement('p');
let studyText =  document.createElement('p');

tBody.id = "tableData";

let realtime = new Date
realtime = realtime.getFullYear()


console.log(name)
console.log(surname)
console.log(secondName)
console.log(birthday)
console.log(yearOfStudy)
console.log(faculty)
console.log(button)

let addingRows = function() {

  let dataValue = birthday.value;
  let dataValueclone = new Date(birthday.value)
  console.log(dataValue)
    let kkk =   dataValue.split('-').reverse().join('.');
console.log(kkk)
console.log(typeof(kkk))
    let studentData = document.createElement('tr');
    let studentName = document.createElement('td');
    let studentFaculty   = document.createElement('td');
    let studentBirthday = document.createElement('td');
    let studentYearEducation = document.createElement('td');

function egor() {

    if (realtime - objData.yearOfStudy > 4 ){
      var egor = "закончил";

      return  (Number(objData.yearOfStudy) + 4) + " " + egor;
  } else {

    return (Number(objData.yearOfStudy) + 4) + " " + (realtime - objData.yearOfStudy) + " " + "Курс";

  }
}

    studentName.innerHTML = objData.surname + ' ' + objData.name + ' ' + objData.secondName;
    studentFaculty.innerHTML = objData.faculty;
    studentBirthday.innerHTML = objData.birthday.split('-').reverse().join('.')  +   " " + "(" + (realtime - dataValueclone.getFullYear()) + ")";
    studentYearEducation.innerHTML = objData.yearOfStudy + "-" + egor();

    console.log(typeof(realtime))

    studentData.appendChild(studentName)
    studentData.appendChild(studentFaculty)
    studentData.appendChild(studentBirthday)
    studentData.appendChild(studentYearEducation)
    tBody.append(studentData);
    table.append(tBody);

};





formStudent.addEventListener('submit', function(e){
    e.preventDefault();
    tBody.id = "tableData";


    if (birthdayText || studyText){
      birthdayText.remove();
      studyText.remove();
    }
    for (let i = 0; i < fields.length; i++){
      if (fields[i].style.border = "1px solid red") {
        fields[i].style.border = "1px solid black"
      }
    }
    let dataValue = new Date(birthday.value);
    if(dataValue.getFullYear() < 1994) {

      birthdayText.innerHTML = "Слишком старый";
      birthdayText.style.color = "red";
      birthdayText.style.textAlign = "center"
      birthdayText.style.margin = "0px"

      birthdayError.fillText = "center"
      birthdayError.before(birthdayText);
      fields[3].style.border = "1px solid red";
      console.log(dataValue.getFullYear())
    }
    console.log(yearOfStudy.value)
    if( yearOfStudy.value !== "") {

      if (isNaN(yearOfStudy.value) || yearOfStudy.value <  2000 ) {
      studyText.innerHTML = "Слишком поздно закончили или вы написали буквы";
      studyText.style.color = "red";
      studyText.style.textAlign = "center"
      studyText.style.margin = "0px"

      studyError.before(studyText);
      fields[4].style.border = "1px solid red";
    }
    }

    for( let i = 0; i < fields.length; i++) {
      if(!fields[i].value) {
        fields[i].style.border = "1px solid red";
      }


    }

    if (name.value && surname.value && secondName.value && faculty.value && birthday.value && yearOfStudy.value && dataValue.getFullYear() > 1900
        && yearOfStudy.value >= 2000 && !isNaN(yearOfStudy.value)) {
      birthdayText.remove();
      studyText.remove();




      objData = {
        name: name.value,
        surname: surname.value,
        secondName: secondName.value,
        faculty: faculty.value,
        birthday: birthday.value,
        yearOfStudy: yearOfStudy.value
      }


      arrayData.push(objData);

      console.log(objData)

      console.log(arrayData);


      addingRows();

      name.value = ""
      surname.value =""
      secondName.value = ""
      faculty.value =""
      yearOfStudy.value = ""
      birthday.value=""



    }


})

function addingListToTable (arrayRequired){
for( let i = 0; i < arrayRequired.length; i++ ){
    objData = arrayRequired[i]


    let dataValues = new Date (objData.birthday)



    let studentData = document.createElement('tr');
    let studentName = document.createElement('td');
    let studentFaculty   = document.createElement('td');
    let studentBirthday = document.createElement('td');
    let studentYearEducation = document.createElement('td');
      function egor() {


        if (realtime - objData.yearOfStudy > 4 ){
          var egor = "закончил";
          return  (Number(objData.yearOfStudy) + 4) + " " + egor;
      } else {
        return (Number(objData.yearOfStudy) + 4) + " " + (realtime - objData.yearOfStudy) + " " + "Курс";

      }
      }

        studentName.innerHTML = objData.surname + ' ' + objData.name + ' ' + objData.secondName;
        studentFaculty.innerHTML = objData.faculty;
        studentBirthday.innerHTML = objData.birthday.split('-').reverse().join('.')  +   " " + "(" + (realtime - dataValues.getFullYear()) + ")";
        studentYearEducation.innerHTML = objData.yearOfStudy + "-" + egor();


        studentData.appendChild(studentName)
        studentData.appendChild(studentFaculty)
        studentData.appendChild(studentBirthday)
        studentData.appendChild(studentYearEducation)
        tBody.append(studentData);
        table.append(tBody);
  }
}

student.addEventListener('click', function(){
  function SortArray(x, y){
    return x.surname.localeCompare(y.surname);
  }
arrayData.sort(SortArray)
  console.log(arrayData)

  let tbody = document.getElementById('tableData');

    tbody.innerHTML ="";
    addingListToTable(arrayData);
  })

  facultyColumn.addEventListener('click', function(){
    function SortArray(x, y){
      return x.faculty.localeCompare(y.faculty);
    }
  arrayData.sort(SortArray)
  console.log(arrayData)
  console.log(arrayData)

  let tbody = document.getElementById('tableData');

    tbody.innerHTML ="";
    addingListToTable(arrayData);

  })

  birthdaySort.addEventListener("click", function(){

    function sortFunction(a,b){
      console.log(a.birthday)
      console.log(b.birthday)

      return Date.parse(a.birthday) - Date.parse(b.birthday)

  };
  arrayData.sort(sortFunction);

  let tbody = document.getElementById('tableData');
   tbody.innerHTML ="";
  console.log(arrayData)

addingListToTable(arrayData);


  })

  StudySort.addEventListener("click", function(){
    function sortFunction (a,b) {
      return a.yearOfStudy - b.yearOfStudy ;
    }
    arrayData.sort(sortFunction)

    let tbody = document.getElementById('tableData');
    tbody.innerHTML ="";
    addingListToTable(arrayData);

    console.log(arrayData)
  })


filterFacultyBtn.addEventListener("click", function(){
  const filterValues = (name) => {
    return arrayData.filter(data => {
        return data.faculty.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
  }
  let tbody = document.getElementById('tableData');
   tbody.innerHTML ="";
   addingListToTable(filterValues(filterFaculty.value));
});


filterFioBtn.addEventListener("click", function(){
  const filterValues = (name) => {
    return arrayData.filter(data => {
        return data.surname.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
  }
  console.log(filterValues(filterFIO.value));
  let tbody = document.getElementById('tableData');
   tbody.innerHTML ="";
   addingListToTable(filterValues(filterFIO.value));
});



filterBirthdayBtn.addEventListener("click", function(){

  let adults =  arrayData.filter(member => member.birthday.substr(0, 4) == filterBirthday.value)
  let tbody = document.getElementById('tableData');
   tbody.innerHTML ="";
   addingListToTable(adults);
});

filterStudyBtn.addEventListener("click", function(){
  let adults =  arrayData.filter(member => member.yearOfStudy == filterStudy.value)
  let tbody = document.getElementById('tableData');
   tbody.innerHTML ="";
   addingListToTable(adults);
});
