
This is a fork of the get-link-preview repo by

# get-link-preview 🔗
View the link preview using our App. Use the API to generate link preview in your app or use the NPM package to use the custom hook in your React app.


## Features ✨
- Use our API endpoint to integrate link preview in your app

## Useful links 🔗
- [Link Preview App](https://get-link-preview.vercel.app/)
- [get-link-preview NPM package](https://www.npmjs.com/package/get-link-preview)

## API 
### API endpoint
``` 
https://get-link-preview.herokuapp.com/?url=https://github.com/siddhigate
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


## NPM package

### Installation
```
import { useLinkPreview } from "get-link-preview"; 
```

### Import custom hook
```

import { useLinkPreview } from "get-link-preview"; 

```

### Using the hook
```

const { getLinkPreviewData, loading, error, data } = useLinkPreview("https://npmjs.com");

```

### ```data``` will include (Example response): 
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
