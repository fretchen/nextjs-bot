import React from "react";

// Define the LeftRegion component
function LeftRegion({ reports }) {
  return (
    <div>
      <p>
        I am on the left. <br />
        One day you might be able to see uploaded documents up here.
        <br />
        The code separation really worked out.
      </p>
      {reports &&
        reports.map((report, index) => (
          <div key={index}>
            <p>{report.title}</p>
            <p>{report.content}</p>
          </div>
        ))}
    </div>
  );
}

export default LeftRegion;
