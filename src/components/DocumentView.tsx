import { Typography } from "@mui/material";
import React from "react";

function DocumentRegion({reports}) {

  return (
    <div>
        <Typography variant="h2" gutterBottom>
            Document list </Typography>
      {reports &&
        reports.map((report, index) => (
          <div key={index}>
            <p>{report.content.substring(0, 50)}</p>
          </div>
        ))}
      
    </div>
  );
}

export default DocumentRegion;