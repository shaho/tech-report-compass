import React from "react";
import Chart from "react-google-charts";

import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

export default function SupportTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Active Sprints Gantt Chart
          <h6 style={{ color: "rgb(184, 194, 204" }}>Last 6 Months</h6>
        </CardTitle>
      </CardHeader>

      <CardBody>
        {/* chart */}
        <Chart
          style={{ marginTop: "2em" }}
          width={"100%"}
          height={"400px"}
          chartType="Gantt"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: "string", label: "Task ID" },
              { type: "string", label: "Task Name" },
              { type: "string", label: "Resource" },
              { type: "date", label: "Start Date" },
              { type: "date", label: "End Date" },
              { type: "number", label: "Duration" },
              { type: "number", label: "Percent Complete" },
              { type: "string", label: "Dependencies" },
            ],
            [
              "2014Spring",
              "Taxonomy",
              "spring",
              new Date(2014, 2, 22),
              new Date(2014, 5, 20),
              null,
              100,
              null,
            ],
            [
              "2014Summer",
              "UserHub",
              "summer",
              new Date(2014, 5, 21),
              new Date(2014, 8, 20),
              null,
              100,
              null,
            ],
            [
              "2014Autumn",
              "Insight",
              "autumn",
              new Date(2014, 8, 21),
              new Date(2014, 11, 20),
              null,
              100,
              null,
            ],
            [
              "2014Winter",
              "Planning",
              "winter",
              new Date(2014, 11, 21),
              new Date(2015, 2, 21),
              null,
              100,
              null,
            ],
            [
              "2015Spring",
              "Media Library",
              "spring",
              new Date(2015, 2, 22),
              new Date(2015, 5, 20),
              null,
              50,
              null,
            ],
          ]}
          options={{
            height: 400,
            gantt: {
              trackHeight: 30,
            },
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </CardBody>
    </Card>
  );
}
