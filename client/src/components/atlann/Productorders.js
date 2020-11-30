import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Row,
  Col,
} from "reactstrap";

export default function Productorders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Request Orders</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="mt-4">
          <h5 className="primary text-bold-600">Active Sprints</h5>
          <hr />
          <Row>
            <Col>
              <h5 className="text-bold-600">Taxonomy Tools</h5>
              <p>Comment About Taxonomy Tool</p>
            </Col>
            <Col className="pull-right">
              <Button.Ripple color="success round" style={{ float: "right" }}>
                Success
              </Button.Ripple>
            </Col>
          </Row>
          <hr />
          <h5 className="text-bold-600">Insight API</h5>
          <hr />
          <h5 className="text-bold-600 success">Backlog</h5>
          <hr />
          <h5 className="text-bold-600">Taxonomy Tools</h5>
          <p>Comment About Taxonomy Tool</p>
        </div>
      </CardBody>
    </Card>
  );
}
