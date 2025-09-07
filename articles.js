const client = contentful.createClient({
  space: 'wrr72jjvus6o',
  accessToken: 'PmMbpzFsJtzPgmqkKg0au7UMhsyialtZxYulNwZXI74'
});

client.getEntries({
  content_type: 'article',
  'fields.category': 'Stocks'
})
.then((response) => {
  const container = document.getElementById('articles');
  response.items.forEach((item) => {
    const articleDiv = document.createElement('div');
    articleDiv.innerHTML = `
      <h2>${item.fields.title}</h2>
      <p>${item.fields.body}</p>
    `;
    container.appendChild(articleDiv);
  });
})
.catch(console.error);
