export const mockData = {

  objectMetadata: {
    config: {
      frameworkMetadata: {
        orgFWType: [
          'K-12',
          'TPD'
        ],
        targetFWType: [
          'K-12'
        ]
      },
      sourcingSettings: {
        collection: {
          maxDepth: 4,
          objectType: 'Collection',
          primaryCategory: 'Course',
          isRoot: true,
          iconClass: 'fa fa-book',
          children: {},
          hierarchy: {
            level1: {
              name: 'Course Unit',
              type: 'Unit',
              mimeType: 'application/vnd.ekstep.content-collection',
              contentType: 'CourseUnit',
              primaryCategory: 'Course Unit',
              iconClass: 'fa fa-folder-o',
              children: {
                Content: []
              }
            },
            level2: {
              name: 'Course Unit',
              type: 'Unit',
              mimeType: 'application/vnd.ekstep.content-collection',
              contentType: 'CourseUnit',
              primaryCategory: 'Course Unit',
              iconClass: 'fa fa-folder-o',
              children: {
                Content: []
              }
            },
            level3: {
              name: 'Course Unit',
              type: 'Unit',
              mimeType: 'application/vnd.ekstep.content-collection',
              contentType: 'CourseUnit',
              primaryCategory: 'Course Unit',
              iconClass: 'fa fa-folder-o',
              children: {
                Content: []
              }
            },
            level4: {
              name: 'Course Unit',
              type: 'Unit',
              mimeType: 'application/vnd.ekstep.content-collection',
              contentType: 'CourseUnit',
              primaryCategory: 'Course Unit',
              iconClass: 'fa fa-folder-o',
              children: {
                Content: []
              }
            }
          }
        }
      }
    },
    schema: {
      properties: {
        generateDIALCodes: {
          type: 'string',
          enum: [
            'Yes',
            'No'
          ],
          default: 'Yes'
        },
        trackable: {
          type: 'object',
          properties: {
            enabled: {
              type: 'string',
              enum: [
                'Yes',
                'No'
              ],
              default: 'Yes'
            },
            autoBatch: {
              type: 'string',
              enum: [
                'Yes',
                'No'
              ],
              default: 'No'
            }
          },
          default: {
            enabled: 'Yes',
            autoBatch: 'No'
          },
          additionalProperties: false
        },
        monitorable: {
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'progress-report',
              'score-report'
            ]
          }
        },
        credentials: {
          type: 'object',
          properties: {
            enabled: {
              type: 'string',
              enum: [
                'Yes',
                'No'
              ],
              default: 'Yes'
            }
          },
          default: {
            enabled: 'Yes'
          },
          additionalProperties: false
        },
        userConsent: {
          type: 'string',
          enum: [
            'Yes',
            'No'
          ],
          default: 'Yes'
        },
        mimeType: {
          type: 'string',
          enum: [
            'application/vnd.ekstep.content-collection'
          ]
        },
        audience: {
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'Student',
              'Teacher',
              'Administrator',
              'Parent',
              'Other'
            ]
          },
          default: [
            'Student'
          ]
        }
      }
    }
  },
  channelData: {
    contentPrimaryCategories: ['123'],
    collectionPrimaryCategories: ['456']
  },
  childrenData: {
    Content: '123',
    Collection: {}
  }
};
