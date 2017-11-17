function $(id) {
  return document.getElementById(id);
}
function editCurse() {
  var MainContain = document.createElement("div");
  // נתינת id 
  MainContain.id = "MainContainNew";
MainContain.innerHTML = "name<input id='name'><br>Description<input id='description' ><br>"+
"<a href='https://www.w3schools.com/css/img_fjords.jpg'>image</a>"
  document.body.appendChild(MainContain);
}

function editStudent() {
  var MainContain = document.createElement("div");
  // נתינת id 
  MainContain.id = "MainContainNew2";
MainContain.innerHTML = "name<input id='name'><br>Phone<input id='phone' ><br>Email<input id='email' >"+
"<a href='https://www.w3schools.com/css/img_fjords.jpg'>image</a>"
  document.body.appendChild(MainContain);
}
function editStudentAndDelete() {
  var MainContain = document.createElement("div");
  // נתינת id 
  MainContain.id = "MainContainNew2";
MainContain.innerHTML = "<input type='number' name='id' id='id'><br>name<input id='name'><br>Phone<input id='phone' ><br>Email<input id='email' >"+
"<a href='https://www.w3schools.com/css/img_fjords.jpg'>image</a>"+"<br><input type='checkbox'  value='course A'>Course A<br>"
+"<input type='checkbox'  value='course B'>Course B"+"<br><input type='checkbox'  value='course C'>Course C<br>";
  document.body.appendChild(MainContain);
}

function editAdministrators() {
  var MainContain = document.createElement("div");
  // נתינת id 
  MainContain.id = "MainContainNew3";
MainContain.innerHTML = "name<input id='name'><br>Phone<input id='phone' ><br>Email<input id='email' ><br>Role<input id='role'>"+
"<br><a href='https://www.w3schools.com/css/img_fjords.jpg'>image</a>"
  document.body.appendChild(MainContain);
}

function permissionDelete(){
  alert('warning:You are deleting a student');
  loadDoc('../server/deleteStudent.php?id='+$('id').value, deleteStudent);
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
function getStudent() {
  if (this.readyState == 4 && this.status == 200) {
    $("Student").innerHTML = this.responseText;
  }
}

function deleteAdministrator() {
  if (this.readyState == 4 && this.status == 200) {
    $("Administrator").innerHTML = this.responseText;
  }
}

function deleteStudent(){
  if (this.readyState == 4 && this.status == 200) {
    $("Student").innerHTML = this.responseText;
  }
}

function addCourse() {
  if (this.readyState == 4 && this.status == 200) {
    $("Course").innerHTML = this.responseText;
  }
}
function addStudent() {
  if (this.readyState == 4 && this.status == 200) {
    $("Student").innerHTML = this.responseText;
  }
}

function addAdministrator() {
  if (this.readyState == 4 && this.status == 200) {
    $("Administrator").innerHTML = this.responseText;
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

function showStudent(str) {
  var xhttp;
  if (str.length == 0) { 
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("Student").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "../server/Student.php?"+str, true);
  xhttp.send();   
}

function updateAdministrators(str) {
  var xhttp;
  if (str.length == 0) { 
    document.getElementById("Administrator").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("Administrator").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "../server/updateAdministrator.php?"+str, true);
  xhttp.send();   
}

function enterPassword(){
  alert('enter password');
}

function CheckUsername()
 {
 
 
 var p = document.getElementById("password").value;
 var n = document.getElementById("username").value;
 if (n != "dani@liv" )
 {
  alert("enter correct email");
  
 }
 if (p != 1234)
 {
  alert("enter correct password");
  
 }

 
 } 
function  CheckAdministrator(){
 
 if (document.getElementById("username").value != "Admin@Admin" )
 {
  alert("enter correct email Administrator");
  return false;
 }
}

function  CheckOwner(){
 
 if (document.getElementById("username2").value != "owner@owner" )
 {
  alert("enter correct email owner");
  return false;
 }
}

 