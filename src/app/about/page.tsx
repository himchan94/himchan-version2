export default function About() {
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-4xl font-bold mb-8 text-gray-900 dark:text-white'>
        About Me
      </h1>
      <div className='prose prose-lg dark:prose-invert'>
        <p>
          안녕하세요! 이 블로그는 Next.js, MDX, 그리고 Tailwind CSS를 사용하여
          만들어졌습니다.
        </p>
        <p>
          이곳에서 개발, 기술, 그리고 일상적인 이야기들을 공유할 예정입니다.
        </p>
      </div>
    </div>
  );
}
