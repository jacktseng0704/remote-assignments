const Nav = (props) => {
  return (
    <nav >
    <div className="title">
      <label className="logo"> Website Title/ Logo</label>
    </div>
    <Items show={props.show} showMenu={props.showMenu} closeMenu={props.closeMenu}/>
  </nav>
  );
}

const Items = (props) => {
  return (
    <div className="items">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn" onClick={props.showMenu}>
        <i className="fas fa-bars"></i>
      </label>

      <ul style={{display: props.show}}>
        <button className="close-btn" onClick={props.closeMenu}>X</button>

        <li className="active"><a href="#">item 1</a></li>
        <li><a href="#">item 2</a></li>
        <li><a href="#">item 3</a></li>
        <li><a href="#">item 4</a></li>
      </ul>
    </div>
  )
}


class SectionMsg extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return  <section className="msg" onClick={this.props.changeMsg}>
              <h2 id="welcome-msg">{this.props.msg}</h2>
            </section>
  }
}

const Boxes = (props) => {
  return (
    <section className={'boxes ' + props.hiddenbox}>
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
  render(){
    return <input className="CTA" type="button" onClick={this.props.handleClick}
            value="Call to Action" />
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {hiddenbox: 'hiddenbox', msg: 'Welcome message', show: ''};
    this.handleClick = this.handleClick.bind(this);
    this.changeMsg = this.changeMsg.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleClick(){
      this.setState({hiddenbox: ''});
      // console.log(this.state);
      // console.log('點了點了點了');
  }

  changeMsg(){
    this.setState({msg: "Have a Good Time!"});
    // console.log(this.state);
  }

  showMenu(){
    this.setState({show: 'inline'});
    // console.log(this.state);
  }

  closeMenu(){
    this.setState({show: 'none'});
    // console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Nav showMenu={this.showMenu} closeMenu={this.closeMenu} show={this.state.show} />
        <SectionMsg msg={this.state.msg} changeMsg={this.changeMsg}/>
        <Boxes />
        <Button handleClick={this.handleClick} />
        <Boxes hiddenbox={this.state.hiddenbox}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
