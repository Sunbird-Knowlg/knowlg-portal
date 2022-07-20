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
  },
  channel: {
    id: 'api.channel.read',
    ver: '1.0',
    ts: '2022-07-15T06:32:39.202Z',
    params: {
      resmsgid: 'ec2d3020-0407-11ed-9e27-273dd190c405',
      msgid: '30040210-19ce-803e-727c-fe7f5fc2ba3d',
      status: 'successful',
      err: null,
      errmsg: null
    },
    responseCode: 'OK',
    result: {
      channel: {
        code: '01309282781705830427',
        frameworks: [
          {
            name: 'Centre',
            relation: 'hasSequenceMember',
            identifier: 'ekstep_ncert_k-12',
            description: 'Centre',
            objectType: 'Framework',
            status: 'Live',
            type: 'K-12'
          }
        ],
        channel: 'in.ekstep',
        description: 'Preprod Kayal Org',
        createdOn: '2020-08-24T05:00:51.381+0000',
        objectType: 'Channel',
        collectionPrimaryCategories: [
          'Content Playlist',
          'Course',
          'Digital Textbook',
          'Question paper'
        ],
        appId: '@ignore@',
        primaryCategories: [
          {
            identifier: 'obj-cat:asset_asset_all',
            name: 'Asset',
            targetObjectType: 'Asset'
          },
         {
            identifier: 'obj-cat:question-paper_collection_01309282781705830427',
            name: 'Question Paper',
            targetObjectType: 'Collection'
          }
        ],
        additionalCategories: [
          'DigitalCourse',
          'DigitalCourse1'
        ],
        lastUpdatedOn: '2022-03-31T10:00:58.199+0000',
        collectionAdditionalCategories: [
          'Textbook',
          'Lesson Plan'
        ],
        contentAdditionalCategories: [
          'Classroom Teaching Video',
          'Concept Map',
          'Curiosity Question Set'
        ],
        apoc_num: 1,
        identifier: '01309282781705830427',
        lastStatusChangedOn: '2020-08-24T05:00:51.381+0000',
        consumerId: '7411b6bd-89f3-40ec-98d1-229dc64ce77d',
        assetAdditionalCategories: [],
        languageCode: [],
        versionKey: '1648720858199',
        contentPrimaryCategories: [
          'Course Assessment',
          'eTextbook',
          'Explanation Content'
        ],
        name: 'NIT123',
        defaultCourseFramework: 'TPD',
        assetPrimaryCategories: [
          'Asset',
          'CertAsset',
          'Certificate Template'
        ],
        status: 'Live',
        defaultFramework: 'ekstep_ncert_k-12'
      }
    }
  },
  objectCategoryDefinition: {
    id: 'api.object.category.definition.read',
    ver: '3.0',
    ts: '2022-07-15T06:32:44ZZ',
    params: {
      resmsgid: '79a26832-e499-4b88-bad0-7b632eccb22a',
      msgid: null,
      err: null,
      status: 'successful',
      errmsg: null
    },
    responseCode: 'OK',
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
                  },
                  level2: {
                    name: 'Textbook Unit',
                    type: 'Unit',
                    mimeType: 'application/vnd.ekstep.content-collection',
                    contentType: 'TextBookUnit',
                    primaryCategory: 'Textbook Unit',
                    iconClass: 'fa fa-folder-o',
                    children: {
                      Content: []
                    }
                  },
                  level3: {
                    name: 'Textbook Unit',
                    type: 'Unit',
                    mimeType: 'application/vnd.ekstep.content-collection',
                    contentType: 'TextBookUnit',
                    primaryCategory: 'Textbook Unit',
                    iconClass: 'fa fa-folder-o',
                    children: {
                      Content: []
                    }
                  },
                  level4: {
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
                    default: 'No'
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
                  enabled: 'No',
                  autoBatch: 'No'
                },
                additionalProperties: false
              },
              additionalCategories: {
                type: 'array',
                items: {
                  type: 'string'
                },
                default: [
                  'Textbook'
                ]
              },
              userConsent: {
                type: 'string',
                enum: [
                  'Yes',
                  'No'
                ],
                default: 'Yes'
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
              },
              {
                name: 'Content details',
                renderingHints: {
                  class: 'd-grid-inline-3 display-sectionName'
                },
                fields: [
                  {
                    code: 'contentdetailsOne',
                    name: 'Appropriate Title, Description',
                    label: 'Appropriate Title, Description',
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
                    code: 'contentdetailsTwo',
                    name: 'Correct Board, Grade, Subject, Medium',
                    label: 'Correct Board, Grade, Subject, Medium',
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
                    code: 'contentdetailsThree',
                    name: 'Appropriate tags such as Resource Type, Concepts',
                    label: 'Appropriate tags such as Resource Type, Concepts',
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
                    code: 'contentdetailsFour',
                    name: 'Relevant Keywords',
                    label: 'Relevant Keywords',
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
              },
              {
                name: 'Usability',
                renderingHints: {
                  class: 'd-grid-inline-3 display-sectionName'
                },
                fields: [
                  {
                    code: 'usabilityOne',
                    name: 'Content plays correctly',
                    label: 'Content plays correctly',
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
                    code: 'usabilityTwo',
                    name: 'Can see the content clearly on Desktop and App',
                    label: 'Can see the content clearly on Desktop and App',
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
                    code: 'usabilityThree',
                    name: 'Audio (if any) is clear and easy to understand',
                    label: 'Audio (if any) is clear and easy to understand',
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
                    code: 'usabilityFour',
                    name: 'No Spelling mistakes in the text',
                    label: 'No Spelling mistakes in the text',
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
                    code: 'usabilityFive',
                    name: 'Language is simple to understand',
                    label: 'Language is simple to understand',
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
    id: 'api.v3.read',
    ver: '1.0',
    ts: '2022-07-15T08:06:17.332Z',
    params: {
      resmsgid: '00d7cb40-0415-11ed-9e27-273dd190c405',
      msgid: '00d644a0-0415-11ed-b26e-0b37a71bdbd4',
      status: 'successful',
      err: null,
      errmsg: null
    },
    responseCode: 'OK',
    result: {
      content: {
        ownershipType: [
          'createdBy'
        ],
        unitIdentifiers: [
          'do_11357572585043558411138'
        ],
        copyright: '123',
        se_gradeLevelIds: [
          'ekstep_ncert_k-12_gradelevel_class10'
        ],
        organisationId: '4d9484b1-af1f-4e85-8bb8-031dc54c30f3',
        previewUrl: 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/ecml/do_11357573655467622411178-latest',
        subject: [
          'Hindi'
        ],
        channel: '01309282781705830427',
        downloadUrl: 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_11357573655467622411178/sa_1657262162650_do_11357573655467622411178_1.ecar',
        language: [
          'English'
        ],
        source: 'https://dock.sunbirded.org/api/content/v1/read/do_11357573655467622411178',
        mimeType: 'application/vnd.ekstep.ecml-archive',
        objectType: 'Content',
        se_mediums: [
          'English'
        ],
        gradeLevel: [
          'Class 10'
        ],
        appIcon: '',
        primaryCategory: 'Course Assessment',
        contentEncoding: 'gzip',
        artifactUrl: 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_11357573655467622411178/artifact/1657262154968_do_11357573655467622411178.zip',
        contentType: 'SelfAssess',
        se_gradeLevels: [
          'Class 10'
        ],
        trackable: {
          enabled: 'No',
          autoBatch: 'No'
        },
        identifier: 'do_11357573655467622411178',
        audience: [
          'Student'
        ],
        se_boardIds: [
          'ekstep_ncert_k-12_board_cbse'
        ],
        subjectIds: [
          'ekstep_ncert_k-12_subject_hindi'
        ],
        visibility: 'Default',
        author: 'sonet1@yopmail.com',
        discussionForum: {
          enabled: 'No'
        },
        mediaType: 'content',
        osId: 'org.ekstep.quiz.app',
        languageCode: [
          'en'
        ],
        lastPublishedBy: '49bab374-2758-4b86-8891-1c2f330c95ca',
        version: 2,
        se_subjects: [
          'Hindi'
        ],
        license: 'CC BY 4.0',
        maxAttempts: 25,
        prevState: 'Review',
        size: 344721,
        lastPublishedOn: '2022-07-08T06:35:59.560+0000',
        name: 'SA',
        mediumIds: [
          'ekstep_ncert_k-12_medium_english'
        ],
        status: 'Live',
        code: '03daffe6-ab29-5571-a644-5fbb424304f0',
        interceptionPoints: {},
        credentials: {
          enabled: 'No'
        },
        prevStatus: 'Processing',
        origin: 'do_11357573655467622411178',
        streamingUrl: 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/ecml/do_11357573655467622411178-latest',
        medium: [
          'English'
        ],
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
        questionCategories: [
          'SA'
        ],
        cloudStorageKey: 'content/do_11357573655467622411178/artifact/1657262154968_do_11357573655467622411178.zip',
        se_subjectIds: [
          'ekstep_ncert_k-12_subject_hindi'
        ],
        se_FWIds: [
          'ekstep_ncert_k-12'
        ],
        pkgVersion: 1,
        versionKey: '1657262152646',
        idealScreenDensity: 'hdpi',
        framework: 'ekstep_ncert_k-12',
        s3Key: 'content/do_11357573655467622411178/artifact/1657194798562_do_11357573655467622411178_1657262138570.zip',
        boardIds: [
          'ekstep_ncert_k-12_board_cbse'
        ],
        lastSubmittedOn: '2022-07-08T06:35:52.290+0000',
        createdBy: '348405cb-c636-4e4c-b5d7-cc223576b436',
        compatibilityLevel: 1,
        gradeLevelIds: [
          'ekstep_ncert_k-12_gradelevel_class10'
        ],
        board: 'CBSE',
        programId: '51cd1430-fde7-11ec-be8b-9962d8844469'
      }
    }
  }
};
