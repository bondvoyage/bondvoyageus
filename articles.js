const client = contentful.createClient({
  space: 'YOUR_SPACE_ID',
  accessToken: 'YOUR_ACCESS_TOKEN'
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
