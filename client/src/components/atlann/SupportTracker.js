import React from "react";
import Chart from "react-google-charts";

import { connect } from "react-redux";

import { getAllProducts } from "../../redux/actions/product";

import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

class SupportTracker extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            Active Sprints Gantt Chart
            <h6 style={{ color: "rgb(184, 194, 204" }}>Last 6 Months</h6>
          </CardTitle>
        </CardHeader>

        <CardBody>
          {this.props.products && this.props.products.gantt && (
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
                  // { type: "date", label: "Resource" },
                  // { type: "date", label: "Start Date" },
                  // { type: "date", label: "End Date" },
                  // { type: "number", label: "Duration" },
                  // { type: "number", label: "Percent Complete" },
                  // { type: "string", label: "Dependencies" },
                ],
                ...this.props.products.gantt.map((item) => [
                  item.toolName.epic.name,
                  item.toolName.name,
                  // new Date(item.startDate),
                  // new Date(item.endDate),
                  // 10,
                ]),
                // [
                //   "2014Spring",
                //   "Taxonomy",
                //   "spring",
                //   new Date(2014, 2, 22),
                //   new Date(2014, 5, 20),
                //   null,
                //   100,
                //   null,
                // ],
                // [
                //   "2014Summer",
                //   "UserHub",
                //   "summer",
                //   new Date(2014, 5, 21),
                //   new Date(2014, 8, 20),
                //   null,
                //   100,
                //   null,
                // ],
                // [
                //   "2014Autumn",
                //   "Insight",
                //   "autumn",
                //   new Date(2014, 8, 21),
                //   new Date(2014, 11, 20),
                //   null,
                //   100,
                //   null,
                // ],
                // [
                //   "2014Winter",
                //   "Planning",
                //   "winter",
                //   new Date(2014, 11, 21),
                //   new Date(2015, 2, 21),
                //   null,
                //   100,
                //   null,
                // ],
                // [
                //   "2015Spring",
                //   "Media Library",
                //   "spring",
                //   new Date(2015, 2, 22),
                //   new Date(2015, 5, 20),
                //   null,
                //   50,
                //   null,
                // ],
              ]}
              options={{
                height: 400,
                gantt: {
                  trackHeight: 30,
                },
              }}
              rootProps={{ "data-testid": "2" }}
            />
          )}
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    isFetching: state.products.isFetching,
    error: state.products.error,
  };
};

export default connect(mapStateToProps, null)(SupportTracker);
