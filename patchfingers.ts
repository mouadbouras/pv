import * as fs from "fs";
import * as simplifiedTrack from "./Toshiro_Masuda_-_Sadness_and_Sorrow simplified.json";
import * as fullTrack from "./Toshiro_Masuda_-_Sadness_and_Sorrow.json";
import { FullTrack } from "./fullModels";
import { SimplifiedTrack } from "./simplifiedModels";

var simplified: SimplifiedTrack = { ...simplifiedTrack };
var full: FullTrack = { ...fullTrack };

simplified.supportingTracks.right.notes.forEach((note) => {
  // console.log(note.midi);
});

var rightNoteStack = [...simplified.supportingTracks.right.notes];
var rightTrack = full.tracksV2.right;
parseTrack(rightTrack, rightNoteStack);

var leftNoteStack = [...simplified.supportingTracks.left.notes];
var leftTrack = full.tracksV2.left;
parseTrack(leftTrack, leftNoteStack);

function parseTrack(track: any, stack: any) {
  track.forEach((section: any) => {
    section?.notes.forEach((note: any) => {
      var currentFingerNote = stack.shift();
      if (note.note != currentFingerNote?.midi) {
        throw "something happened!";
      }

      note.finger = currentFingerNote.finger;
    });
  });
}

fs.writeFileSync("output.json", JSON.stringify(full));

// full.tracksV2.right.forEach((section) => {
//     section?.notes.forEach((note) => {
//       var currentFingerNote = rightNoteStack.shift();
//       if (note.note != currentFingerNote?.midi) {
//         throw "something happened!";
//       }

//       note.finger = currentFingerNote.finger;
//     });
//   });
