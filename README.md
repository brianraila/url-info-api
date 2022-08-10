# URL INFO API
Get information about links in a single API request.

This is a fork of the get-link-preview repo by [Siddhi Gate](https://github.com/siddhigate)

# get-link-preview 🔗
View the link preview using our App. Use the API to generate link preview in your app or use the NPM package to use the custom hook in your React app.

Original article can be found [here](https://blog.siddhigate.me/get-link-preview)
Github repo can be found [here](https://github.com/siddhigate/link-preview)


## Features ✨
- Use our API endpoint to integrate link preview in your app

## Useful links 🔗
- [API URL](https://url-info.vercel.app/)

## API 
### API endpoint
``` 
https://url-info.herokuapp.com/?url=https://github.com/siddhigate
```
### API response
```
{ 
  "success":true,
  "title":"siddhigate - Overview",
  "description":"Full stack developer. siddhigate has 49 repositories available. Follow their code on GitHub.",
  "image":"https://avatars.githubusercontent.com/u/80971056?v=4?s=400",
  "sitename":"GitHub",
  "ogUrl":"https://github.com/siddhigate",
  "type":"profile",
  "domain":"github.com",
  "favicon":"https://github.githubassets.com/favicons/favicon.svg"}
}
```

