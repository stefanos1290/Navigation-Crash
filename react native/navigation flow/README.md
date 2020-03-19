# Dynamic Navigation Flow

This is one of Skoove's mobile development coding channenges.

Your task is to develop an application with a dynamic navigation flow depending on external results & delays.

## The following rules apply:

Please read the [root readme file](https://github.com/Learnfield-GmbH/CodingChallenge/blob/master/README.md).

## Abbreviations

The following abbreviations are used

1. The `r` prefix stands for _request_, e.g. `rLogin` resolves to _request login_

## Behaviour to implement

The application consists of several screens that are presented in a specific order. That order depends on various conditions.

1. The app launches
    - Launching the application always triggers `rLogin` which retrieves a `sessionId`.
    - If the user is a first-time user the app shall present `screenA` to him.
    - If the user is a returning user the app shall present the last visited screen to him
2. Screen A 
    - If user enters `screenA` the app has to fetch `rFetchExperiments` unless the result was already fetched and presisted once successfully.
    - The result of `rFetchExperiments` leads to a specific `screenBx` screen.
3. Screen B
    - `screenB1` and `screenB2` offer buttons to be selected. Those choices will be submitted via `rSubmitSelection`.
    - After `rSubmitSelection` was successful `screenB1` leads to `screenC1` and `screenB2` leads to `screenC2`
    - `screenB3` does not require any requests and leads to `screenC2`
4. Screen C
    - Both `screenCx` should be visible for 3 seconds minimum
    - Both `screenCx` should automatically navigate to `screenD` when `rLogin` was successful
5. Screen D
    - This screen does not have any interactive / automated behavior
6. Error Handling
    - Whenever a request fails the user shall be presented the correct error screen 
        - `rLogin` and `rFetchExperiments` leads to `errorScreenAB`
        - `rSubmitSelection` leads to `errorScreenC`
    - The error screen has to be dismissed manually
7. General
    - Some screens support a back button.
  
## Overview diagrams

See an overview of the described behaviour below:
![Overview][Overview]

[Overview]: overview.png


Here is an overview of the separate screens:
![Screens][Screens]

[Screens]: screens.png