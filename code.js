function enterData() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var inputSheet = ss.getSheetByName("Input");
    var dataSheet = ss.getSheetByName("Data");
  
    // Read the values from the Input sheet
    var rollNumber = inputSheet.getRange("D5").getValue();
    var name = inputSheet.getRange("D7").getValue();
    var grade = inputSheet.getRange("D9").getValue();
    var gender = inputSheet.getRange("D11").getValue();
    var admissionDate = inputSheet.getRange("D13").getValue();
    var remarks = inputSheet.getRange("D15").getValue();
    var operatorName = inputSheet.getRange("F3").getValue();
  
    // Check if all cells have values
    if (!rollNumber || !name || !grade || !gender || !admissionDate || !remarks) {
      SpreadsheetApp.getUi().alert('Please ensure all input fields have data.');
      return;
    }
  
    // Check for duplicate roll number in Data sheet
    var dataRange = dataSheet.getDataRange().getValues();
    for (var i = 0; i < dataRange.length; i++) {
      if (dataRange[i][0] == rollNumber) {
        SpreadsheetApp.getUi().alert('Roll number exists.');
  
        // Populate the Input fields with existing data
        inputSheet.getRange("D5").setValue(dataRange[i][0]);
        inputSheet.getRange("D7").setValue(dataRange[i][1]);
        inputSheet.getRange("D9").setValue(dataRange[i][2]);
        inputSheet.getRange("D11").setValue(dataRange[i][3]);
        inputSheet.getRange("D13").setValue(dataRange[i][4]);
        inputSheet.getRange("D15").setValue(dataRange[i][5]);
  
        return;
      }
    }
  
    // Enter the data into the next available row in the Data sheet
    var nextRow = dataSheet.getLastRow() + 1;
    dataSheet.getRange(nextRow, 1).setValue(rollNumber);
    dataSheet.getRange(nextRow, 2).setValue(name);
    dataSheet.getRange(nextRow, 3).setValue(grade);
    dataSheet.getRange(nextRow, 4).setValue(gender);
    dataSheet.getRange(nextRow, 5).setValue(admissionDate);
    dataSheet.getRange(nextRow, 6).setValue(remarks);
    dataSheet.getRange(nextRow, 7).setValue(operatorName);
    dataSheet.getRange(nextRow, 8).setValue(new Date());
  
    // Display success message
    SpreadsheetApp.getUi().alert('New data entered.');
  }
  
  
  function searchData() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var inputSheet = ss.getSheetByName("Input");
    var dataSheet = ss.getSheetByName("Data");
  
    var rollNumber = inputSheet.getRange("D5").getValue();
  
    // Check if roll number field is empty
    if (!rollNumber) {
      SpreadsheetApp.getUi().alert('Enter a roll number.');
      return;
    }
  
    var dataRange = dataSheet.getDataRange().getValues();
    var found = false;
  
    for (var i = 0; i < dataRange.length; i++) {
      if (dataRange[i][0] == rollNumber) {
        found = true;
        inputSheet.getRange("D7").setValue(dataRange[i][1]);
        inputSheet.getRange("D9").setValue(dataRange[i][2]);
        inputSheet.getRange("D11").setValue(dataRange[i][3]);
        inputSheet.getRange("D13").setValue(dataRange[i][4]);
        inputSheet.getRange("D15").setValue(dataRange[i][5]);
        break;
      }
    }
  
    if (!found) {
      SpreadsheetApp.getUi().alert('Roll number not found.');
    }
  }
  
  
  function updateData() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var inputSheet = ss.getSheetByName("Input");
    var dataSheet = ss.getSheetByName("Data");
  
    var rollNumber = inputSheet.getRange("D5").getValue();
  
    var dataRange = dataSheet.getDataRange().getValues();
    var found = false;
  
    for (var i = 0; i < dataRange.length; i++) {
      if (dataRange[i][0] == rollNumber) {
        found = true;
        dataSheet.getRange(i + 1, 2).setValue(inputSheet.getRange("D7").getValue());
        dataSheet.getRange(i + 1, 3).setValue(inputSheet.getRange("D9").getValue());
        dataSheet.getRange(i + 1, 4).setValue(inputSheet.getRange("D11").getValue());
        dataSheet.getRange(i + 1, 5).setValue(inputSheet.getRange("D13").getValue());
        dataSheet.getRange(i + 1, 6).setValue(inputSheet.getRange("D15").getValue());
        break;
      }
    }
  
    if (found) {
      SpreadsheetApp.getUi().alert('Entry updated.');
    } else {
      SpreadsheetApp.getUi().alert('Roll number not found.');
    }
  }
  
  
  
  function clearCells() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var inputSheet = ss.getSheetByName("Input");
  
    inputSheet.getRange("D5").clear();
    inputSheet.getRange("D7").clear();
    inputSheet.getRange("D9").clear();
    inputSheet.getRange("D11").clear();
    inputSheet.getRange("D13").clear();
    inputSheet.getRange("D15").clear();
  }
  
  
  
  
  