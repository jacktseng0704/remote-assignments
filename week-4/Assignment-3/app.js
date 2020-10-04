const Nav = () => {
  return (
    <nav>
    <div className="title">
      <label className="logo"> Website Title/ Logo</label>
    </div>
    <Items />
  </nav>
  );
}

const Items = () => {
  return (
    <div className="items">
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>

      <ul>
        <button className="close-btn">X</button>

        <li className="active"><a href="#">item 1</a></li>
        <li><a href="#">item 2</a></li>
        <li><a href="#">item 3</a></li>
        <li><a href="#">item 4</a></li>
      </ul>
    </div>
  )
}

const SectionMsg = () => {
  return (
    <section className="msg">
      <h2 id="welcome-msg">Welcome message</h2>
    </section>
  )
}

const Boxes = () => {
  return (
    <section className="boxes">
    <h3>Section Title</h3>

    <div className="content-box">
      <div className="box box-1">Content Box 1</div>
      <div className="box box-2">Content Box 2</div>
      <div className="box box-3">Content Box 3</div>
      <div className="box box-4">Content Box 4</div>
    </div>

  </section>
  )
}

class Button extends React.Component{
  // showContent() {
  //     console.log('點了點了點了')
  // }

  render(){
      return <input className="CTA" type="button" onClick={this.showContent} 
              value="Call to Action" />
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      hiddenbox: false
    }
  }
  handleClick(){
    this.setState({hiddenbox: !this.state.hiddenbox})
  }

  renderButtons(){
    return <input className="CTA" type="button" onClick={this.handleclick} 
    value="Call to Action" />
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <SectionMsg />
        <Boxes />
        {this.renderButtons()}
        <Boxes/>
  
      </div>
    );
  }
}



ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
