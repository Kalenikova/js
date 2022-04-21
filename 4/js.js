function createNode(element) {
  return document.createElement(element);
} //создаем

function append(parent, el) {
  return parent.appendChild(el);
} //отображение элементов

const ul = document.getElementById("people");

fetch("https://randomuser.me/api/?results=10")
  .then((resp) => resp.json()) //получение ответа в формате json
  .then(function (data) {
    //обработка json
    let people = data.results;
    return people.map(function (people) {
      let li = createNode("li");
      let img = createNode("img");
      let span = createNode("span");
      let span1 = createNode("span");
      let span2 = createNode("span");
      let span3 = createNode("span");
      let span4 = createNode("span");
      let span5 = createNode("span");
      img.src = people.picture.large;
      span.innerHTML = `<br>${people.name.first} ${people.name.last}`;
      span1.innerHTML = `<br>${people.email}`;
      span2.innerHTML = `<br>${people.gender}`;
      span3.innerHTML = `<br>${people.phone}`;
      span4.innerHTML = `<br>${people.location.city}`;
      span5.innerHTML = `<br>${people.dob.date}  ${people.dob.age} age`;
      append(li, img);
      append(li, span);
      append(li, span1);
      append(li, span2);
      append(li, span3);
      append(li, span4);
      append(li, span5);
      append(ul, li);
    });
  });
