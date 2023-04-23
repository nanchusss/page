import React, { useState, useEffect } from "react";
import {
  BlogContainer,
  BlogCard,
  BlogTitle,
  BlogRow,
  BlogColumn,
  Title,
  CenteredModal,
} from "./Blog-styles";
import axios from "axios";
import { Modal } from "react-bootstrap";

const API_KEY = "AIzaSyBBjNg6AWvF40NLWecoV5JvZGh5lyp1mhI";

const Blog = () => {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${encodeURIComponent(
            "westwing españa OR westing español OR interior diseño colorido OR diseño interiores"
          )}&key=${API_KEY}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideos();
  }, []);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Title>Videos</Title>
      <BlogContainer>
        <BlogRow>
          {videos.map((video, index) => (
            <BlogColumn key={index}>
              <BlogCard
                style={{
                  backgroundImage: `url(${video?.snippet?.thumbnails?.high?.url})`,
                  backgroundSize: "100%",
                }}
                onClick={() => handleVideoClick(video)}
              ></BlogCard>
              <BlogTitle style={{ color: "#373737" }}>
                {video?.snippet?.title}
              </BlogTitle>
            </BlogColumn>
          ))}
        </BlogRow>
      </BlogContainer>
      {currentVideo && (
        <CenteredModal show={showModal} onHide={closeModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{currentVideo.snippet.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title={currentVideo.snippet.title}
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
              ></iframe>
            </div>
          </Modal.Body>
        </CenteredModal>
      )}
    </>
  );
};

export default Blog;
