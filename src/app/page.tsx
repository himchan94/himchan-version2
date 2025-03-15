import PostList from "@/components/PostList";
import { GITHUB_URL } from "@/consts";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className='max-w-4xl mx-auto px-4 py-16 sm:py-24'>
      <section className='text-center mb-20'>
        <div className='space-y-4 mb-10'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 ease-out hover:tracking-widest'>
            DEVHIMCHAN
          </h1>
          <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'></p>
        </div>
        <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-6'>
          <a
            href={GITHUB_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105'>
            <svg
              className='w-5 h-5 mr-2'
              fill='currentColor'
              viewBox='0 0 24 24'>
              <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clipRule='evenodd'
              />
            </svg>
            GitHub 방문하기
          </a>
          <Link
            href='/about'
            className='inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105'>
            자세히 알아보기
            <svg
              className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className='relative'>
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white'>
            최신 포스트
          </h2>
          {posts.length === 5 && (
            <Link
              href='/blog'
              className='group inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium'>
              모든 포스트 보기
              <svg
                className='w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </Link>
          )}
        </div>
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <div className='text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg'>
            <p className='text-gray-600 dark:text-gray-400'>
              아직 작성된 포스트가 없습니다.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
