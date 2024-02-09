export interface FullTrack {
  supportingTracks: SupportingTrack[];
  start_time: number;
  song_length: number;
  resolution: number;
  tempos: Tempo[];
  keySignatures: KeySignature[];
  timeSignatures: TimeSignature[];
  measures: Measure[];
  tracksV2: TracksV2;
  accompanyingInstruments: number[];
  accompanyingChannels: number[];
  sections: any[];
  positionGroups: any[];
  technicalGroups: any[];
  maxSimplification: number;
}

export interface SupportingTrack {
  notes: Note[];
  myInstrument: number;
  theirInstrument: number;
}

export interface Note {
  midi: number;
  time: number;
  velocity: number;
  duration: number;
}

export interface Tempo {
  bpm: number;
  ticks: number;
  time: number;
}

export interface KeySignature {
  key: string;
  scale: string;
  ticks: number;
}

export interface TimeSignature {
  ticks: number;
  timeSignature: number[];
  measures: number;
}

export interface Measure {
  time: number;
  timeSignature: number[];
  ticksPerMeasure: number;
  ticksStart: number;
  totalTicks: number;
  type: number;
}

export interface TracksV2 {
  right: Right[];
  left: Left[];
}

export interface Right {
  direction: string;
  time: number;
  timeEnd: number;
  timeSignature: number[];
  notes: Note2[];
  max: number;
  min: number;
  measureTicksStart: number;
  measureTicksEnd: number;
  rests: Rest[];
}

export interface Note2 {
  note: number;
  durationTicks: number;
  noteOffVelocity: number;
  ticksStart: number;
  velocity: number;
  measureBars: number;
  duration: number;
  noteName: string;
  octave: number;
  notePitch: string;
  start: number;
  end: number;
  noteLengthType: string;
  group: number;
  measureInd: number;
  noteMeasureInd: number;
  id: string;
  finger: any;
  smp: any;
}

export interface Rest {
  time: number;
  noteLengthType: string;
}

export interface Left {
  direction: string;
  time: number;
  timeEnd: number;
  timeSignature: number[];
  notes: Note3[];
  max: number;
  min: number;
  measureTicksStart: number;
  measureTicksEnd: number;
  rests: Rest2[];
}

export interface Note3 {
  note: number;
  durationTicks: number;
  noteOffVelocity: number;
  ticksStart: number;
  velocity: number;
  measureBars: number;
  duration: number;
  noteName: string;
  octave: number;
  notePitch: string;
  start: number;
  end: number;
  noteLengthType: string;
  group: number;
  measureInd: number;
  noteMeasureInd: number;
  id: string;
  finger: any;
  smp: any;
}

export interface Rest2 {
  time: number;
  noteLengthType: string;
}
