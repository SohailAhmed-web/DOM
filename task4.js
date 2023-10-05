function insert_Row() {
    // Get the table element by its id
    const table = document.getElementById('sampleTable');
    
    // Insert a new row at the end of the table
    const newRow = table.insertRow();

    // Insert cells in the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set the content for the new cells (you can customize this)
    cell1.innerHTML = 'New Row Cell1';
    cell2.innerHTML = 'New Row Cell2';
  }