const client = contentful.createClient({
  space: 'wrr72jjvus6o',
  accessToken: 'PmMbpzFsJtzPgmqkKg0au7UMhsyialtZxYulNwZXI74'
});

const container = document.getElementById('articles');
const category = container.dataset.category; 

client.getEntries({
  content_type: 'article',
  'fields.category': category
})
.then(response => {
  response.items.forEach(item => {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    articleDiv.innerHTML = `
      <h2>${item.fields.title}</h2>
      <p>${item.fields.body}</p>
      <a href="${item.fields.url || '#'}">Read more</a>
      <hr>
    `;

    container.appendChild(articleDiv);
  });
})
.catch(err => console.error('Error fetching articles:', err));
