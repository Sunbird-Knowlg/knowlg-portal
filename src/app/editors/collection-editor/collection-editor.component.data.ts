export const mockData = {

  objectMetadata: {
    config: {
      frameworkMetadata: {
        orgFWType: [
          'K-12'
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
        mimeType: {
          type: 'string',
          enum: [
            'application/vnd.ekstep.content-collection'
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
  },
  channel: {
    result: {
      channel: {
        code: '01309282781705830427',
        channel: 'in.ekstep',
        description: 'Preprod Kayal Org',
        createdOn: '2020-08-24T05:00:51.381+0000',
        objectType: 'Channel',
        identifier: '01309282781705830427',
        versionKey: '1648720858199',
        name: 'NIT123',
        defaultCourseFramework: 'TPD',
        status: 'Live',
        defaultFramework: 'test_jp_k-12'
      }
    }
  },
  objectCategoryDefinition: {
    result: {
      objectCategoryDefinition: {
        identifier: 'obj-cat:digital-textbook_collection_all',
        objectMetadata: {
          config: {
            sourcingSettings: {
              collection: {
                maxDepth: 4,
                objectType: 'Collection',
                primaryCategory: 'Digital Textbook',
                isRoot: true,
                iconClass: 'fa fa-book',
                children: {},
                hierarchy: {
                  level1: {
                    name: 'Textbook Unit',
                    type: 'Unit',
                    mimeType: 'application/vnd.ekstep.content-collection',
                    contentType: 'TextBookUnit',
                    primaryCategory: 'Textbook Unit',
                    iconClass: 'fa fa-folder-o',
                    children: {
                      Content: []
                    }
                  }
                }
              }
            }
          }
        },
        languageCode: [],
        name: 'Digital Textbook',
        forms: {
          childMetadata: {
            templateName: '',
            required: [],
            properties: [
              {
                code: 'name',
                editable: true,
                displayProperty: 'Editable',
                dataType: 'text',
                renderingHints: {
                  class: 'sb-g-col-lg-1 required'
                },
                description: 'Name',
                index: 1,
                label: 'Name',
                required: true,
                name: 'Name',
                inputType: 'text',
                placeholder: 'Name',
              }
            ]
          },
          create: {
            templateName: '',
            required: [],
            properties: [
              {
                name: 'First Section',
                fields: [
                  {
                    code: 'name',
                    dataType: 'text',
                    description: 'Name of the content',
                    editable: true,
                    inputType: 'text',
                    label: 'Title',
                    name: 'Name',
                    placeholder: 'Title',
                    renderingHints: {
                      class: 'sb-g-col-lg-1 required'
                    },
                    required: true,
                    visible: true,
                  }
                ]
              }
            ]
          },
          delete: {},
          publish: {},
          publishchecklist: {
            templateName: '',
            required: [],
            properties: [
              {
                name: 'Appropriateness',
                renderingHints: {
                  class: 'd-grid-inline-3 display-sectionName'
                },
                fields: [
                  {
                    code: 'appropriatenessOne',
                    name: 'No Hate speech, Abuse, Violence, Profanity',
                    label: 'No Hate speech, Abuse, Violence, Profanity',
                    dataType: 'boolean',
                    inputType: 'checkbox',
                    editable: true,
                    required: false,
                    visible: true,
                    validations: [
                      {
                        type: 'required',
                        message: ''
                      }
                    ],
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    }
                  },
                  {
                    code: 'appropriatenessTwo',
                    name: 'No Sexual content, Nudity or Vulgarity',
                    label: 'No Sexual content, Nudity or Vulgarity',
                    dataType: 'boolean',
                    inputType: 'checkbox',
                    editable: true,
                    required: false,
                    visible: true,
                    validations: [
                      {
                        type: 'required',
                        message: ''
                      }
                    ],
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    }
                  },
                  {
                    code: 'appropriatenessThree',
                    name: 'No Discrimination or Defamation',
                    label: 'No Discrimination or Defamation',
                    dataType: 'boolean',
                    inputType: 'checkbox',
                    editable: true,
                    required: false,
                    visible: true,
                    validations: [
                      {
                        type: 'required',
                        message: ''
                      }
                    ],
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    }
                  },
                  {
                    code: 'appropriatenessFour',
                    name: 'Is suitable for children',
                    label: 'Is suitable for children',
                    dataType: 'boolean',
                    inputType: 'checkbox',
                    editable: true,
                    required: false,
                    visible: true,
                    validations: [
                      {
                        type: 'required',
                        message: ''
                      }
                    ],
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    }
                  }
                ]
              }
            ]
          },
          relationalMetadata: {
            templateName: '',
            required: [],
            properties: [
              {
                code: 'relName',
                dataType: 'text',
                description: 'Name of the content',
                editable: true,
                inputType: 'text',
                label: 'Title',
                name: 'Title',
                placeholder: 'Title',
                renderingHints: {
                  class: 'sb-g-col-lg-1 required'
                },
                required: true,
                visible: true,
                validations: [
                  {
                    type: 'maxLength',
                    value: '120',
                    message: 'Input is Exceeded'
                  },
                  {
                    type: 'required',
                    message: 'Title is required'
                  }
                ]
              }
            ]
          },
          review: {},
          search: {
            templateName: '',
            required: [],
            properties: [
              {
                code: 'primaryCategory',
                dataType: 'list',
                description: 'Type',
                editable: true,
                default: [],
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                inputType: 'nestedselect',
                label: 'Content Type(s)',
                name: 'Type',
                placeholder: 'Select ContentType',
                required: false,
                visible: true
              }
            ]
          },
          unitMetadata: {
            templateName: '',
            required: [],
            properties: [
              {
                name: 'First Section',
                fields: [
                  {
                    code: 'name',
                    dataType: 'text',
                    description: 'Name of the content',
                    editable: true,
                    inputType: 'text',
                    label: 'Title',
                    name: 'Title',
                    placeholder: 'Title',
                    renderingHints: {
                      class: 'sb-g-col-lg-1 required'
                    },
                    required: true,
                    visible: true,
                    validations: [
                      {
                        type: 'maxLength',
                        value: '120',
                        message: 'Input is Exceeded'
                      },
                      {
                        type: 'required',
                        message: 'Title is required'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          update: {}
        }
      }
    }
  }
};
