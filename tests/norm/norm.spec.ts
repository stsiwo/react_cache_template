import { BlogType } from '../../src/domain/blog/types'
import { UserType } from '../../src/domain/user/types'
import { normalize } from 'normalizr';
import { blogNormEntity, blogNormArray, userNormEntity, commentNormEntity, commentNormArray, userNormArray } from '../../src/state/norm/config';
import { CommentType } from '../../src/domain/comment/types';
describe('normalizr schema testing', () => {

  test('n.1. blog single entity testing', () => {
    const dummyBlog: BlogType = {
      id: '123',
      title: 'dummy blog title',
      subtitle: 'dummy subtitle',
      content: null,
      createdDate: null,
      user: {
        id: '342',
        name: 'dummy user name',
      },
      comments: [
        {
          id: 1234,
          title: 'dummy comment title',
          content: 'dummy comment content',
          user: {
            id: '4343',
            name: 'dummy comment user name'
          }
        },
        {
          id: 12345,
          title: 'dummy comment title',
          content: 'dummy comment content',
          user: {
            id: '32323',
            name: 'dummy comment user name'
          }
        },
      ]
    }
    const normalizedData = normalize(dummyBlog, blogNormEntity);

    expect(normalizedData.result).toBe('123')
    expect(normalizedData.entities.users).not.toBeNull()
    expect(normalizedData.entities.blogs).not.toBeNull()
    expect(normalizedData.entities.comments).not.toBeNull()

  })

  test('n.2. blog array testing', () => {
    const dummyBlogs: BlogType[] = [
      {
        id: '123',
        title: 'dummy blog title',
        subtitle: 'dummy subtitle',
        content: null,
        createdDate: null,
        user: {
          id: '342',
          name: 'dummy user name',
        },
        comments: [
          {
            id: 1234,
            title: 'dummy comment title',
            content: 'dummy comment content',
            user: {
              id: '4343',
              name: 'dummy comment user name'
            }
          },
          {
            id: 12345,
            title: 'dummy comment title',
            content: 'dummy comment content',
            user: {
              id: '32323',
              name: 'dummy comment user name'
            }
          },
        ]
      },
      {
        id: '124',
        title: 'dummy blog title',
        subtitle: 'dummy subtitle',
        content: null,
        createdDate: null,
        user: {
          id: '342',
          name: 'dummy user name',
        },
        comments: [
          {
            id: 1234,
            title: 'dummy comment title',
            content: 'dummy comment content',
            user: {
              id: '4343',
              name: 'dummy comment user name'
            }
          },
          {
            id: 12345,
            title: 'dummy comment title',
            content: 'dummy comment content',
            user: {
              id: '32323',
              name: 'dummy comment user name'
            }
          },
        ]
      }
    ]

    const normalizedData = normalize(dummyBlogs, blogNormArray);

    expect(JSON.stringify(normalizedData.result, null, '\t')).toBe(JSON.stringify(['123', '124'], null, '\t'))
    expect(normalizedData.entities.users).not.toBeNull()
    expect(normalizedData.entities.blogs).not.toBeNull()
    expect(normalizedData.entities.comments).not.toBeNull()


  })

  test('n.3. user single testing', () => {
    const dummyUser: UserType = {
      id: '43242',
      name: 'dummy user name',
      blogs: [
        {
          id: '123',
          title: 'dummy blog title',
          subtitle: 'dummy subtitle',
          content: null,
          createdDate: null,
          user: {
            id: '342',
            name: 'dummy user name',
          },
          comments: [
            {
              id: 1234,
              title: 'dummy comment title',
              content: 'dummy comment content',
              user: {
                id: '4343',
                name: 'dummy comment user name'
              }
            },
            {
              id: 12345,
              title: 'dummy comment title',
              content: 'dummy comment content',
              user: {
                id: '32323',
                name: 'dummy comment user name'
              }
            },
          ]
        },
        {
          id: '124',
          title: 'dummy blog title',
          subtitle: 'dummy subtitle',
          content: null,
          createdDate: null,
          user: {
            id: '342',
            name: 'dummy user name',
          },
          comments: [
            {
              id: 1234,
              title: 'dummy comment title',
              content: 'dummy comment content',
              user: {
                id: '4343',
                name: 'dummy comment user name'
              }
            },
            {
              id: 12345,
              title: 'dummy comment title',
              content: 'dummy comment content',
              user: {
                id: '32323',
                name: 'dummy comment user name'
              }
            },
          ]
        },
      ],
      comments: [
        {
          id: 123411,
          title: 'dummy comment title',
          content: 'dummy comment content',
          user: {
            id: '4343',
            name: 'dummy comment user name'
          }
        },
        {
          id: 1234511,
          title: 'dummy comment title',
          content: 'dummy comment content',
          user: {
            id: '32323',
            name: 'dummy comment user name'
          }
        },
      ]
    }

    const normalizedData = normalize(dummyUser, userNormEntity);

    console.log(JSON.stringify(normalizedData, null, 2))

    expect(normalizedData.result).toBe('43242')
    expect(normalizedData.entities.users).not.toBeNull()
    expect(normalizedData.entities.blogs).not.toBeNull()
    expect(normalizedData.entities.comments).not.toBeNull()


  })

  test('n.4. user array testing', () => {
    const dummyUser: UserType[] = [
      {
        id: '43242',
        name: 'dummy user name',
        blogs: [
          {
            id: '123',
            title: 'dummy blog title',
            subtitle: 'dummy subtitle',
            content: null,
            createdDate: null,
            user: {
              id: '342',
              name: 'dummy user name',
            },
            comments: [
              {
                id: 1234,
                title: 'dummy comment title',
                content: 'dummy comment content',
                user: {
                  id: '4343',
                  name: 'dummy comment user name'
                }
              },
            ]
          },
        ],
        comments: [
          {
            id: 123411,
            title: 'dummy comment title',
            content: 'dummy comment content',
            user: {
              id: '4343',
              name: 'dummy comment user name'
            }
          },
        ]
      },
      {
        id: '43243',
        name: 'dummy user name',
        blogs: [
          {
            id: '123',
            title: 'dummy blog title',
            subtitle: 'dummy subtitle',
            content: null,
            createdDate: null,
            user: {
              id: '342',
              name: 'dummy user name',
            },
            comments: [
              {
                id: 1234,
                title: 'dummy comment title',
                content: 'dummy comment content',
                user: {
                  id: '4343',
                  name: 'dummy comment user name'
                }
              },
            ]
          },
        ],
        comments: [
          {
            id: 123411,
            title: 'dummy comment title',
            content: 'dummy comment content',
            user: {
              id: '4343',
              name: 'dummy comment user name'
            }
          },
        ]
      },
    ]

    const normalizedData = normalize(dummyUser, userNormArray);

    console.log(JSON.stringify(normalizedData, null, 2))

    expect(JSON.stringify(normalizedData.result, null, '\t')).toBe(JSON.stringify(["43242", "43243"], null, '\t'))
    expect(normalizedData.entities.users).not.toBeNull()
    expect(normalizedData.entities.blogs).not.toBeNull()
    expect(normalizedData.entities.comments).not.toBeNull()


  })

  test('n.4. comment single testing', () => {
    const dummyComment: CommentType = {
      id: 32321,
      title: 'dummy comment title',
      content: 'dummy comment content',
      blog:
      {
        id: '123',
        title: 'dummy blog title',
        subtitle: 'dummy subtitle',
        content: null,
        createdDate: null,
      },
      user: {
        id: '432',
        name: 'dummy user name',
      }
    }

    const normalizedData = normalize(dummyComment, commentNormEntity);

    console.log(JSON.stringify(normalizedData, null, 2))

    expect(normalizedData.result).toBe(32321)
    expect(normalizedData.entities.comments).not.toBeNull()
    expect(normalizedData.entities.blogs).not.toBeNull()
    expect(normalizedData.entities.comments).not.toBeNull()


  })

  test('n.5. comment array testing', () => {
    const dummyComment: CommentType[] = [
      {
        id: 32321,
        title: 'dummy comment title',
        content: 'dummy comment content',
        blog:
        {
          id: '123',
          title: 'dummy blog title',
          subtitle: 'dummy subtitle',
          content: null,
          createdDate: null,
        },
        user: {
          id: '432',
          name: 'dummy user name',
        }
      },
      {
        id: 32322,
        title: 'dummy comment title',
        content: 'dummy comment content',
        blog:
        {
          id: '123',
          title: 'dummy blog title',
          subtitle: 'dummy subtitle',
          content: null,
          createdDate: null,
        },
        user: {
          id: '432',
          name: 'dummy user name',
        }
      },
    ]


    const normalizedData = normalize(dummyComment, commentNormArray);

    console.log(JSON.stringify(normalizedData, null, 2))

    expect(JSON.stringify(normalizedData.result, null, '\t')).toBe(JSON.stringify([32321, 32322], null, '\t'))
    expect(normalizedData.entities.comments).not.toBeNull()
    expect(normalizedData.entities.blogs).not.toBeNull()
    expect(normalizedData.entities.comments).not.toBeNull()


  })
})
