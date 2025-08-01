import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {

    const posts = await drizzleDb.select().from(postsTable);
    posts.forEach(post => {
        console.log(post.id)
    })

})();