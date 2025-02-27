import React, { useEffect, useRef, useState } from 'react';
import hero_video from '../assets/video/hero_video.mp4';
import hero_audio from '../assets/audio/hero_audio.mp3'; // Đường dẫn đến file MP3 của bạn

const Hero1 = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const heroVideoRef = useRef();
    const audioRef = useRef();

    // Đồng bộ video và audio
    useEffect(() => {
        const videoElement = heroVideoRef.current;
        const audioElement = audioRef.current;

        if (!videoElement || !audioElement) return;

        // Đồng bộ trạng thái phát
        const handlePlay = () => {
            if (isPlaying) {
                audioElement.play().catch(e => console.log("Audio play failed:", e));

            }
        };

        const handlePause = () => {
            audioElement.pause();
        };

        const handleEnded = () => {
            // Nếu video lặp thì phải bắt đầu lại âm thanh
            if (videoElement.loop) {
                audioElement.currentTime = 0;
                audioElement.play().catch(e => console.log("Audio restart failed:", e));
            }
        };

        // Đăng ký các sự kiện
        videoElement.addEventListener('play', handlePlay);
        videoElement.addEventListener('pause', handlePause);
        videoElement.addEventListener('ended', handleEnded);

        return () => {
            // Hủy đăng ký khi component unmount
            videoElement.removeEventListener('play', handlePlay);
            videoElement.removeEventListener('pause', handlePause);
            videoElement.removeEventListener('ended', handleEnded);
        };
    }, [isPlaying]);

    // Xử lý khi người dùng tương tác
    const playPause = () => {
        if (isPlaying) {
            heroVideoRef.current.pause();
            audioRef.current.pause();
        } else {
            heroVideoRef.current.play().catch(e => console.log("Video play failed:", e));
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);

    };

    return (
        <section className='h-screen flex justify-center items-center bg-gray-300 relative'>
            {/* Video không có âm thanh */}
            <video
                ref={heroVideoRef}
                className='h-full w-full object-cover'
                autoPlay
                playsInline
                muted // Video luôn mute vì âm thanh sẽ được phát từ audio element
                loop
            >
                <source src={hero_video} type="video/mp4"></source>
                Your browser does not support HTML video.
            </video>

            {/* Âm thanh từ file MP3 */}
            <audio
                ref={audioRef}
                loop
                autoplay
                muted={isMuted}
            // preload="auto"
            >
                <source src={hero_audio} type="audio/mp3"></source>
                Your browser does not support the audio element.
            </audio>

            {/* Nút điều khiển */}
            <div className="absolute bottom-4 right-4 flex gap-2">
                {/* play/pause */}
                <button
                    onClick={playPause}
                    className=" hover:scale-125 transition-all text-white px-4 py-2 rounded-full"
                >
                    {
                        isPlaying ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white icon icon-tabler icons-tabler-outline icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white icon icon-tabler icons-tabler-outline icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 4v16l13 -8z" /></svg>
                    }
                </button>

                {/* Mute/unmute */}
                <button
                    onClick={toggleMute}
                    className="hover:scale-125 transition-all text-white px-4 py-2 rounded-full"
                >
                    {
                        isMuted ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white icon icon-tabler icons-tabler-outline icon-tabler-volume-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /><path d="M16 10l4 4m0 -4l-4 4" /></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white icon icon-tabler icons-tabler-outline icon-tabler-volume"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
                    }
                </button>
            </div>
            <div className=' absolute bottom-0 uppercase text-white p-8'>
                <h1 className='text-5xl font-bold'>Khám phá bộ sưu tập mới nhất</h1>
                <div className='flex justify-evenly mt-4 items-center '>
                    <button className='relative before:absolute  before:w-0 before:h-full before:bg-black before:bg-opacity-70 hover:before:w-full before:left-0 before:transition-all  border-4 w-1/3 flex justify-center items-center px-4 py-4 uppercase mt-4'>
                        <span className='relative z-[1]'>Xem ngay</span>
                    </button>
                    <button className='relative before:absolute  before:w-0 before:h-full before:bg-black before:bg-opacity-70 hover:before:w-full before:left-0 before:transition-all  border-4 w-1/3 flex justify-center items-center px-4 py-4 uppercase mt-4'>
                        <span className='relative z-[1]'>Xem tất cả Bộ sưu tập</span>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Hero1;