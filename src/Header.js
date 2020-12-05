import React from "react";
import {
  Col,
  Dropdown,
  Form,
  FormControl,
  Nav,
  Row,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">99eye</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Nav.Link href="#link">Search Drinks</Nav.Link>

            <FormControl
              autoFocus={true}
              type="text"
              placeholder="Search by ingerdient"
              className="mr-sm-2"
              onChange={(event) =>
                props.search(event.target.value.toLowerCase())
              }
            />
            <Dropdown>
              <Dropdown.Toggle id="dropdown-custom-components">
                <i
                  className="fa fa-filter"
                  style={{ fontSize: "28px", color: "red" }}
                >
                  Filter
                </i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Row>
                  <Col>
                    <Dropdown.Header>Filter by Category</Dropdown.Header>
                    <Dropdown.Item
                      onClick={() => props.handleFilter("c=Ordinary Drink")}
                    >
                      Ordinary Drink
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => props.handleFilter("c=Cocktail")}
                    >
                      Cocktail
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        props.handleFilter("c=Milk / Float / Shake")
                      }
                    >
                      Milk / Float / Shake
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => props.handleFilter("c=Cocoa")}
                    >
                      Cocoa
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => props.handleFilter("c=Shot")}>
                      Shot
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => props.handleFilter("c=Coffee / Tea")}
                    >
                      Coffee / Tea
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => props.handleFilter("c=Homemade Liqueur")}
                    >
                      Homemade Liqueur
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        props.handleFilter("c=Punch / Party Drink")
                      }
                    >
                      Punch / Party Drink
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => props.handleFilter("c=Beer")}>
                      Beer
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => props.handleFilter("c=Soft Drink / Soda")}
                    >
                      Soft Drink / Soda
                    </Dropdown.Item>
                    <Dropdown.Divider />
                  </Col>
                  <Col>
                    <Dropdown.Header>Filter by Alcholic</Dropdown.Header>
                    <Dropdown.Item
                      onClick={() => props.handleFilter("a=Alcoholic")}
                    >
                      Alcoholic
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => props.handleFilter("a=Non alcoholic")}
                    >
                      Non alcoholic
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => props.handleFilter("a=Optional alcohol")}
                    >
                      Optional alcohol
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <h5
                      style={{ cursor: "pointer" }}
                      onClick={() => props.handleFilter("clear")}
                    >
                      Clear Filter
                    </h5>
                  </Col>
                </Row>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
