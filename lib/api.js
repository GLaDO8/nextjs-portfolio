import { createBucketClient } from '@cosmicjs/sdk'

//read env variables
const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const cosmic = createBucketClient({
  bucketSlug: BUCKET_SLUG,
  readKey: READ_KEY,
})

const is404 = (error) => /not found/i.test(error.message)

export async function getPreviewPostBySlug(slug) {
  try {
    const posts = await cosmic.objects
      .findOne({
        'type': 'posts',
        'slug': slug,
      })
      .props(['slug'])
    return posts['object']
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}

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
export async function getAllProjectsWithSlug() {
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

export async function getSinglePost(slug) {
  try {
    const post = await cosmic.objects
      .findOne({
        'type': 'posts',
        'slug': slug,
      })
      .props(['slug', 'title', 'metadata', 'created_at'])
    return post['object']
  } catch (error) {
    console.log(is404(error))
  }
}

export async function getSingleProject(slug) {
  try {
    const post = await cosmic.objects
      .findOne({
        'type': 'posts',
        'slug': slug,
        '$and': [
          {
            'metadata.id': 'project',
          },
        ],
      })
      .props(['slug', 'title', 'metadata', 'created_at'])
    return post['object']
  } catch (error) {
    console.log(is404(error))
  }
}
