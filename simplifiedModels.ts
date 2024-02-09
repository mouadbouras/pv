export interface SimplifiedTrack {
  supportingTracks: SupportingTracks;
}

export interface SupportingTracks {
  right: Right;
  left: Left;
}

export interface Right {
  notes: Note[];
  myInstrument: number;
  theirInstrument: number;
}

export interface Note {
  midi: number;
  time: number;
  velocity: number;
  duration: number;
  finger: number;
}

export interface Left {
  notes: Note[];
  myInstrument: number;
  theirInstrument: number;
}
