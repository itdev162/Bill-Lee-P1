
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (context.Posts.Count() == 0)
            {
                List<Post> seedPosts = new List<Post> {
                    new Post(){
                        Title= "First poster", Body= "Hello. "
                    },
                    new Post(){
                        Title= "Second post", Body= "World."
                    },
                    new Post(){
                        Title= "Third poster" , Body= "Hello again "
                    },
                };

                context.Posts.AddRange(seedPosts);

                context.SaveChanges();

            }
        }
    }
}