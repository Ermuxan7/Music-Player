import { create } from "zustand";

interface TrackState {
  id: number;
  title: string;
  author: string;
  url: string;
}

interface MusicPlayerState {
  track: TrackState[] | null;
  isPlaying: boolean;
  currentTrack: string | null;
  progress: number;
  duration: number;
  play: () => void;
  pause: () => void;
  skipToNext: () => void;
  skipToPrevious: () => void;
  setProgress: (progress: number) => void;
  setDuration: (duration: number) => void;
  setCurrentTrack: (track: string) => void;
}

const useMusicPlayerStore = create<MusicPlayerState>((set, get) => ({
  track: [],
  isPlaying: false,
  currentTrack: null,
  progress: 0,
  duration: 0,
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  skipToNext: () => {
    const { track, currentTrack } = get();
    if (!track || track.length === 0) return;
    if (track && currentTrack) {
      const currentTrackIndex = track.findIndex((t) => t.url === currentTrack);
      const nextTrackIndex = (currentTrackIndex + 1) % track.length;
      set({ currentTrack: track[nextTrackIndex].url, isPlaying: true });
    }
  },
  skipToPrevious: () => {
    const { track, currentTrack } = get();
    if (!track || track.length === 0) return;
    if (track && currentTrack) {
      const currentTrackIndex = track.findIndex((t) => t.url === currentTrack);
      const nextTrackIndex = (currentTrackIndex - 1) % track.length;
      set({ currentTrack: track[nextTrackIndex].url, isPlaying: true });
    }
  },
  setProgress: (progress: number) => set({ progress }),
  setDuration: (duration: number) => set({ duration }),
  setCurrentTrack: (track: string) => set({ currentTrack: track }),
}));

export default useMusicPlayerStore;
