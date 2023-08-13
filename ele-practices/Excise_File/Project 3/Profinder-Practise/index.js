const CLIENT_ID = "1062e8af61be49550a30";
const CLIENT_SECRET = "5e21d1bbe1e60666cec3c73aff8b82f4dd29de58";

async function getUser(name) {
  const res = await fetch(
    `https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  );
  const profile = await res.json();
  return profile;
}

async function getRepos(profile) {
  const res = await fetch(
    `${profile.repos_url}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&per_page=10`
  );
  const repos = await res.json();
  console.log(repos);
  return repos;
}

document.querySelector("#search").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.querySelector("#findByUsername").value;
  const profile = await getUser(username);
  const repos = await getRepos(profile);

  showUserProfile(profile);
  showRepos(repos);
  console.log(profile);
});

function showUserProfile(profile) {
  document.querySelector(".profile").innerHTML = `
    <img
            src="${profile.avatar_url}"
          />
          <p class="name">${profile.name}</p>
          <p class="username login">${profile.login}</p>
          <p class="bio">
          ${profile.bio}
          </p>

          <div class="followers-stars">
            <p>
              <ion-icon name="people-outline"></ion-icon>
              <span class="followers"> ${profile.followers} </span> followers
            </p>
            <span class="dot">·</span>
            <p><span class="following"> ${profile.following} </span> following</p>
          </div>

          <p class="company">
            <ion-icon name="business-outline"></ion-icon>
            ${profile.company}
          </p>
          <p class="location">
            <ion-icon name="location-outline"></ion-icon>${profile.location}
          </p>
          `;
}

function showRepos(repos) {
  let newHtml = "";
  for (let repo of repos) {
    newHtml += `
    <div class="repo">
    <div class="repo_name">
      <a href="${repo.html_url}">${repo.name}</a>
    </div>
    <p>
      <span class="circle"></span> ${repo.language}
      <ion-icon name="star-outline"></ion-icon> ${repo.watchers_count}
      <ion-icon name="git-branch-outline"></ion-icon> ${repo.forks_count}
    </p>
    </div>
  `;
  }
  document.querySelector(".repos").innerHTML = newHtml;
}
