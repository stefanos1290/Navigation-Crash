# Sequencer

This is Skoove's coding challenge for iOS native (Swift/ObjC) development.

Your job is to implement a miniature audio loop app, the focus is on keeping various audible and visible elements in sync.

## The following rules apply:

Please read the [root readme file](https://github.com/Learnfield-GmbH/CodingChallenge/blob/master/README.md).

## User functionality

There are two audio players, A and B, each one is loaded with an audio file of equal length (8 musical bars), let's call these initial files A1 and B1. On start up, the playback is paused, and the playheads are at the beginning of each file.

![Sequencer mockup][Sequencer mockup]

[Sequencer mockup]: mockup.jpg

There is a single play/pause/reset button. When pressed during the paused state, it starts/resumes playback from the current position (new state is 'playing') for both players. Both players indicate the position of the current playhead with a vertical bar. When the play/pause/reset button is pressed briefly in the playing state, playback is paused for both players. When pressed for long (>2s) in the playing state, playback is paused and the current position reset to 0 (reset).

Underneath the controls the absolute musical time is shown (MTI - Musical time indicator). The format for musical time is `bar::beat::sixteenths`. Each bar consists of 4 beats. Each beat consists of 4 sixteenths. Each point in musical time can be expressed with these components, with our components starting at 0. E.g. `2:1:2` means the third bar, and the third sixteenth after the second beat of the bar. Broken down to sixteenths only it's `38` (`2*16 + 1*4 + 2*1`). With a BPM of `125` this leads to the time of `4560ms`.

The MTI keeps increasing as long as the app is in playing state and is not reset. An exception to this is microloops (see below).

A metronome led component simply flashes for `100ms` on a specific musical time event. The left one should flash on each `bar` while the right one flashes on each `beat`.

In normal playback, the audio players will loop the currently loaded audio file indefinitely. However, by pressing the 'next file' (fast forward icon) button underneath one player, the next audio file is enqueued for that player, i.e. the current file will play to the end, and then the next audio file is loaded as the current one and played back. There should be no audible gap between the two files, and both players should remain in sync with each other. The next file button should indicate that it has been pressed.

To communicate the audio file change, each audio file is associated with a waveform image (jpg) that should be displayed underneath the visible playhead.

## Microloops

In playing state, the microloop button (left of the play/pause/reset button) is enabled. When pressed, this enters the microloop state and this state is reflected by the button. When pressed again, the normal playing state is entered again. When the play/pause/reset is clicked during the microloop state, the microloop state ends along with the playing state, i.e. when playing is resumed, the microloop state is not active.

In the microloop state, the current 2-bar segment is looped repeatedly. I.e. if the microloop state is entered between musical time 4:0:0 and 5:3:3, then instead of progressing to 6:0:0 in normal playing state, the musical time is reset to 4:0:0, along with the playheads of the two audio files.

In the microloop state, the 'next file' buttons continue to record the wish of the user to enqueue the next audio file, but this next audio file will not actually be played until normal, non-microloop playing resumes, and the current audio file has been fully played.

## Hints on architecture - The Central Clock
It is advisable, also for future extension, to have the concept of a central clock that delivers the abstraction of musical time (mapped from physical time in ms) and provides the central control actions.

It could include the microlooping concept, or the microloop could be implemented in a separate class that interacts with the central clock.

Central control actions are:
- play (= resume)
- pause
- reset

Musical time can be provided as an observable value, with different clients potentially needing different frequencies of updates.

The microlooping concept needs an action to set the microlooping state (on or off).

### Sample scenario

1. App is launched. MTI at 0:0:0
1. After a few seconds, user presses play. Playback of both players starts (files A1 and B1) and the MTI is increasing.
1. At MTI 8:0:0, both players start playing A1 / B1 again, MTI continues to increase.
1. At MTI 11:2:0, user presses 'next file' on player A
1. At MTI 13:3:1, user presses microloop (on)
1. One 16th after MTI 13:3:3, MTI loops back to 12:0:0, and the players' playheads go back from the 6:0:0 position to 4:0:0.
1. This happens one more time
1. At 12:2:2, user presses microloop (off)
1. One sixteenth after MTI 13:3:3, MTI continues to 14:0:0 and beyond, players continue playing past the playhead 6:0:0 position.
1. At MTI 16:0:0, player A now switches the audio file and waveform image to A2.
