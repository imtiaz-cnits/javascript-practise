document
  .querySelector("#date-range-filter")
  .addEventListener("click", function () {
    var startDate = $("#start-date").val();
    var endDate = $("#end-date").val();

    console.log(startDate, endDate);

    dataTable
      .columns(0) // Assuming 'Invoice Date' column is at index 2
      .search(function (date, _, columnIndex) {
        if (columnIndex === 0) {
          // Apply filter only to the 'Invoice Date' column
          var currentDateParts = date.split("-");
          var currentDate = new Date(
            currentDateParts[2],
            new Date()
              .toLocaleString("en-us", { month: "long" })
              .indexOf(currentDateParts[1]),
            currentDateParts[0]
          );

          var selectedStartDate = new Date(startDate);
          var selectedEndDate = new Date(endDate);

          return (
            currentDate >= selectedStartDate && currentDate <= selectedEndDate
          );
        }
        // else {
        //     console.log('Not Working');
        // }

        return true;
      })
      .draw();
  });
