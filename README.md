# SIBI Activity Search

[![Netlify Status](https://api.netlify.com/api/v1/badges/9db13346-550e-46a3-b5b8-4fc76dface7e/deploy-status)](https://app.netlify.com/sites/gracious-neumann-c75389/deploys)

SIBI Activity Search is an app created for [CVS Brent] that helps the user (health care professionals) search for activities for those who are isolated either due to health or mental issues in and around the Brent council area. More information about SIBI [here].

### Tech

SIBI Actvity Search uses a number of open source projects to work properly:

* [React] - yes, react
* [tabletop] - makes a Google sheet available through JavaScript
* [react-select] - customisable and flexible select control for React
* [geolib] - a library providing many geospatial operations. The operations used for SIBI activity search are getDistance and orderByDistance

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd sibi-activity-search
$ npm install -d
$ npm start
```

### Development

Want to contribute? Great!

### Todos

* Fix nav menu and search form to top when scrolling down

License
----

GNU GPLv3


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[here]: <https://www.cvsbrent.org.uk/services/social-involvement-in-brent-initiative/>
[CVS Brent]: <https://www.cvsbrent.org.uk/about/>
[React]: <https://reactjs.org/>
[tabletop]: <https://github.com/jsoma/tabletop>
[react-select]: <https://github.com/JedWatson/react-select>
[geolib]: <https://www.npmjs.com/package/geolib>


