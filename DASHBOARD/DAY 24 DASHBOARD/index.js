var selectedRow = null;

    document.getElementById('storeForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var formData = readFormData();
      if (selectedRow == null) {
        insertNewRecord(formData);
      } else {
        updateRecord(formData);
      }
      resetForm();    
    });

    function readFormData() {
      var formData = {};
      formData["ID"] = document.getElementById("ID").value;
      formData["NAME"] = document.getElementById("NAME").value;
      formData["ADD"] = document.getElementById("ADD").value;
      var photoInput = document.getElementById("PHOTO");
      formData["PHOTO"] = photoInput.files.length > 0 ? photoInput.files[0] : null;
      return formData;
    }

    function insertNewRecord(data) {
      var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.length);
      cell1 = newRow.insertCell(0);
      cell1.innerHTML = data.ID;
      cell2 = newRow.insertCell(1);
      cell2.innerHTML = data.NAME;
      cell3 = newRow.insertCell(2);
      cell3.innerHTML = data.ADD;
      cell4 = newRow.insertCell(3);
      if (data.PHOTO) {
        var reader = new FileReader();
        reader.onload = function(event) {
          var img = document.createElement('img');
          img.src = event.target.result;
          cell4.appendChild(img);
        };
        reader.readAsDataURL(data.PHOTO);
      } else {
        cell4.innerHTML = "No Photo";
      }
      cell5 = newRow.insertCell(4);
      cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
    }

    function onEdit(td) {
      selectedRow = td.parentElement.parentElement;
      document.getElementById("ID").value = selectedRow.cells[0].innerHTML;
      document.getElementById("NAME").value = selectedRow.cells[1].innerHTML;
      document.getElementById("ADD").value = selectedRow.cells[2].innerHTML;
     document.getElementById("PHOTO").value=selectedRow.cells[3].innerHTML;
    }

    function updateRecord(formData) {
      selectedRow.cells[0].innerHTML = formData.ID;
      selectedRow.cells[1].innerHTML = formData.NAME;
      selectedRow.cells[2].innerHTML = formData.ADD;
      selectedRow.cells[3].innerHTML=formData.PHOTO;
      
    }

    function onDelete(td) {
      if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
      }
    }

    function resetForm() {
      document.getElementById("ID").value = '';
      document.getElementById("NAME").value = '';
      document.getElementById("ADD").value = '';
      document.getElementById("PHOTO").value = '';
      selectedRow = null;
    }