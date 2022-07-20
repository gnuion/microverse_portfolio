import projectData from './data.js';
import Tags from './src/components/tags.js';

const projects = document.createElement('div');
projects.className = 'grid container';

const Article = (project) => {
  const article = document.createElement('article');
  article.className = 'card';

  const img = document.createElement('img');
  img.setAttribute('src', project.imgUrl);
  article.appendChild(img);

  const div = document.createElement('div');
  article.append(div);

  const h3 = document.createElement('h3');
  h3.innerText = project.title;
  div.append(h3);

  div.append(Tags(project.tags));

  const a = document.createElement('a');
  a.className = 'btn';
  a.innerText = 'See Project';
  a.setAttribute('href', `#${project.id}`);
  div.append(a);

  return article;
};

projectData.forEach((project) => {
  projects.appendChild(Article(project));
});

const workSection = document.body.querySelector('#work');
workSection.appendChild(projects);
