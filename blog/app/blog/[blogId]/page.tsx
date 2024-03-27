export default function BlogPage({
    params,
    searchParams,
  }: {
    params: { blogId: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    return (
    <div>
        Blog Page
        <p>{params.blogId}</p>
        {JSON.stringify(searchParams)}
    </div>
    )
  }