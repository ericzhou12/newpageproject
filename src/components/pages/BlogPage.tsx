'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const BlogPage = () => {
  const [selectedTab, setSelectedTab] = useState('blog');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const tabs = [
    { id: 'blog', name: 'Blog Posts', icon: '📝' },
    { id: 'schools', name: 'School Projects', icon: '🏫' },
  ];

  const blogPosts = [
    {
      id: 'updates-2023',
      title: 'Updates! Updates! Updates!',
      date: 'March 1, 2023',
      excerpt: 'We\'ve been very busy working on expanding our project. Our previous work has allowed us to donate over 10,000 books and impact over 680 students.',
      content: `I know it's been quite a while since we last updated, but we've been very busy working on expanding our project. Our previous work has allowed us to donate over 10,000 books and impact over 680 students. Because of these efforts, we've received a grant from Hershey's Heartwarming project, which receives over 3,000 applications a year. We are very grateful for this opportunity to bring more possibilities to our project. We are looking into the best ways to utilize this amazing grant to further our impact.

The Detroit Committee of the Princeton Prize in Race Relations has also selected us to receive a Certificate of Accomplishment for our work in furthering racial equity in Michigan. This recognition is a great honor, and we are so grateful for this certificate. Moving past this great accomplishment, we have also been recognized as part of the Major Group for Children and Youth. The MGCY is the UN General Assembly-mandated and self-organized mechanism for young people to meaningfully engage in certain UN processes. This is a great way for us to engage with more the community at large!

After all of these great accomplishments, we set our sights on greater destinations: more members! Make sure to check out our team page to see our newly appointed executive board!`,
      category: 'updates'
    },
    {
      id: 'river-rouge-visit',
      title: 'River Rouge Visit',
      date: 'December 3, 2022',
      excerpt: 'Our visit to River Rouge STEM academy started off strong, with all three of us not knowing how to enter the school.',
      content: `Our visit to River Rouge STEM academy started off strong, with all three of us not knowing how to enter the school. Out of fear of seeming like burglars, we had to ask one of the kids how to reach the main office. After walking the outside of the school twice, we eventually found the entrance, which led us to a hallway I can only begin to describe as magical. The walls were painted bright colors, there were decorations and the sound of children laughing bouncing off the walls. Everyone we saw greeted us with a bright smile, even though I'm sure we must have seemed lost and out of place.

After meeting with one of the wonderful ladies at the front office we were led up a flight of stairs to finally see where the magic was happening. As we climbed up the flight of stairs, and walked down the hallways, we could see just how much effort went into creating the endearing ambience of the school. The walls were covered in lovingly drawn cartoons and assignments, and the happy chattering coming from the classrooms.

We eventually met with Mrs. Zmich (pronounced like Brick but with a "Zm" instead of a "Br"!!!). Thankfully, her students were out on lunch, so we were able to talk with her uninterrupted. She provided us with so much helpful information, and really showed us the impact that we were able to create on this tight knit community. In just 20 short minutes, the kids were back from lunch, and we were thrust into the spotlight. We gave an impromptu speech about who we were (3 high schoolers), what we wanted to achieve (equal access education), and how we achieved it (with the help of many, many gracious people and organizations)!

The floor gave way to questions, and we were off! Almost everyone had something to say, and we were blown away by the positivity we received. Something that came up was our own personal relationship with education. All three of us are immigrants, and we have all seen firsthand how a lack of resources can negatively impact people. Being able to help others who are experiencing the same difficulties we did is so rewarding.`,
      category: 'school-visits',
      image: '/images/schools/IMG_0095.jpeg'
    },
    {
      id: 'bloomfield-library',
      title: 'Bloomfield Public Library Book Pickup',
      date: 'August 15, 2022',
      excerpt: 'Our second donation from the Bloomfield Hills Library went much better than expected. We picked up over 20 boxes and met with the head librarian.',
      content: `Our second donation from the Bloomfield Hills Library went much better than expected. We picked up over 20 boxes and met with the head librarian there. After an incredibly eye-opening conversation with her, we left the library with a very large amount of books and an invaluable amount of advice.

Her parting words were incredibly encouraging, "You're going to have to tell me to stop giving you books, because I'll keep supplying them until you do." Our drive home was very productive, as we spent the 20-minute car ride discussing and expanding on ideas to provide stability and education for the children of River Rouge.

We got to our destination -- my garage. Unloading the books and gathering the supplies did nothing but energize us more. Sitting on an old tarp with the smell of peaches wafting through the air, we were ready to start. We decided that weighing the books would be an interesting way to track our books in addition to the counting we were doing. So, we delegated roles and got into the thick of it.

Sarah was weighing them, Swathi was counting them, and I was tracking the amounts and helping out wherever needed. I'm not so sure that Swathi enjoyed counting boxes of books repeatedly, but I'd like to think that I made it much more tolerable with my humor.

After two hours of work, we were done. We had just finished organizing our biggest donation so far. Over 1,680 books were donated, bringing our total donations to around 5,000 books. The weight of this donation was 650 pounds. We finished packing the books and said our goodbyes.

Now onto our next adventure!`,
      category: 'partnerships',
      image: '/images/bookdonations/IMG_9160.jpeg'
    }
  ];

  const schoolProjects = [
    {
      name: 'River Rouge STEM Academy',
      description: 'Our first project was to help provide a full library to the students at River Rouge STEM Academy (K-8). We have provided them with 20+ boxes of books.',
      details: 'Around 315 kids are enrolled at this school currently, but the numbers are expected to increase. 95% of the student body are students with a minority background, which they are proud to show off.',
      image: '/images/schools/IMG_0096.jpeg'
    },
    {
      name: 'Memorial Elementary',
      description: '"We encourage our students to bring in gently used books to swap out for "new" books. We are adding the donated books to this event and our students are loving it." -Jill Larkins, Principal',
      details: 'On May 5th, 2023 our members donated over 15 boxes of books. They created a book exchange program where students could swap their old books with the ones we gave. All of the classes in the school ended up getting to read a new book for the week!',
      image: '/images/schools/IMG_0097.jpeg'
    },
    {
      name: 'Whitman Elementary',
      description: 'On June 5th members met with Ms. Toye from Whitman Elementary School, a school in the Pontiac District, to donate books.',
      details: 'Ms. Toye talked about how Whitman is implementing iREADY reading tests to combat dropping literacy rates. We donated a total of around 800 books.',
      image: '/images/schools/IMG_0098.jpeg'
    },
    {
      name: 'Pasteur Elementary',
      description: 'On Saturday, October 21, 2023, we met with staff from Pasteur Elementary School - a school in Detroit, MI. We donated over 1,500 books.',
      details: 'This was one of our most successful book donations since becoming a non-profit! Pasteur Elementary\'s library had fallen into disuse - not a single student had checked out a book since 2006.',
      image: '/images/schools/IMG_0099.jpeg'
    },
    {
      name: 'Wattles Elementary',
      description: 'On October 23, 2023, we met a staff member from Wattles Elementary School and dropped off several boxes of books.',
      details: 'We did a diversity curriculum presentation, reading "Eyes that Kiss In the Corners" and sharing a presentation about China, including hands-on zhezui (Chinese origami) activities.',
      image: '/images/schools/IMG_0100.jpeg'
    }
  ];

  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h-full overflow-y-auto"
      >
        <button
          onClick={() => setSelectedPost(null)}
          className="mb-4 text-accent-gold hover:text-text-dark transition-colors duration-200 cursor-pointer"
        >
          ← Back to Blog
        </button>
        
        <article className="bg-white bg-opacity-60 rounded-lg p-6 backdrop-blur-sm">
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-text-dark mb-2">
              {post.title}
            </h1>
            <p className="text-text-dark opacity-70">{post.date}</p>
          </header>
          
          {post.image && (
            <div className="relative h-64 rounded-lg overflow-hidden mb-6">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          )}
          
          <div className="prose prose-sm max-w-none text-text-dark">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-full overflow-y-auto"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-4">
          Blog & School Projects
        </h1>
        <p className="text-lg text-text-dark opacity-80">
          Stories from our journey and the schools we've impacted
        </p>
      </div>

      {/* Tab Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
              ${selectedTab === tab.id 
                ? 'bg-accent-gold text-text-dark shadow-lg' 
                : 'bg-white bg-opacity-60 text-text-dark hover:bg-opacity-90 hover:shadow-md'
              }
            `}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content based on selected tab */}
      {selectedTab === 'blog' && (
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={`blog-${post.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white bg-opacity-60 rounded-lg p-6 backdrop-blur-sm cursor-pointer hover:bg-opacity-80 transition-all duration-300"
              onClick={() => setSelectedPost(post.id)}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-semibold text-text-dark">
                  {post.title}
                </h3>
                <span className="text-sm text-text-dark opacity-70 whitespace-nowrap ml-4">
                  {post.date}
                </span>
              </div>
              <p className="text-text-dark opacity-90 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4 text-accent-gold text-sm font-medium">
                Read more →
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {selectedTab === 'schools' && (
        <div className="grid md:grid-cols-2 gap-6">
          {schoolProjects.map((school, index) => (
            <motion.div
              key={`school-${school.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white bg-opacity-60 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                <Image
                  src={school.image}
                  alt={school.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <h3 className="text-lg font-serif font-semibold text-text-dark mb-2">
                {school.name}
              </h3>
              <p className="text-text-dark opacity-90 text-sm mb-3 leading-relaxed">
                {school.description}
              </p>
              <p className="text-text-dark opacity-80 text-xs leading-relaxed">
                {school.details}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default BlogPage;