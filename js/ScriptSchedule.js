

var SelectedShift = "bgColorShift1";
var monthDaysLoading = [];
var employeeDetails =
  [
    { "EmployeeID": "0101", "Name": "John;Mathew", "Email": "jmathew@galaxe.com", "Manager": "Ford;Francis", "DateValue": null, "ShiftID": null },
    { "EmployeeID": "0102", "Name": "Micheal;Nolan", "Email": "nolan@galaxe.com", "Manager": "Ford;Francis", "DateValue": null, "ShiftID": null },
    { "EmployeeID": "0103", "Name": "Cena;John", "Email": "john@galaxe.com", "Manager": "Ford;Francis", "DateValue": null, "ShiftID": null },
    { "EmployeeID": "0104", "Name": "David;James", "Email": "james@galaxe.com", "Manager": "Ford;Francis", "DateValue": null, "ShiftID": null },
    { "EmployeeID": "0105", "Name": "Martin;Scourse", "Email": "scourse@galaxe.com", "Manager": "Ford;Francis", "DateValue": null, "ShiftID": null },
    { "EmployeeID": "0106", "Name": "Stephan;Smith", "Email": "smith@galaxe.com", "Manager": "Ford;Francis", "DateValue": null, "ShiftID": null },
    { "EmployeeID": "0107", "Name": "Jackson;Victor", "Email": "victor@galaxe.com", "Manager": "Ford;Francis", "DateValue": null, "ShiftID": null },

  ]

$(document).ready(function () {
  $("#txtIdJsonResult").val(JSON.stringify(employeeDetails));
})




$("#btnIdSubmit").on('click', function () {
  try {


    data = JSON.parse($("#txtIdJsonResult").val());

    var htmlTableResult = "";


    var keys = [];

    htmlTableResult += ("<table border=\"1\"><tr>");
    for (key in data[0]) {
      htmlTableResult += ('<td>' + key + '</td>');
    }
    htmlTableResult += ("</tr>");
    for (var i = 0; i < data.length; i++) {
      htmlTableResult += ('<tr>');
      for (key in data[i]) {
        htmlTableResult += ('<td>' + data[i][key] + '</td>');
      }
      htmlTableResult += ('</tr>');
    }
    htmlTableResult += ("</table>");

    $("#DivIdHtmlTable" ).empty();
    $("#DivIdHtmlTable").append(htmlTableResult);



  }
  catch (e) {
    console.log('Error  on submit  function');
  }
})