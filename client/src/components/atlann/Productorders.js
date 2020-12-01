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

import { connect } from "react-redux";

import { getAllProducts } from "../../redux/actions/product";

class Productorders extends React.Component {
  render() {
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
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    isFetching: state.products.isFetching,
    error: state.products.error,
  };
};

export default connect(mapStateToProps, null)(Productorders);
