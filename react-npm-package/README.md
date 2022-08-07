# get-link-preview 🔗

## installation
```

import { useLinkPreview } from "get-link-preview"; 

```


## Import custom hook
```

import { useLinkPreview } from "get-link-preview"; 

```

## Using the hook
```

const { getLinkPreviewData, loading, error, data } = useLinkPreview("https://npmjs.com");

```

## ```data``` will include (Example response): 
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