import { createBucketClient } from '@cosmicjs/sdk'

//read env variables
const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const cosmic = createBucketClient({
  bucketSlug: BUCKET_SLUG,
  readKey: READ_KEY,
})

const is404 = (error) => /not found/i.test(error.message)

export async function getAllPostsWithSlug() {
  try {
    const posts = await cosmic.objects
      .find({
        'type': 'posts',
        '$and': [
          {
            'metadata.id': 'post',
          },
        ],
      })
      .props(['slug'])
    return posts['objects']
  } catch (error) {
    console.log(is404(error))
  }
}

export async function getAllProjectsForHome() {
  try {
    const posts = await cosmic.objects
      .find({
        'type': 'posts',
        '$and': [
          {
            'metadata.id': 'project',
          },
        ],
      })
      .props(['slug', 'title', 'metadata', 'created_at', 'udate'])
    return posts['objects']
  } catch (error) {
    console.log(is404(error))
  }
}

export async function getAllPosts() {
  try {
    const posts = await cosmic.objects
      .find({
        'type': 'posts',
        '$and': [
          {
            'metadata.id': 'post',
          },
        ],
      })
      .props(['slug', 'title', 'metadata', 'created_at'])
    return posts['objects']
  } catch (error) {
    console.log(is404(error))
  }
}
