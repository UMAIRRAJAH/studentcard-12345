


function addData() {
      var studentId = document.getElementById("studentID");

      var studentName = document.getElementById("stdName");
      var studentFName = document.getElementById("fName");
      var studentClass = document.getElementById("stdClass");
      var studentCell = document.getElementById("stdContact");

      var studentIdd = document.getElementById("stdID");
      var textp1 = document.createElement("p");
      var textpp1 = document.createTextNode(studentIdd.value);
      textp1.appendChild(textpp1);
      studentIdd.setAttribute("style", " border:none;  font-size:12px;");
      studentIdd.appendChild(textp1);
      studentId.appendChild(studentIdd);

      var studentname = document.getElementById("studentnam");
      var textp2 = document.createElement("p");
      var textpp2 = document.createTextNode(studentname.value);
      textp2.appendChild(textpp2);
      studentName.setAttribute("style", "border:none;  font-size:12px;")
      studentName.appendChild(textp2);
      studentname.appendChild(studentName);

      var studentfather = document.getElementById("studentfather");
      var textp3 = document.createElement("p");
      var textpp3 = document.createTextNode(studentfather.value);
      textp3.appendChild(textpp3);
      studentFName.setAttribute("style", " border:none;  font-size:12px;")
      studentFName.appendChild(textp3);
      studentfather.appendChild(studentFName);

      var studentClass1 = document.getElementById("studentClass");
      var textp4 = document.createElement("p");
      var textpp4 = document.createTextNode(studentClass.value);
      textp4.appendChild(textpp4);
      studentClass.setAttribute("style", " border:none;  font-size:12px;")
      studentClass.appendChild(textp4);
      studentClass1.appendChild(studentClass);

      var studentEmergency = document.getElementById("emergency");
      var textp5 = document.createElement("p");
      var textpp5 = document.createTextNode(studentEmergency.value);
      textp5.appendChild(textpp5);
      studentCell.setAttribute("style", " border:none;  font-size:12px;")
      studentCell.appendChild(textp5);
      studentEmergency.appendChild(studentCell);
}

var loadFile = function (event) {
      var image = document.getElementById('output');
      image.src = URL.createObjectURL(event.target.files[0]);
};


