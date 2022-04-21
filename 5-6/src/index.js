import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function UserAvatar(props) {
  return <img src={props.src} />;
}

function UserCard(props) {
  return (
    <div class="card">
      <UserAvatar src={props.user.picture.large} />
      <div className="userprop">Имя: {props.user.name.first}</div>
      <div className="userprop">Фамилия: {props.user.name.last}</div>
      <div className="userprop">Пол: {props.user.gender}</div>
      <div className="userprop">Город: {props.user.location.city}</div>
      <div className="userprop">Email: {props.user.email}</div>
      <div className="userprop">Телефон: {props.user.phone}</div>
    </div>
  );
}

function UserList(props) {
  return (
    <div>
      {props.users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
}

function Preloader(props) {
  const preloader_width = "60";
  const preloader_src = "https://pechibani.com/zapros_zvonka/preloader_img.gif";
  return (
    <div class="preloader">
      <img src={preloader_src} width={preloader_width} />
    </div>
  );
}

function Button(props) {
  return (
    <div class="button">
      <button onClick={props.onClick}>{props.label}</button>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "Получить",
      pushed: false
    };

    this.state.users = [];
    this.loadInfo = this.loadInfo.bind(this);
  }

  loadInfo() {
    this.setState({ pushed: true });
    let url = "https://randomuser.me/api/?results=10";
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({
          users: jsonData.results,
          pushed: false
        });
      });
  }

  render() {
    const pushed = this.state.pushed;
    return (
      <div>
        <Button label={this.state.label} onClick={this.loadInfo} />
        {pushed && <Preloader />}
        <UserList users={this.state.users} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
