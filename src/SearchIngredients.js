import React, { Component } from "react";
import Axios from "axios";
import { Card } from "react-bootstrap";
import Header from "./Header";
import "./SearchIngredients.css";
class SearchIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDrinks: null,
      param: "",
      filter: false,
      clickedCard: "",
      allFilter: null,
      fill: null,
      result:false
    };
  }

  search = (params) => {
    if (params.length >= 3) {
      this.handleFilter("clear");
      Axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + params
      )
        .then((data) => {
          console.log(data.data.drinks);
          this.setState({
            allDrinks: data.data.drinks,
            filter: false,
            param: params,
          });
        })

        .catch((err) => console.log(err));
    } else {
      this.setState({ allDrinks: null, filter: false });
    }
  };
  handleFilter = (key) => {
    const { allDrinks } = this.state;
    if (key === "clear") {
      this.setState({ allDrinks: allDrinks, filter: false, fill: null });
    } else {
      this.setState({ filter: false });
      Axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?" + key)
        .then((data) => {
          this.setState({ allFilter: data.data.drinks }, () => {
            const { allFilter } = this.state;
            let filteredData = [];
            for (let i = 0; i < allFilter.length; i++) {
              for (let j = 0; j < allDrinks.length; j++) {
                if (allFilter[i].strDrink == allDrinks[j].strDrink) {
                  filteredData.push(allFilter[i]);
                }
              }
            }
            this.setState({ fill: filteredData, filter: false });
          });
        })

        .catch((err) => console.log(err));
    }
  };
  handleClick = (item) => {
    this.setState({ clickedCard: item.strDrink }, () => {
      Axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
          item.strDrink
      ).then((res) =>
        this.setState({ allDrinks: res.data.drinks, filter: true })
      );
    });
  };
  render() {
    const data = this.state.fill ? this.state.fill : this.state.allDrinks;
    return (
      <div>
        <Header
          search={(param) => this.search(param)}
          handleFilter={(key) => this.handleFilter(key)}
        />

        {data ? (
          data.map((item, i) => {
            return (
              <Card
                key={i}
                style={{ width: "18rem" }}
                onClick={() => this.handleClick(item)}
              >
                <Card.Img
                  className="drinkimg"
                  alt="drinkimg"
                  variant="top"
                  src={item.strDrinkThumb}
                />
                <Card.Body>
                  <Card.Text>
                    <>
                      <h6>Drink: {item.strDrink}</h6>
                      {!this.state.filter && (
                        <p style={{ color: "blue" }}>Click for details</p>
                      )}

                      {this.state.filter && (
                        <div>
                          <p>
                            <b>Glass:</b> {item.strGlass}
                          </p>
                          <ul>
                            <h6>Ingredients</h6>

                            {item.strIngredient1 && (
                              <li>{item.strIngredient1}</li>
                            )}
                            {item.strIngredient2 && (
                              <li>{item.strIngredient2}</li>
                            )}
                            {item.strIngredient3 && (
                              <li>{item.strIngredient3}</li>
                            )}
                            {item.strIngredient4 && (
                              <li>{item.strIngredient4}</li>
                            )}
                            {item.strIngredient5 && (
                              <li>{item.strIngredient5}</li>
                            )}
                          </ul>
                        </div>
                      )}
                    </>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <h4 className="mt-4">Please enter valid keyword..!</h4>
        )}
        {data && data.length == 0 && <h4>No result found</h4>}
      </div>
    );
  }
}

export default SearchIngredients;
