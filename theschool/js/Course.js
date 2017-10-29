function $(id) {
  return document.getElementById(id);
}
function editCurse() {
  var MainContain = document.createElement("div");
  // נתינת id 
  MainContain.id = "MainContain";
MainContain.innerHTML = "name<input id='name'><br>Description<input id='description' ><br>"+
"<a href='https://www.w3schools.com/css/img_fjords.jpg'>image</a>"
  document.body.appendChild(MainContain);
}

function loadDoc(url, functionReponse) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = functionReponse;
  xhttp.open("GET", url, true);
  xhttp.send();
}

function updateCourse() {
  if (this.readyState == 4 && this.status == 200) {
    $("Course").innerHTML = this.responseText;
  }
}

function getCourse() {
  if (this.readyState == 4 && this.status == 200) {
    $("Course").innerHTML = this.responseText;
  }
}

function deleteCourse() {
  if (this.readyState == 4 && this.status == 200) {
    $("Course").innerHTML = this.responseText;
  }
}

function addCourse() {
  if (this.readyState == 4 && this.status == 200) {
    $("Course").innerHTML = this.responseText;
  }
}


function showCourse(str) {
  var xhttp;
  if (str.length == 0) { 
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("Course").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "../server/course.php?"+str, true);
  xhttp.send();   
}
/*
function ViewCourseDetails() {
  var CourseDetails = document.createElement("div");
  // נתינת id 
  CourseDetails.id = "CourseDetails";
  
  CourseDetails.innerHTML ="Course";


  document.body.appendChild(CourseDetails);

}*/