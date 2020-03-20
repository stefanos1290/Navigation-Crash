# Dynamic Navigation Flow

This is one of Skoove's mobile development coding channenges.

Your task is to develop an application with a dynamic navigation flow depending on external results & delays.

## The following rules apply:

Please read the [root readme file](https://github.com/Learnfield-GmbH/CodingChallenge/blob/master/README.md).

## Abbreviations

The following abbreviations are used throughout the task description

1. The `r` prefix stands for _request_, e.g. `rLogin` resolves to _request login_

## Behaviour to implement

The application consists of several screens that are presented in a specific order. That order depends on various conditions.

1. The app launches
    - Launching the application always triggers `rLogin` which retrieves a `sessionId`.
    - If the user is a first-time user the app shall present `screenA`.
    - If the user is a returning user the app shall present the last screen of his previous session.

2. Screen A 
    - If user enters `screenA` the app has to fetch `rFetchExperiments` unless the result was already fetched and presisted once successfully.
    - The result of `rFetchExperiments` leads to a specific `screenBx` screen.

3. Screen B
    - `screenB1` and `screenB2` offer several exclusive choices to be selected. Those choices will be submitted via `rSubmitSelection` once the next button is pressed.
    - After `rSubmitSelection` was successful 
        - `screenB1` leads to `screenC1` 
        - `screenB2` leads to `screenC2`
    - `screenB3` does not execute any requests and leads to `screenC2` via the next button

4. Screen C
    - Both `screenCx` should be visible for 3 seconds minimum
    - Both `screenCx` should automatically navigate to `screenD` when `rLogin` was successful

5. Screen D
    - This screen does not have any interactive / automated behavior except the generic back button

6. General
    - Some screens support a back button.
    - `rLogin` should have a retry logic (the other requests should fail after 1 try)

7. Tips
    - Take into account that the server may respond with errors and varying response durations.
    - Reuse components wherever applicable.
  
## Screen flow diagram
![Overview][Overview]

[Overview]: overview.png

## Screen overview
Here is an overview of the separate screens:
![Screens][Screens]

[Screens]: screens.png

## Development server

You can find a server in the subfolder `server`. To start the server in a normal operating mode simply execute

```
npm install
node server.js
```

The local machine will serve the following endpoints with randomized delays (between 1 and 15 seconds) and randomized return values (success vs. failure and specific return values):

```
http://localhost:3000/rLogin
http://localhost:3000/rFetchExperiments
http://localhost:3000/rSubmitSelection
```

### Develoment overrides

If you want to force the server to behave in a specific manner please use the following arguments

```  
node server.js x y u v a b

  x - override for rLogin delay
  y - override for rLogin success
  u - override for rFetchExperiments delay
  v - override for rFetchExperiments success
  a - override for rSubmitSelection delay
  b - override for rSubmitSelection success
```

As an example `node server.js 3 false 15 true 4 false` will lead to a behavior that
- every `rLogin` request returns an error after 3 seconds
- every `rFetchExperiments` request returns successfully after 15 seconds
- every `rSubmitSelection` request returns an error after 4 seconds