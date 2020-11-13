# RUVIVO Assessment

## This is an Express-NodeJS server.

---

### How to RUN

```
$ npm install
$ npm start
```

### How to TEST

- Route - /api/v1/user

  Method - POST

  ```
  curl --location --request POST 'localhost:8000/api/v1/user' \
    --form 'image=@/Users/abhinavankur/Downloads/197280.jpg' \
    --form 'data={
    "name": "Abhinav",
    "email": "abhi@ab.xom",
    "password": "abc123"
    }'

  ```
