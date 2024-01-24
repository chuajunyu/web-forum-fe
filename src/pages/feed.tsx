import React from 'react';
import FeaturedPost from '../../components/FeaturedPost';
import MainFeaturedPost from '../../components/MainFeaturedPost';


const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  
const featuredPosts = [
{
    title: 'Featured post',
    date: 'Nov 12',
    description:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
},
{
    title: 'Post title',
    date: 'Nov 11',
    description:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
},
];
  



const FeedPage: React.FC = () => {
    return (
        <div>
            <h1>Forum Feed</h1>
            <MainFeaturedPost post={mainFeaturedPost} />
            <FeaturedPost post={featuredPosts[0]}/>
        </div>
    );
};

export default FeedPage;
