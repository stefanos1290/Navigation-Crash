# Skoove Coding Challange

## The following rules apply:

- Supply clean code (e.g. SOLID principles, etc)
- Supply clean, readable automated testing 
  - Definitely unit and potentially integration / ui tests
- Supply build / make / run instructions if required
- Use a git repostitory and highlight significant working steps appropriately
  - Push it to github and give us access

## The exercise

This consists of several parts. The UI is rendered in a React Native application while some audio playback is done on the Native side. The application is able to load data from a server and playback the associated audio content.

### React Native Part

1. Fetch the data from the given URL<sup>1</sup>
2. Show the content of this dynamic json in a scrollable list
3. Upon clicking on one of the list entries, the application shall navigate to a new screen
4. This new screen displays the content of the selected element. Additionally it shows:
   - A play button on top of the cover image which starts / stops the playback of the associated audio file
   - Audio playback should be done on the native side (see 4.)
   - A position slider which updates its position depending on the position of the currently playing audio. It should also be able to control the current audio position while playing back<sup>2</sup>
   - The current play time and the audio duration<sup>2</sup> 

### Native Part 

4. Load, play, pause the given audio file
5. Notify the React Native part about play position updates<sup>2</sup>

### User Interface Mockup
![Skoove Coding Challenge Mockup][logo]

### Footnotes

<sup>1</sup>https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/data/manifest.json  
<sup>2</sup>Update the value at an appropiate frequency

[logo]: https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/mockup.jpg