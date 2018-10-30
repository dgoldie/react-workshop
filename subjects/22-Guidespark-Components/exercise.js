import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

const styles = {};

styles.tab = {
  display: "inline-block",
  padding: 10,
  margin: 10,
  borderBottom: "4px solid",
  borderBottomColor: "#ccc",
  cursor: "pointer"
};

styles.activeTab = {
  ...styles.tab,
  borderBottomColor: "#000"
};

styles.panel = {
  padding: 10
};

const DATA = [
  {
    id: 1,
    name: "Soccer",
    description:
      "Association football, more commonly known as football or soccer, is a team sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries and dependencies, making it the world's most popular sport."
  },
  {
    id: 2,
    name: "Baseball",
    description:
      "Baseball is a bat-and-ball game played between two opposing teams who take turns batting and fielding. The game proceeds when a player on the fielding team, called the pitcher, throws a ball which a player on the batting team tries to hit with a bat."
  },
  {
    id: 3,
    name: "Tennis",
    description:
      "Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court."
  }
];

class Tabs extends React.Component {
  state = {activeTab: 0}; // New way to set state instead of doing this:
  // constructor (props) {
  //   super(props);
  //   this.state = {activeTab: 0};
  // }
  
  onClickTab (id) {
    this.setState({activeTab: id});
  }
  
  render() {
    const { data } = this.props;
    
    return (
      <div className="Tabs">
        {data.map((item, index) => {
          return <div
            key={index}
            className="Tab"
            style={this.state.activeTab == index ? styles.activeTab : styles.tab}
            value={item.id}
            onClick={() => this.onClickTab(index) }
          >
            {item.name}
          </div>;
        })}
        <div className="TabPanel" style={styles.panel}>
          {data[this.state.activeTab].description}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  // New way to declare defaultProps
  // In case we don't pass params let's declare them data by default.
  static defaultProps = {
    sports: DATA
  };
  // New way to declare propTypes
  // Indicate which params may need this component.
  static propTypes = {
    sports: PropTypes.array
  };

  render() {
    return (
      <div>
        <h1>Sports</h1>
        <Tabs data={this.props.sports} />
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById("app"));

require("./tests").run();