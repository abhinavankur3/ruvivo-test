# MapUp Senior Backend Engineer Assessment

## This is an Express-NodeJS server.

---

### How to RUN

```
$ npm install
$ npm start
```

### How to TEST

- Get Authentication Token.

  This API return Bearer token. You need to send this token for authentication.
  This token will bw valid for 24 hours.

  Route - /api/token

  Method - GET

  ```
  curl --location --request GET 'localhost:8000/api/token'
  ```

- Post Long Linestring to get intersections.

  This API return array of intersecting line ids along with the point of intersections OR 4XX, 5XX error.

  Route - /api/intersections

  Method - POST

  ```
  curl --location --request POST 'localhost:8000/api/intersections' \
  --header 'Authorization: Bearer <generated-token>' \
  --form 'file=@/<path-to-folder>/long-ls.json'
  --form 'scatteredLines=[
                              {
                                  "line": {
                                  "type": "LineString",
                                  "coordinates": [
                                      [-116.8945313, 49.7244792],
                                      [-112.3242188, 37.5794125]
                                  ]
                                  }
                              },
                              {
                                  "line": {
                                  "type": "LineString",
                                  "coordinates": [
                                      [-109.1601563, 46.8000594],
                                      [-98.0859375, 28.6134594]
                                  ]
                                  }
                              },
                              {
                                  "line": {
                                  "type": "LineString",
                                  "coordinates": [
                                      [-110.2148438, 51.8357775],
                                      [-93.8671875, 63.3126828]
                                  ]
                                  }
                              },
                              {
                                  "line": {
                                  "type": "LineString",
                                  "coordinates": [
                                      [-89.296875, 37.1603165],
                                      [-70.8398438, 51.5087425]
                                  ]
                                  }
                              },
                              {
                                  "line": {
                                  "type": "LineString",
                                  "coordinates": [
                                      [-87.3632813, 72.0197288],
                                      [-105.8203125, 24.2068896]
                                  ]
                                  }
                              }
                          ]'

  ```

### Folder Structure

```
- logs
    - app.log
- src
    - app.js
    - config.js
    - middleware.js
    - router.js
    - utils.js
    - winston.js
- uploads
- package.json
- README.md

```
