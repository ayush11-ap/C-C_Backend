require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "ayush11-ap",
  id: 172501707,
  node_id: "U_kgDOCkgqyw",
  avatar_url: "https://avatars.githubusercontent.com/u/172501707?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/ayush11-ap",
  html_url: "https://github.com/ayush11-ap",
  followers_url: "https://api.github.com/users/ayush11-ap/followers",
  following_url:
    "https://api.github.com/users/ayush11-ap/following{/other_user}",
  gists_url: "https://api.github.com/users/ayush11-ap/gists{/gist_id}",
  starred_url: "https://api.github.com/users/ayush11-ap/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/ayush11-ap/subscriptions",
  organizations_url: "https://api.github.com/users/ayush11-ap/orgs",
  repos_url: "https://api.github.com/users/ayush11-ap/repos",
  events_url: "https://api.github.com/users/ayush11-ap/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/ayush11-ap/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Ayush Pawar",
  company: null,
  blog: "",
  location: "Pune, Maharashtra",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 19,
  public_gists: 0,
  followers: 1,
  following: 0,
  created_at: "2024-06-12T12:00:27Z",
  updated_at: "2025-01-15T14:19:45Z",
};

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/twitter", (req, res) => {
  res.send("ayush");
});

app.get("/login", (req, res) => {
  res.send("<h1>login karo</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>learning backend from C&C</h2>");
});

app.get("/github", (req, res) => {
  res.send(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
