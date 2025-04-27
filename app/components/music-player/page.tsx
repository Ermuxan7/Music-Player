"use client";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import React, { useEffect, useRef } from "react";
import useMusicPlayerStore from "@/app/store/musicPlayerSlice";

const btnStyle = "cursor-pointer hover:text-white/70 active:scale-[0.98]";

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function MusicPlayer() {
  const {
    isPlaying,
    play,
    pause,
    progress,
    duration,
    currentTrack,
    setDuration,
    setProgress,
    skipToNext,
    skipToPrevious,
  } = useMusicPlayerStore();

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [currentTrack]);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
  };

  const handleMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
    console.log("Duration", audioRef.current.duration);
  };

  const handleEnded = () => {
    skipToNext();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setProgress(time);
    console.log("Seeked to", time);
  };

  return (
    <div className="flex items-center gap-5 h-full px-6 py-2">
      <audio
        src={currentTrack || "/audio/music.mp3"}
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleMetadata}
        onEnded={handleEnded}
      />
      <div className="flex items-center gap-2 ">
        <button className={btnStyle} onClick={skipToPrevious}>
          <SkipBack />
        </button>
        <button className={btnStyle} onClick={isPlaying ? pause : play}>
          {isPlaying ? <Pause /> : <Play size={28} />}
        </button>
        <button className={btnStyle} onClick={skipToNext}>
          <SkipForward />
        </button>
      </div>
      <div className="flex items-center gap-4 w-full">
        <p>{formatTime(progress)}</p>
        <input
          type="range"
          min={0}
          max={duration}
          value={progress}
          onChange={handleSeek}
          className="w-full h-0.5 bg-gray-200 appearance-none cursor-pointer accent-white "
        />
        <p>{formatTime(duration)}</p>
      </div>
      <button className={btnStyle}>
        <Volume2 size={30} />
      </button>
    </div>
  );
}
