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
          },
          {
            name: 'nit_tpd',
            relation: 'hasSequenceMember',
            identifier: 'nit_tpd',
            description: 'nit_tpd Framework',
            objectType: 'Framework',
            status: 'Live',
            type: 'TPD'
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
            identifier: 'obj-cat:content-playlist_collection_all',
            name: 'Content Playlist',
            targetObjectType: 'Collection'
          },
          {
            identifier: 'obj-cat:content-playlist_content_all',
            name: 'Content Playlist',
            targetObjectType: 'Content'
          },
          {
            identifier: 'obj-cat:course-assessment_collection_all',
            name: 'Course Assessment',
            targetObjectType: 'Collection'
          },
          {
            identifier: 'obj-cat:course-assessment_content_all',
            name: 'Course Assessment',
            targetObjectType: 'Content'
          },
          {
            identifier: 'obj-cat:curriculum-course_collection_all',
            name: 'Curriculum Course',
            targetObjectType: 'Collection'
          },
          {
            identifier: 'obj-cat:demo-practice-question-set_questionset_all',
            name: 'Demo Practice Question Set',
            targetObjectType: 'QuestionSet'
          },
          {
            identifier: 'obj-cat:digital-textbook_collection_all',
            name: 'Digital Textbook',
            targetObjectType: 'Collection'
          },
          {
            identifier: 'obj-cat:digitalcourse_collection_all',
            name: 'DigitalCourse',
            targetObjectType: 'Collection'
          },
          {
            identifier: 'obj-cat:digitalcourse1_collection_all',
            name: 'DigitalCourse1',
            targetObjectType: 'Collection'
          },
          {
            identifier: 'obj-cat:digitalcourse2_collection_all',
            name: 'DigitalCourse2',
            targetObjectType: 'Collection'
          },
          {
            identifier: 'obj-cat:etextbook_content_all',
            name: 'eTextbook',
            targetObjectType: 'Content'
          },
          {
            identifier: 'obj-cat:explanation-content_content_all',
            name: 'Explanation Content',
            targetObjectType: 'Content'
          },
          {
            identifier: 'obj-cat:ftb-question_question_all',
            name: 'FTB Question',
            targetObjectType: 'Question'
          },
          {
            identifier: 'obj-cat:learning-resource_content_all',
            name: 'Learning Resource',
            targetObjectType: 'Content'
          },
          {
            identifier: 'obj-cat:learningpath1_collection_all',
            name: 'LearningPath1',
            targetObjectType: 'Collection'
          },
          {
            identifier: 'obj-cat:multiple-choice-question_question_all',
            name: 'Multiple Choice Question',
            targetObjectType: 'Question'
          },
          {
            identifier: 'obj-cat:observation_questionset_all',
            name: 'Observation',
            targetObjectType: 'QuestionSet'
          },
          {
            identifier: 'obj-cat:practice-question-set_question_all',
            name: 'Practice Question Set',
            targetObjectType: 'Question'
          },
          {
            identifier: 'obj-cat:practice-question-set_content_all',
            name: 'Practice Question Set',
            targetObjectType: 'Content'
          },
          {
            identifier: 'obj-cat:professional-development-course_collection_all',
            name: 'Professional Development Course',
            targetObjectType: 'Collection'
          },
          {
            identifier: 'obj-cat:subjective-question_question_all',
            name: 'Subjective Question',
            targetObjectType: 'Question'
          },
          {
            identifier: 'obj-cat:survey_questionset_all',
            name: 'Survey',
            targetObjectType: 'QuestionSet'
          },
          {
            identifier: 'obj-cat:teacher-resource_content_all',
            name: 'Teacher Resource',
            targetObjectType: 'Content'
          },
          {
            identifier: 'obj-cat:text-asset_asset_all',
            name: 'Text Asset',
            targetObjectType: 'Asset'
          },
          {
            identifier: 'obj-cat:video-transcript_asset_all',
            name: 'Video transcript',
            targetObjectType: 'Asset'
          },
          {
            identifier: 'obj-cat:course_collection_01309282781705830427',
            name: 'Course',
            targetObjectType: 'Collection'
          },
          {
            identifier: 'obj-cat:ekstep-new-qs_questionset_01309282781705830427',
            name: 'Ekstep New QS',
            targetObjectType: 'QuestionSet'
          },
          {
            identifier: 'obj-cat:exam-question_content_01309282781705830427',
            name: 'Exam Question',
            targetObjectType: 'Content'
          },
          {
            identifier: 'obj-cat:exam-question-set_questionset_01309282781705830427',
            name: 'Exam Question Set',
            targetObjectType: 'QuestionSet'
          },
          {
            identifier: 'obj-cat:haryana-new-qs_questionset_01309282781705830427',
            name: 'Haryana_New_QS',
            targetObjectType: 'QuestionSet'
          },
          {
            identifier: 'obj-cat:observation-with-rubrics_questionset_01309282781705830427',
            name: 'Observation With Rubrics',
            targetObjectType: 'QuestionSet'
          },
          {
            identifier: 'obj-cat:practice-set_questionset_01309282781705830427',
            name: 'Practice Set',
            targetObjectType: 'QuestionSet'
          },
          {
            identifier: 'obj-cat:question-paper_collection_01309282781705830427',
            name: 'Question Paper',
            targetObjectType: 'Collection'
          }
        ],
        additionalCategories: [
          'DigitalCourse',
          'DigitalCourse1',
          'DigitalCourse2',
          'Ekstep New QS',
          'Exam Question Set',
          'Haryana New QS',
          'haryana Question Set',
          'haryana_New_Question Set',
          'LearningPath1',
          'Observation',
          'Practice Set',
          'Survey',
          'Text Asset',
          'Video transcript'
        ],
        lastUpdatedOn: '2022-03-31T10:00:58.199+0000',
        collectionAdditionalCategories: [
          'Textbook',
          'Lesson Plan'
        ],
        contentAdditionalCategories: [
          'Classroom Teaching Video',
          'Concept Map',
          'Curiosity Question Set',
          'Experiential Resource',
          'Explanation Video',
          'Focus Spot',
          'Learning Outcome Definition',
          'Lesson Plan',
          'Marking Scheme Rubric',
          'Pedagogy Flow',
          'Previous Board Exam Papers',
          'TV Lesson',
          'Textbook'
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
          'Explanation Content',
          'Learning Resource',
          'Practice Question Set',
          'Teacher Resource',
          'Exam Question'
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
              },
              {
                code: 'description',
                dataType: 'text',
                description: 'Description of the content',
                editable: true,
                inputType: 'textarea',
                label: 'Description',
                name: 'Description',
                placeholder: 'Description',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                required: false,
                visible: true
              },
              {
                code: 'primaryCategory',
                dataType: 'text',
                description: 'Type',
                editable: false,
                renderingHints: {},
                inputType: 'select',
                label: 'Category',
                name: 'Type',
                placeholder: '',
                required: true,
                visible: true,
                validations: []
              },
              {
                code: 'additionalCategories',
                visible: true,
                editable: true,
                displayProperty: 'Editable',
                dataType: 'list',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                description: 'Subject of the Content to use to teach',
                index: 7,
                label: 'Content Additional Categories',
                required: false,
                name: 'additionalCategories',
                inputType: 'nestedselect',
                placeholder: 'Content Additional Categories'
              },
              {
                code: 'subjectIds',
                visible: true,
                depends: [],
                editable: false,
                dataType: 'list',
                sourceCategory: 'subject',
                output: 'identifier',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                description: '',
                label: 'Subjects covered in the course',
                required: true,
                name: 'Subject',
                inputType: 'nestedselect',
                placeholder: 'Select Subject'
              },
              {
                code: 'topicsIds',
                visible: true,
                editable: true,
                dataType: 'list',
                depends: [
                  'subjectIds'
                ],
                sourceCategory: 'topic',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                name: 'Topic',
                description: 'Choose a Topics',
                inputType: 'topicselector',
                label: 'Topic(s)',
                placeholder: 'Choose Topics',
                required: false,
                output: 'identifier'
              },
              {
                code: 'copyright',
                dataType: 'text',
                description: 'Copyright',
                editable: true,
                index: 4,
                inputType: 'text',
                label: 'Copyright and Year:',
                name: 'Copyright',
                placeholder: 'Enter Copyright and Year',
                tooltip: 'If you are an individual, creating original content, you are the copyright holder. If you are creating this course content on behalf of an organisation, the organisation may be the copyright holder. ',
                renderingHints: {
                  class: 'sb-g-col-lg-1 required'
                },
                required: true,
                validations: [
                  {
                    type: 'required',
                    message: 'Copyright is required'
                  }
                ]
              },
              {
                code: 'license',
                visible: true,
                editable: true,
                displayProperty: 'Editable',
                dataType: 'text',
                renderingHints: {
                  class: 'sb-g-col-lg-1 required'
                },
                description: 'Subject of the Content to use to teach',
                index: 6,
                label: 'License:',
                required: false,
                name: 'license',
                inputType: 'select',
                placeholder: 'license',
                tooltip: 'Choose the more appropriate Creative commons license for this Content. ',
                validations: []
              },
              {
                code: 'author',
                dataType: 'text',
                description: 'Author',
                editable: true,
                index: 5,
                inputType: 'text',
                label: 'Author:',
                name: 'Author',
                placeholder: 'Author',
                tooltip: 'Provide name of creator of this content.',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                required: true,
                validations: [
                  {
                    type: 'required',
                    message: 'Author is required'
                  }
                ]
              },
              {
                code: 'attributions',
                dataType: 'list',
                description: 'Attributions',
                editable: true,
                index: 3,
                inputType: 'text',
                label: 'Attributions :',
                name: 'attribution',
                placeholder: '',
                tooltip: 'If you have relied on another work to create this content, provide the name of that creator and the source of that work.',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                required: false
              },
              {
                code: 'contentPolicyCheck',
                visible: true,
                editable: true,
                displayProperty: 'Editable',
                renderingHints: {
                  class: 'sb-g-col-lg-1 required'
                },
                description: 'Content Policy check',
                index: 7,
                labelHtml: '<p class=\'font-italic\'>I agree that by submitting / publishing this Content, I confirm that this Content complies with prescribed guidelines, including the Terms of Use and Content Policy and that I consent to publish it under the <a class=\'link font-weight-bold\'  href=\'https://creativecommons.org/licenses\' target=\'_blank\'>Creative Commons Framework in </a> accordance with the  <a class=\'link font-weight-bold\'  href=\'/terms-of-use.html\' target=\'_blank\'> Content Policy.</a> I have made sure that I do not violate others\' copyright or privacy rights.</p>',
                required: true,
                name: 'contentPolicyCheck',
                inputType: 'checkbox',
                placeholder: 'Content Policy Check',
                validations: [
                  {
                    type: 'required',
                    message: 'Content Policy Check is required'
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
                    code: 'appIcon',
                    dataType: 'text',
                    description: 'appIcon of the content',
                    editable: true,
                    inputType: 'appIcon',
                    label: 'Icon',
                    name: 'Icon',
                    placeholder: 'Icon',
                    renderingHints: {
                      class: 'sb-g-col-lg-1 required'
                    },
                    required: true,
                    visible: true
                  },
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
                  },
                  {
                    code: 'description',
                    dataType: 'text',
                    description: 'Description of the content',
                    editable: true,
                    inputType: 'textarea',
                    label: 'Description',
                    name: 'Description',
                    placeholder: 'Description',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    required: false,
                    visible: true,
                    validations: [
                      {
                        type: 'maxLength',
                        value: '256',
                        message: 'Input is Exceeded'
                      }
                    ]
                  },
                  {
                    code: 'keywords',
                    visible: true,
                    editable: true,
                    dataType: 'list',
                    name: 'Keywords',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    description: 'Keywords for the content',
                    inputType: 'keywords',
                    label: 'Keywords',
                    placeholder: 'Input the keyword and PRESS enter',
                    required: false,
                    validations: []
                  }
                ]
              },
              {
                name: 'Second Section',
                fields: [
                  {
                    code: 'dialcodeRequired',
                    dataType: 'text',
                    description: 'QR CODE REQUIRED',
                    editable: true,
                    default: 'No',
                    index: 5,
                    inputType: 'radio',
                    label: 'QR code required',
                    name: 'dialcodeRequired',
                    placeholder: 'QR code required',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    range: [
                      'Yes',
                      'No'
                    ],
                    required: false,
                    visible: true
                  },
                  {
                    code: 'dialcodes',
                    depends: [
                      'dialcodeRequired'
                    ],
                    dataType: 'list',
                    description: 'Digital Infrastructure for Augmented Learning',
                    editable: true,
                    inputType: 'dialcode',
                    label: 'QR code',
                    name: 'dialcode',
                    placeholder: 'Enter code here',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    required: true,
                    visible: true,
                    validations: [
                      {
                        type: 'minLength',
                        value: '2'
                      },
                      {
                        type: 'maxLength',
                        value: '20'
                      }
                    ]
                  }
                ]
              },
              {
                name: 'Second Section',
                fields: [
                  {
                    code: 'primaryCategory',
                    dataType: 'text',
                    description: 'Type',
                    editable: false,
                    renderingHints: {},
                    inputType: 'select',
                    label: 'Category',
                    name: 'Type',
                    placeholder: '',
                    required: true,
                    visible: true,
                    validations: []
                  },
                  {
                    code: 'additionalCategories',
                    dataType: 'list',
                    depends: [
                      'primaryCategory'
                    ],
                    description: 'Additonal Category of the Content',
                    editable: true,
                    inputType: 'nestedselect',
                    label: 'Additional Category',
                    name: 'Additional Category',
                    placeholder: 'Select Additional Category',
                    renderingHints: {},
                    required: false,
                    visible: true
                  }
                ]
              },
              {
                name: 'Org Framework Terms',
                fields: [
                  {
                    code: 'audience',
                    dataType: 'list',
                    description: 'Audience',
                    editable: true,
                    inputType: 'nestedselect',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    label: 'Audience Type',
                    name: 'Audience Type',
                    placeholder: 'Select Audience Type',
                    required: false,
                    visible: true,
                    range: [
                      'Student',
                      'Teacher',
                      'Parent',
                      'Administrator'
                    ]
                  },
                  {
                    code: 'boardIds',
                    visible: true,
                    depends: [],
                    editable: true,
                    dataType: 'list',
                    sourceCategory: 'board',
                    output: 'identifier',
                    renderingHints: {
                      class: 'sb-g-col-lg-1 required'
                    },
                    description: 'Board',
                    label: 'Board/Syllabus Covered in the Digital Textbook ',
                    required: false,
                    name: 'Board/Syllabus',
                    inputType: 'select',
                    placeholder: 'Select Board/Syllabus',
                    validations: [
                      {
                        type: 'required',
                        message: 'Board is required'
                      }
                    ]
                  },
                  {
                    code: 'mediumIds',
                    visible: true,
                    depends: [
                      'boardIds'
                    ],
                    editable: true,
                    dataType: 'list',
                    sourceCategory: 'medium',
                    output: 'identifier',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    description: '',
                    label: 'Medium(s) covered in the Digital Textbook',
                    required: false,
                    name: 'Medium',
                    inputType: 'nestedselect',
                    placeholder: 'Select Medium'
                  },
                  {
                    code: 'gradeLevelIds',
                    visible: true,
                    depends: [
                      'boardIds',
                      'mediumIds'
                    ],
                    editable: true,
                    dataType: 'list',
                    sourceCategory: 'gradeLevel',
                    output: 'identifier',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    description: 'Class',
                    label: 'Class(es) covered in the Digital Textbook',
                    required: false,
                    name: 'Class',
                    inputType: 'nestedselect',
                    placeholder: 'Select Class'
                  },
                  {
                    code: 'subjectIds',
                    visible: true,
                    depends: [
                      'boardIds',
                      'mediumIds',
                      'gradeLevelIds'
                    ],
                    editable: true,
                    dataType: 'list',
                    sourceCategory: 'subject',
                    output: 'identifier',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    description: '',
                    label: 'Subject(s) covered in the Digital Textbook',
                    required: false,
                    name: 'Subject',
                    inputType: 'nestedselect',
                    placeholder: 'Select Subject'
                  },
                  {
                    code: 'topicsIds',
                    visible: true,
                    editable: true,
                    dataType: 'list',
                    depends: [
                      'framework',
                      'subjectIds'
                    ],
                    sourceCategory: 'topic',
                    renderingHints: {},
                    name: 'Topic',
                    description: 'Choose a Topics',
                    inputType: 'topicselector',
                    label: 'Topics covered in the course',
                    placeholder: 'Choose Topics',
                    required: false,
                    output: 'identifier'
                  }
                ]
              },
              {
                name: 'Fourth Section',
                fields: [
                  {
                    code: 'author',
                    dataType: 'text',
                    description: 'Author of the content',
                    editable: true,
                    inputType: 'text',
                    label: 'Author',
                    name: 'Author',
                    placeholder: 'Author',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    required: false,
                    visible: true
                  },
                  {
                    code: 'attributions',
                    dataType: 'text',
                    description: 'Attributions',
                    editable: true,
                    inputType: 'text',
                    label: 'Attributions',
                    name: 'Attributions',
                    placeholder: 'Attributions',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    required: false,
                    visible: true
                  },
                  {
                    code: 'copyright',
                    dataType: 'text',
                    description: 'Copyright',
                    editable: true,
                    inputType: 'text',
                    label: 'Copyright',
                    name: 'Copyright & year',
                    placeholder: 'Copyright',
                    renderingHints: {
                      class: 'sb-g-col-lg-1 required'
                    },
                    required: true,
                    visible: true,
                    validations: [
                      {
                        type: 'required',
                        message: 'Copyright is required'
                      }
                    ]
                  },
                  {
                    code: 'copyrightYear',
                    dataType: 'number',
                    description: 'Year',
                    editable: true,
                    inputType: 'text',
                    label: 'Copyright Year',
                    name: 'Copyright Year',
                    placeholder: 'Copyright Year',
                    renderingHints: {
                      class: 'sb-g-col-lg-1 required'
                    },
                    required: true,
                    visible: true,
                    validations: [
                      {
                        type: 'required',
                        message: 'Copyright Year is required'
                      },
                      {
                        type: 'minLength',
                        message: 'Year should be a 4 digit number',
                        value: 4
                      },
                      {
                        type: 'maxLength',
                        message: 'Year should be a 4 digit number',
                        value: 4
                      }
                    ]
                  },
                  {
                    code: 'license',
                    dataType: 'text',
                    description: 'license',
                    editable: true,
                    inputType: 'select',
                    label: 'License',
                    name: 'license',
                    placeholder: 'Select License',
                    renderingHints: {
                      class: 'sb-g-col-lg-1 required'
                    },
                    required: false,
                    visible: true,
                    defaultValue: 'CC BY 4.0',
                    validations: []
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
              },
              {
                code: 'keywords',
                visible: true,
                editable: true,
                dataType: 'list',
                name: 'Keywords',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                description: 'Keywords for the content',
                inputType: 'keywords',
                label: 'Keywords',
                placeholder: 'Input the keyword and PRESS enter',
                required: false,
                validations: []
              },
              {
                code: 'relTrackable',
                name: 'Track in collection',
                label: 'Track in collection',
                placeholder: 'Track in collection',
                description: '',
                default: false,
                dataType: 'boolean',
                inputType: 'checkbox',
                editable: true,
                required: false,
                visible: true,
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                }
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
              },
              {
                code: 'board',
                visible: true,
                depends: [],
                editable: true,
                dataType: 'list',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                description: 'Board',
                label: 'Board',
                required: false,
                name: 'Board',
                inputType: 'select',
                placeholder: 'Select Board',
                output: 'name'
              },
              {
                code: 'medium',
                visible: true,
                depends: [
                  'board'
                ],
                editable: true,
                dataType: 'list',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                description: '',
                label: 'Medium(s)',
                required: false,
                name: 'Medium',
                inputType: 'nestedselect',
                placeholder: 'Select Medium',
                output: 'name'
              },
              {
                code: 'gradeLevel',
                visible: true,
                depends: [
                  'board',
                  'medium'
                ],
                editable: true,
                default: '',
                dataType: 'list',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                description: 'Class',
                label: 'Class(es)',
                required: false,
                name: 'Class',
                inputType: 'nestedselect',
                placeholder: 'Select Class',
                output: 'name'
              },
              {
                code: 'subject',
                visible: true,
                depends: [
                  'board',
                  'medium',
                  'gradeLevel'
                ],
                editable: true,
                default: '',
                dataType: 'list',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                description: '',
                label: 'Subject(s)',
                required: false,
                name: 'Subject',
                inputType: 'nestedselect',
                placeholder: 'Select Subject',
                output: 'name'
              },
              {
                code: 'topic',
                visible: true,
                editable: true,
                dataType: 'list',
                depends: [
                  'board',
                  'medium',
                  'gradeLevel',
                  'subject'
                ],
                default: '',
                renderingHints: {
                  class: 'sb-g-col-lg-1'
                },
                name: 'Topic',
                description: 'Choose a Topics',
                inputType: 'topicselector',
                label: 'Topic(s)',
                placeholder: 'Choose Topics',
                required: false
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
                  },
                  {
                    code: 'description',
                    dataType: 'text',
                    description: 'Description of the content',
                    editable: true,
                    inputType: 'textarea',
                    label: 'Description',
                    name: 'Description',
                    placeholder: 'Description',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    required: false,
                    visible: true,
                    validations: [
                      {
                        type: 'maxLength',
                        value: '256',
                        message: 'Input is Exceeded'
                      }
                    ]
                  },
                  {
                    code: 'keywords',
                    visible: true,
                    editable: true,
                    dataType: 'list',
                    name: 'Keywords',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    description: 'Keywords for the content',
                    inputType: 'keywords',
                    label: 'Keywords',
                    placeholder: 'Input the keyword and PRESS enter',
                    required: false,
                    validations: []
                  },
                  {
                    code: 'topic',
                    visible: true,
                    depends: [],
                    editable: true,
                    dataType: 'list',
                    renderingHints: {},
                    name: 'Topic',
                    description: 'Choose a Topics',
                    index: 11,
                    inputType: 'topicselector',
                    label: 'Topics',
                    placeholder: 'Choose Topics',
                    required: false,
                    validations: []
                  },
                  {
                    code: 'dialcodeRequired',
                    dataType: 'text',
                    description: 'QR CODE REQUIRED',
                    editable: true,
                    default: 'No',
                    index: 5,
                    inputType: 'radio',
                    label: 'QR code required',
                    name: 'dialcodeRequired',
                    placeholder: 'QR code required',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    range: [
                      'Yes',
                      'No'
                    ],
                    required: false,
                    visible: true
                  },
                  {
                    code: 'dialcodes',
                    depends: [
                      'dialcodeRequired'
                    ],
                    dataType: 'list',
                    description: 'Digital Infrastructure for Augmented Learning',
                    editable: true,
                    inputType: 'dialcode',
                    label: 'QR code',
                    name: 'dialcode',
                    placeholder: 'Enter code here',
                    renderingHints: {
                      class: 'sb-g-col-lg-1'
                    },
                    required: true,
                    visible: true,
                    validations: [
                      {
                        type: 'minLength',
                        value: '2'
                      },
                      {
                        type: 'maxLength',
                        value: '20'
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
        plugins: [
          {
            identifier: 'org.sunbird.questionunit.quml',
            semanticVersion: '1.1'
          }
        ],
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
        variants: {
          full: {
            ecarUrl: 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_11357573655467622411178/sa_1657262162650_do_11357573655467622411178_1.ecar',
            size: '341849'
          },
          spine: {
            ecarUrl: 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_11357573655467622411178/sa_1657262163096_do_11357573655467622411178_1_SPINE.ecar',
            size: '3586'
          }
        },
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
        se_boards: [
          'CBSE'
        ],
        se_mediumIds: [
          'ekstep_ncert_k-12_medium_english'
        ],
        processId: '10b92bc4-219f-4a21-ad9d-c519cd4e426a',
        contentDisposition: 'inline',
        lastUpdatedOn: '2022-07-08T06:36:03.272+0000',
        originData: {
          identifier: 'do_11357573655467622411178',
          repository: 'https://dock.sunbirded.org/api/content/v1/read/do_11357573655467622411178'
        },
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
