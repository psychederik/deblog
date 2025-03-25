import BlogPost from '../BlogPost';

function Blog() {
   return (
      <section id="blog" className="pt-25">
         <h1 className="font-black uppercase text-4xl text-[#A56EB6] pb-2">
            Dev Blog
         </h1>
         <p className="text-xl opacity-30">Articles</p>

         <div className="overflow-y-scroll no-scrollbar max-w-[80%] max-h-[600px]">
            <BlogPost
               title={'Git Cheat Sheet'}
               date={'March 21, 2025'}
               author={'Derik Boghozian'}
            />
            <BlogPost
               title={'A Git And GitHub Tutorial For The Very Beginner'}
               date={'March 19, 2025'}
               author={'Derik Boghozian'}
            />
            <BlogPost
               title={'The Command Line Cheat Sheet'}
               date={'March 17, 2025'}
               author={'Derik Boghozian'}
            />
            <BlogPost
               title={'A Command Line Tutorial For The Very Beginner!'}
               date={'March 15, 2025'}
               author={'Derik Boghozian'}
            />
            <BlogPost
               title={'Completely Unrelated Article'}
               date={'March 13, 2025'}
               author={'Derik Boghozian'}
            />
            <BlogPost
               title={'Turn Your Memes Into Dreams'}
               date={'March 11, 2025'}
               author={'Derik Boghozian'}
            />
            <BlogPost
               title={'CSS: A Pain In The Butt'}
               date={'March 9, 2025'}
               author={'Derik Boghozian'}
            />
            <BlogPost
               title={'Eman Is The Big Gay'}
               date={'March 21, 2025'}
               author={'Derik Boghozian'}
            />
            <BlogPost
               title={'Why Trump Coin Will Reach 50 Billion Market Cap'}
               date={'March 21, 2025'}
               author={'Derik Boghozian'}
            />
         </div>
      </section>
   );
}

export default Blog;
