import { prisma } from '@/app/components/prisma';

// ===== USER ===== //
// export default async function Users() {
//     const allUsers = await prisma.user.findMany();
//     return (
//         <ul>
//             {allUsers.map(user => (
//               <li id={user.id}>
//                 {user.name} - 
//                 {user.email} -
//                 {user.address?.state}
//                 </li>
//             ))}
//         </ul>
//     )
// };

// ===== POST ===== //
export default async function Post() {

  const allPosts = await prisma.post.findMany({ include: {}});

  return (
    <div>
      <ul>
        {allPosts.map((post) => (
          <li key={post.id}>
            {/* Wrap the title in a link element */}
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ===== COMMENT ===== //
// export default async function Comment() {
//   const allComments = await prisma.post.findMany({ include: {}});

//   return (
//     <div>
//       <ul>
//         {allComments.map(comment =>(
//           <div>
//             <li id={comment.id}>{comment.body}</li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   )
// }