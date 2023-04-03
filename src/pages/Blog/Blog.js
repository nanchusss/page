import React, { useState, useEffect } from "react";
import {
  BlogContainer,
  BlogCard,
  BlogTitle,
  BlogRow,
  BlogColumn,
  Title,
} from "./Blog-styles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const API_KEY = "AIzaSyBBjNg6AWvF40NLWecoV5JvZGh5lyp1mhI";

const Blog = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${encodeURIComponent(
            "westwing españa homestories OR Less&conscious"
          )}&key=${API_KEY}
`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideos();
  }, []);

  const handleVideoClick = (video) => {
    console.log("holi le doy click al video");
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
    </>
  );
};

export default Blog;
