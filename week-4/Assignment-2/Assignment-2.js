function ajax(src, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let product = JSON.parse(xhr.responseText);
      callback(product);
    }
  };
  xhr.open("GET", src);
  xhr.send();
}

function render(data) {
  let body = document.querySelector("body");
  for (product of data) {
    let newDiv = document.createElement("div");
    for (p in product) {
      let newP = document.createElement("p");
      let newContent = `${p}: ${product[p]}`;
      newP.append(newContent);
      newDiv.append(newP);
    }
    body.appendChild(newDiv);
  }
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response) {
  render(response);
});