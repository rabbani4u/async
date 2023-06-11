const handleButton = () => {
  const url = `https://randomuser.me/api/?gender=female`;
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.results[0]));
};
handleButton();

const handleAsyncButton = async () => {
  const url = `https://randomuser.me/api/?gender=female`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results[0]);
};
handleAsyncButton();
