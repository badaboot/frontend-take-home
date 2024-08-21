### Demo
https://drive.google.com/file/d/1J-auX3LnWzTmXwvJewuHTB3m-g1B0ZFW/view?usp=sharing

### Features
- searches the npm api
- has loading state
- responsive: on mobile has margin around the app

## Expectations

- We think the main task should take about 2 hours
- Please keep a tidy commit history and separate out the commits for the main task and extra credit task

## Example API request

The request

```
https://api.npms.io/v2/search/suggestions?q=react-window
```

Returns

```json
[
  {
    "package": {
      "name": "react-window",
      "scope": "unscoped",
      "version": "1.8.7",
      "description": "React components for efficiently rendering large, scrollable lists and tabular data",
      "keywords": [
        "react",
        "reactjs",
        "virtual",
        "window",
        "windowed",
        "list",
        "scrolling",
        "infinite",
        "virtualized",
        "table",
        "grid",
        "spreadsheet"
      ],
      "date": "2022-04-23T14:22:43.250Z",
      "links": {
        "npm": "https://www.npmjs.com/package/react-window",
        "homepage": "http://react-window.now.sh/",
        "repository": "https://github.com/bvaughn/react-window",
        "bugs": "https://github.com/bvaughn/react-window/issues"
      },
      "author": {
        "name": "Brian Vaughn",
        "email": "brian.david.vaughn@gmail.com",
        "url": "https://github.com/bvaughn/"
      },
      "publisher": {
        "username": "brianvaughn",
        "email": "briandavidvaughn@gmail.com"
      },
      "maintainers": [
        {
          "username": "brianvaughn",
          "email": "briandavidvaughn@gmail.com"
        },
        {
          "username": "mjackson",
          "email": "npm@mjackson.me"
        }
      ]
    },
    "score": {
      "final": 0.7191781278776386,
      "detail": {
        "quality": 0.9372693112538775,
        "popularity": 0.6046811468515499,
        "maintenance": 0.646739808866951
      }
    },
    "searchScore": 1022.8565,
    "highlight": "<em>react</em>-<em>window</em>"
  },
  {
    "package": {
      "name": "react-window-infinite-loader",
      "scope": "unscoped",
      "version": "1.0.8",
      "description": "InfiniteLoader component inspired by react-virtualized but for use with react-window",
      "keywords": [
        "react",
        "reactjs",
        "virtual",
        "window",
        "windowed",
        "list",
        "scrolling",
        "infinite",
        "virtualized",
        "table",
        "grid",
        "spreadsheet"
      ],
      "date": "2022-06-08T18:23:24.830Z",
      "links": {
        "npm": "https://www.npmjs.com/package/react-window-infinite-loader",
        "homepage": "https://github.com/bvaughn/react-window-infinite-loader/",
        "repository": "https://github.com/bvaughn/react-window-infinite-loader",
        "bugs": "https://github.com/bvaughn/react-window-infinite-loader/issues"
      },
      "author": {
        "name": "Brian Vaughn",
        "email": "brian.david.vaughn@gmail.com",
        "url": "https://github.com/bvaughn/"
      },
      "publisher": {
        "username": "brianvaughn",
        "email": "briandavidvaughn@gmail.com"
      },
      "maintainers": [
        {
          "username": "brianvaughn",
          "email": "briandavidvaughn@gmail.com"
        },
        {
          "username": "andrewbeletskiy",
          "email": "andrewbeletskiy@gmail.com"
        }
      ]
    },
    "score": {
      "final": 0.718726945562352,
      "detail": {
        "quality": 0.8464094502755721,
        "popularity": 0.32808736500728325,
        "maintenance": 0.9999243792203749
      }
    },
    "searchScore": 21.057629,
    "highlight": "<em>react</em>-<em>window</em>-infinite-loader"
  }
]
```
