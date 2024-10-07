import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useExplainerTopics } from "../hooks/useExplainerTopics";
import BlogPost from "../components/Explainer/BlogContent";

const ExplainerDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { topics, loading, error } = useExplainerTopics();
  const [topic, setTopic] = useState(null);
  useEffect(() => {
    if (topics.length > 0) {
      const topicId = id || location.pathname.slice(1); // Use id from params or the full path

      const foundTopic = topics.find((t) => t.id === topicId);

      setTopic(foundTopic);
    }
  }, [id, location.pathname, topics]);

  if (loading) return <div className='text-center'>Loading topic...</div>;
  if (error)
    return (
      <div className='text-center text-red-500'>
        Error loading topic: {error.message}
      </div>
    );

  if (!topic) return <div className='text-center'>Topic not found</div>;

  const TopicContent = topic.Content;

  return (
    <div className='container mx-auto px-4 py-8'>
      <article className='max-w-5xl mx-auto bg-retro-white shadow-retro p-8 border-3 border-retro-black'>
        <div className='prose prose-lg prose-retro max-w-none'>
          <BlogPost content={topic.Content} />
          <div className='mt-8 flex items-center space-x-2'>
            <span className='text-lg font-semibold'>Written by:</span>
            <a
              className='text-retro-accent font-bold hover:underline transition-colors'
              href={topic.profile}
              target='_blank'
              rel='noopener noreferrer'
            >
              {topic.author}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ExplainerDetail;
