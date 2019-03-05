# Sequencer

## The following rules apply:

Please read the [root readme file](https://github.com/Learnfield-GmbH/CodingChallenge/blob/master/README.md).

## Abstract 
The result application should visualize the synchronizity of different components designed with an architecture that is easily extendable to further implementations of synced components.

## Architectural Specification

Abbrevation index:
- CC - Central Clock
- MTC - Musical Time Client

### CC - The Central Clock
The core of the architecture is a central clock that runs independently from any other component. It maintains an internal time, maps internal time onto musical time<sup>1</sup> and offers operatrions and subscribtions based on a musical time. 

This is an overview of the CC functionality:
- resume: continues the playback at the current internal time
- pause: pauses the CC at the current internal time
- stop: pauses the CC and sets the internal time to 0
- loop: starts looping at the next `bar` for a length of `4bars`
- runs with an internal time
- the public interface shall be used with musical time only . Mucial times will be mapped onto internal times with an BPM which will be passed while creating the CC.
- offers a public interface to MTCs to 
  - subscribe to generic events like resume, pause, stop, position jumps
  - subscribe to a regular updates of the current musical time (with varying frequencies)
  - subscripe to MTC specifc musical time events
- notifies the MTCs accordingly

### MTC - Musical Time Clients
MTCs apply to a protocol that the CC is expecting for being remote controlled. 

> Hint: Find a elegant solution to identify and avoid jittering 

#### Audio Player MTC
The audio player MTC is a simple audio file<sup>2</sup> player that is controlled by the CC. Once the audio is playing it should endlessly loop unless the corresponding `<<` or `>>` controll is pressed. This will _enque a loop change_. This means the button should show a different state until the next loop is loaded. The next loop will be loaded once multiple of `8bars` is reached, in other words once the slider reaches the end (each audio file has a length of exactly `8bars`). 

The visualization of the audio player is a simple waveform image provided in the `data` folder. The naming corresponds to the given audio file. Its goal is to show the correct static waveform and render a playhead bar on top of it. This playhead bar should smoothly progress and represent the current position of the audio player MTC.

#### Metronome LEDs MTC
A metronome led component simply flashes for `100ms` on a specific musical time event. The left one should flash on each bar while the right one flashes on each beat.

#### Abolute playtime MTC
This is represented by a simple label below the play button that displays the absolute musical time provided by the CC.

### The Appliaction composite
Upon initialization simply load the `A1` sample to the left player and the `B1` to the right player. When pressing play both player should start in sync, with the playheads updating accoringly. The Absolute Playtime MTC should show the absolute time of the CC. The beat and bar LEDs should flash in sync with the beat. 

When pressing the loop button to the left of the play button keep the CC looping in full `4bars` beginning with the next `bar`. This means if the current play time is `4:3:2`, the loop should be set for the range from `5:0:0` to `9:0:0`. All MTCs should support looping

### Footnotes

<sup>1</sup> The format for musical time is `bar::beat::sixteenths`. Each bar consists of 4 beats. Each beat consists of 4 sixteenths. Each point in musical time can be expressed with these components, while are components are starting at 0. E.g. `2:1:2` means the second bar, first beat and third sixteenths. Broken down to sixteenths only its `38` (`2*16 + 1*4 + 2*1`). With a BPM of `125` this leats to the time of `4.560ms`.

<sup>2</sup> The audio assets are provided in `125bpm`, a length of `8:0:0` which is a duration of `15360ms`.

### User Interface Mockup
![Sequencer mockup][Sequencer mockup]

[Sequencer mockup]: mockup.jpg