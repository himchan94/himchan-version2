import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 제목 태그들
    h1: ({ children }) => (
      <h1 className='text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white'>
        {children}
      </h1>
    ),
    h2: ({ children }) => {
      // title, date, description 같이 있으면 없애기
      if (
        children?.includes("title") &&
        children?.includes("date") &&
        children?.includes("description")
      )
        return null;

      return (
        <h2 className='text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white'>
          {children}
        </h2>
      );
    },
    h3: ({ children }) => (
      <h3 className='text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white'>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-lg font-bold mt-6 mb-2 text-gray-900 dark:text-white'>
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className='text-base font-bold mt-4 mb-2 text-gray-900 dark:text-white'>
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className='text-sm font-bold mt-4 mb-2 text-gray-900 dark:text-white'>
        {children}
      </h6>
    ),

    // 텍스트 관련 태그들
    p: ({ children }) => (
      <p className='my-6 leading-7 text-gray-700 dark:text-gray-300'>
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2 transition-colors'
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className='font-bold text-gray-900 dark:text-white'>
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className='italic text-gray-900 dark:text-white'>{children}</em>
    ),
    del: ({ children }) => (
      <del className='line-through text-gray-500 dark:text-gray-400'>
        {children}
      </del>
    ),

    // 리스트 관련 태그들
    ul: ({ children }) => (
      <ul className='my-6 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300'>
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className='my-6 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300'>
        {children}
      </ol>
    ),
    li: ({ children }) => <li className='leading-7'>{children}</li>,

    // 코드 관련 태그들
    code: ({ children }) => (
      <code className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 font-mono text-sm text-gray-900 dark:text-gray-100'>
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className='my-6 overflow-x-auto rounded-lg bg-gray-900 p-4 dark:ring-1 dark:ring-gray-800'>
        {children}
      </pre>
    ),

    // 기타 태그들
    blockquote: ({ children }) => (
      <blockquote className='my-6 border-l-4 border-blue-600 dark:border-blue-400 pl-4 italic text-gray-700 dark:text-gray-300'>
        {children}
      </blockquote>
    ),
    hr: () => <hr className='my-8 border-gray-200 dark:border-gray-800' />,
    table: ({ children }) => (
      <div className='my-6 w-full overflow-x-auto'>
        <table className='w-full border-collapse text-sm'>{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className='border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 px-4 py-2 text-left font-bold text-gray-900 dark:text-white'>
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className='border border-gray-200 dark:border-gray-800 px-4 py-2 text-gray-700 dark:text-gray-300'>
        {children}
      </td>
    ),
    img: ({ src, alt }) => (
      <div className='my-6'>
        <Image
          src={src || ""}
          alt={alt || ""}
          width={800}
          height={400}
          className='rounded-lg'
        />
      </div>
    ),

    // 기본 컴포넌트 확장
    ...components,
  };
}
