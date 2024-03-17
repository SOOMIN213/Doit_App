import React, { useState } from 'react';

const YouTubeThumbnail = () => {
  const [link, setLink] = useState(''); // 링크 상태 추가
  const [videoId, setVideoId] = useState(''); // 비디오 ID 상태 추가

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 기본 동작 방지
      const extractedVideoId = getVideoIdFromLink(link);
      if (extractedVideoId) {
        setVideoId(extractedVideoId); // 비디오 ID 설정
      }
    }
  };

  // YouTube 링크에서 비디오 ID를 추출하는 함수
  const getVideoIdFromLink = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
    return match ? match[1] : null;
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter YouTube link"
        value={link}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      {videoId && (
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default YouTubeThumbnail;
