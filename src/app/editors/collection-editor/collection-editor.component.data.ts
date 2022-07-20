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
        defaultFramework: 'ekstep_ncert_k-12'
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
                validations: [
                  {
                    type: 'maxLength',
                    value: '50',
                    message: 'Input is Exceeded'
                  },
                  {
                    type: 'required',
                    message: 'Name is required'
                  }
                ]
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
  },
  contentRead: {
    result: {
      content: {
        copyright: '123',
        organisationId: '4d9484b1-af1f-4e85-8bb8-031dc54c30f3',
        previewUrl: 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/ecml/do_11357573655467622411178-latest',
        channel: '01309282781705830427',
        downloadUrl: 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_11357573655467622411178/sa_1657262162650_do_11357573655467622411178_1.ecar',
        source: 'https://dock.sunbirded.org/api/content/v1/read/do_11357573655467622411178',
        mimeType: 'application/vnd.ekstep.ecml-archive',
        objectType: 'Content',
        primaryCategory: 'Course Assessment',
        contentEncoding: 'gzip',
        artifactUrl: 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_11357573655467622411178/artifact/1657262154968_do_11357573655467622411178.zip',
        contentType: 'SelfAssess',
        identifier: 'do_11357573655467622411178',
        lastPublishedBy: '49bab374-2758-4b86-8891-1c2f330c95ca',
        version: 2,
        license: 'CC BY 4.0',
        maxAttempts: 25,
        prevState: 'Review',
        size: 344721,
        lastPublishedOn: '2022-07-08T06:35:59.560+0000',
        name: 'SA',
        status: 'Live',
        code: '03daffe6-ab29-5571-a644-5fbb424304f0',
        interceptionPoints: {},
        prevStatus: 'Processing',
        origin: 'do_11357573655467622411178',
        streamingUrl: 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/ecml/do_11357573655467622411178-latest',
        idealScreenSize: 'normal',
        createdOn: '2022-07-08T06:35:37.690+0000',
        processId: '10b92bc4-219f-4a21-ad9d-c519cd4e426a',
        contentDisposition: 'inline',
        lastUpdatedOn: '2022-07-08T06:36:03.272+0000',
        collectionId: 'do_11357572584995225611137',
        dialcodeRequired: 'No',
        editorVersion: 3,
        lastStatusChangedOn: '2022-07-08T06:36:03.272+0000',
        createdFor: [
          '01309282781705830427'
        ],
        creator: 'sonet1@yopmail.com',
        os: [
          'All'
        ],
        cloudStorageKey: 'content/do_11357573655467622411178/artifact/1657262154968_do_11357573655467622411178.zip',
        pkgVersion: 1,
        versionKey: '1657262152646',
        idealScreenDensity: 'hdpi',
        framework: 'ekstep_ncert_k-12',
        s3Key: 'content/do_11357573655467622411178/artifact/1657194798562_do_11357573655467622411178_1657262138570.zip',
        lastSubmittedOn: '2022-07-08T06:35:52.290+0000',
        createdBy: '348405cb-c636-4e4c-b5d7-cc223576b436',
        compatibilityLevel: 1,
        board: 'CBSE',
        programId: '51cd1430-fde7-11ec-be8b-9962d8844469'
      }
    }
  }
};
