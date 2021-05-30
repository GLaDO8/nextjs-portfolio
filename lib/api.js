import Cosmic from 'cosmicjs'

//read env variables
const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
})

const is404 = (error) => /not found/i.test(error.message)

//COSMIC.JS get post and project functions
export async function getPreviewPostBySlug(slug) {
  const params = {
    slug,
    props: 'slug',
    status: 'all',
  }

  try {
    const data = await bucket.getObject(params)
    return data.object
  } catch (error) {
    // Don't throw if an slug doesn't exist
    if (is404(error)) return
    throw error
  }
}

export async function getAllPostsWithSlug() {
  const params = {
    type: 'posts',
    props: 'slug',
    query: {
      'metadata.id': 'post',
    },
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getAllProjectsWithSlug() {
  const params = {
    type: 'posts',
    props: 'slug',
    query: {
      'metadata.id': 'project',
    },
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getAllPostsForHome(preview) {
  const params = {
    type: 'posts',
    limit: 4,
    props: 'title,slug,metadata,created_at,udate',
    ...(preview && { status: 'all' }),
    query: {
      'metadata.id': 'post',
    },
  }
  const data = await bucket.getObjects(params)
  return data.objects
}
export async function getAllProjectsForHome(preview) {
  const params = {
    type: 'posts',
    props: 'title,slug,metadata,created_at,udate',
    ...(preview && { status: 'all' }),
    query: {
      'metadata.id': 'project',
    },
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getAllPosts() {
  const params = {
    type: 'posts',
    props: 'slug,title,metadata,created_at',
    query: {
      'metadata.id': 'post',
    },
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getAllProjects() {
  const params = {
    type: 'posts',
    props: 'slug,title,metadata,created_at',
    query: {
      'metadata.id': 'project',
    },
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getOnlyBlogPosts() {
  const params = {
    type: 'posts',
    props: 'slug,title,metadata,created_at',
    query: {
      'metadata.id': 'post',
    },
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getOnlyAboutPage() {
  const params = {
    type: 'posts',
    props: 'slug,title,metadata,created_at',
    query: {
      'metadata.id': 'about',
    },
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getProjectAndMoreProjects(slug, preview) {
  const singleObjectParams = {
    slug,
    props: 'slug,title,metadata,created_at',
    ...(preview && { status: 'all' }),
    query: {
      'metadata.id': 'project',
    },
  }
  const moreObjectParams = {
    type: 'posts',
    limit: 3,
    props: 'title,slug,metadata,created_at',
    ...(preview && { status: 'all' }),
    query: {
      'metadata.id': 'project',
    },
  }
  const object = await bucket.getObject(singleObjectParams).catch((error) => {
    // Don't throw if an slug doesn't exist
    if (is404(error)) return
    throw error
  })
  const moreObjects = await bucket.getObjects(moreObjectParams)
  const morePosts = moreObjects.objects
    ?.filter(({ slug: object_slug }) => object_slug !== slug)
    .slice(0, 2)

  return {
    post: object?.object,
    morePosts,
  }
}

export async function getPostAndMorePosts(slug, preview) {
  const singleObjectParams = {
    slug,
    props: 'slug,title,metadata,created_at',
    ...(preview && { status: 'all' }),
    query: {
      'metadata.id': 'post',
    },
  }
  const moreObjectParams = {
    type: 'posts',
    limit: 3,
    props: 'title,slug,metadata,created_at',
    ...(preview && { status: 'all' }),
    query: {
      'metadata.id': 'post',
    },
  }
  const object = await bucket.getObject(singleObjectParams).catch((error) => {
    // Don't throw if an slug doesn't exist
    if (is404(error)) return
    throw error
  })
  const moreObjects = await bucket.getObjects(moreObjectParams)
  const morePosts = moreObjects.objects
    ?.filter(({ slug: object_slug }) => object_slug !== slug)
    .slice(0, 2)

  return {
    post: object?.object,
    morePosts,
  }
}
