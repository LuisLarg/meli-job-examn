import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Breadcrumbs from "../components/Breadcrumbs";
import ItemList from "../components/ItemList";
import ItemDetails from "../components/ItemDetails";
import * as appActions from "../actions/AppActions";

import "../styles/App.css";

class App extends Component {
  queryValue = "";

  onSubmit(e) {
    e.preventDefault();

    if (this.queryValue.length > 0) {
      this.props.appActions
        .fetchItems(this.queryValue)
        .then(() =>
          this.props.history.push(`/items?search=${this.queryValue}`)
        );
    }
  }

  onInputChange(e) {
    this.queryValue = e.target.value;
  }

  onItemClicked(itemId) {
    this.props.appActions
      .fetchItem(itemId)
      .then(() => this.props.history.push(`/items/${itemId}`));
  }

  render() {
    let { isFetchingItems } = this.props.app;
    let items = this.props.app.items.items || [];
    let categories = this.props.app.items.categories || [];
    let item = this.props.app.item.item || [];

    return (
      <div id="App">
        <SearchBox
          onSubmit={this.onSubmit.bind(this)}
          onInputChange={this.onInputChange.bind(this)}
          logoLink="//www.mercadolibre.com.ar"
        />

        {isFetchingItems ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <div className="body">
            <Breadcrumbs categories={categories} />

            <Switch>
              <Route
                exact
                path="/items"
                render={() => (
                  <ItemList
                    items={items}
                    onClickItem={this.onItemClicked.bind(this)}
                  />
                )}
              />
              <Route
                path="/items/:id"
                render={() => <ItemDetails item={item} />}
              />
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = dispatch => {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
