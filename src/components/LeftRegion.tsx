import React from "react";
import { GetStaticProps } from "next"
import prisma from '../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
  const reports = await prisma.report.findMany();
  return { 
    props: { reports }, 
    revalidate: 10 
  }
}
// Define the LeftRegion component
function LeftRegion(props) {
  console.log(props);
  return (
    <div>
      <p>
        I am on the left. <br />
        One day you might be able to see uploaded documents up here.
        <br />
        The code separation really worked out.
      </p>
      
      
    </div>
  );
}

export default LeftRegion;
