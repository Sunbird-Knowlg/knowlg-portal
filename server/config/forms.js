module.exports = {
    // type_subtype_action
    "content_resource_review": {
        "id": "api.form.read",
        "params": {
            "resmsgid": "a8b3115e-8f6d-424a-804f-9afc35ce6905",
            "msgid": "19d2f990-8700-449a-bb82-a79ff185af30",
            "status": "successful"
        },
        "responseCode": "OK",
        "result": {
            "form": {
                "type": "content",
                "subtype": "resource",
                "action": "review",
                "component": "*",
                "framework": "*",
                "data": {
                    "templateName": "defaultTemplate",
                    "action": "review",
                    "fields": [
                        {
                            "code": "appicon",
                            "visible": true,
                            "editable": true,
                            "dataType": "url",
                            "renderingHints": {},
                            "name": "App Icon",
                            "description": "App Icon",
                            "index": 1,
                            "inputType": "file",
                            "label": "Icon",
                            "placeholder": "App Icon",
                            "required": true
                        },
                        {
                            "code": "name",
                            "visible": true,
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "name": "Title",
                            "description": "Title of the content",
                            "index": 2,
                            "inputType": "text",
                            "label": "Title",
                            "placeholder": "Enter Title For Book",
                            "required": true
                        },
                        {
                            "code": "description",
                            "visible": true,
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "name": "Description",
                            "description": "Brief description",
                            "index": 3,
                            "inputType": "textarea",
                            "label": "Description",
                            "placeholder": "Brief description about the Book",
                            "required": false
                        },
                        {
                            "code": "keywords",
                            "visible": true,
                            "editable": true,
                            "dataType": "list",
                            "name": "Keywords",
                            "description": "Keywords for the content",
                            "index": 4,
                            "inputType": "keywordsuggestion",
                            "label": "keywords",
                            "placeholder": "Enter Keywords",
                            "required": false
                        },
                        {
                            "code": "primaryCategory",
                            "visible": true,
                            "editable": false,
                            "dataType": "text",
                            "renderingHints": {},
                            "description": "Content Type",
                            "index": 5,
                            "label": "Content Type",
                            "required": false,
                            "name": "contentType",
                            "inputType": "text",
                            "placeholder": ""
                        },
                        {
                            "code": "additionalCategories",
                            "dataType": "list",
                            "description": "Additonal Category of the Content",
                            "editable": true,
                            "index": 5,
                            "inputType": "multiselect",
                            "label": "Additional Category",
                            "name": "Additional Category",
                            "placeholder": "Select Additional Category",
                            "renderingHints": {},
                            "range": [
                                "Classroom Teaching Video",
                                "Concept Map",
                                "Curiosity Question Set",
                                "Textbook",
                                "Experiential Resource",
                                "Explanation Video",
                                "Focus Spot",
                                "Learning Outcome Definition",
                                "Marking Scheme Rubric",
                                "Pedagogy Flow",
                                "Lesson Plan",
                                "Previous Board Exam Papers",
                                "TV Lesson"
                            ],
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "board",
                            "visible": true,
                            "depends": [
                                "medium",
                                "gradeLevel",
                                "subject",
                                "topic"
                            ],
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "description": "Board",
                            "index": 6,
                            "label": "Board/Syllabus",
                            "required": true,
                            "name": "Board/Syllabus",
                            "inputType": "select",
                            "placeholder": "Select Board/Syllabus"
                        },
                        {
                            "code": "medium",
                            "visible": true,
                            "depends": [
                                "gradeLevel",
                                "subject",
                                "topic"
                            ],
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "description": "",
                            "index": 7,
                            "label": "Medium",
                            "required": true,
                            "name": "medium",
                            "inputType": "multiselect",
                            "placeholder": "Select Medium"
                        },
                        {
                            "code": "gradeLevel",
                            "visible": true,
                            "depends": [
                                "subject",
                                "topic"
                            ],
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "description": "Class",
                            "index": 8,
                            "label": "Class",
                            "required": true,
                            "name": "Class",
                            "inputType": "multiselect",
                            "placeholder": "Select Class"
                        },
                        {
                            "code": "subject",
                            "visible": true,
                            "depends": [
                                "topic"
                            ],
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "description": "",
                            "index": 9,
                            "label": "Subject",
                            "required": true,
                            "name": "Subject",
                            "inputType": "multiselect",
                            "placeholder": "Select Subject"
                        },
                        {
                            "code": "topic",
                            "visible": true,
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "name": "Topic",
                            "description": "Choose a Topics",
                            "index": 10,
                            "inputType": "topicselector",
                            "label": "Topics",
                            "placeholder": "Choose Topics",
                            "required": false
                        },
                        {
                            "code": "audience",
                            "visible": true,
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "description": "",
                            "index": 11,
                            "range": [
                                "Learner",
                                "Instructor"
                            ],
                            "label": "Audience",
                            "required": false,
                            "name": "Audience",
                            "inputType": "select",
                            "placeholder": "Select Audience"
                        },
                        {
                            "code": "author",
                            "visible": true,
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "name": "Author",
                            "description": "Original Author",
                            "index": 12,
                            "inputType": "text",
                            "label": "Original Author",
                            "placeholder": "Author",
                            "required": false
                        },
                        {
                            "code": "attributions",
                            "visible": true,
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "name": "attribution",
                            "description": "Attributions",
                            "index": 13,
                            "inputType": "text",
                            "label": "Attributions",
                            "placeholder": "Attributions",
                            "required": false
                        },
                        {
                            "code": "copyright",
                            "visible": true,
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "name": "Copyright",
                            "description": "Copyright",
                            "index": 14,
                            "inputType": "text",
                            "label": "Copyright",
                            "placeholder": "Copyright",
                            "required": false
                        },
                        {
                            "code": "copyrightYear",
                            "visible": true,
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "description": "Year of Creation",
                            "index": 15,
                            "label": "Year of Creation",
                            "required": true,
                            "name": "Year of Creation",
                            "inputType": "number",
                            "placeholder": "Enter Year of Creation",
                            "validation": [
                                {
                                    "type": "min",
                                    "message": "Maximum length of the year should be 4",
                                    "value": "4"
                                },
                                {
                                    "type": "max",
                                    "message": "Minimum length of the year should be 4",
                                    "value": "4"
                                }
                            ]
                        },
                        {
                            "code": "displayScore",
                            "dataType": "boolean",
                            "description": "Display Score",
                            "editable": true,
                            "inputType": "select",
                            "range": [
                                {
                                    "name": "Yes",
                                    "value": "true"
                                },
                                {
                                    "name": "No",
                                    "value": "false"
                                }
                            ],
                            "label": "Display Score",
                            "name": "Display Score",
                            "placeholder": "Display Score",
                            "renderingHints": {},
                            "required": false,
                            "visible": true,
                            "index": 16
                        },
                        {
                            "code": "license",
                            "visible": true,
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "name": "license",
                            "description": "License of the content",
                            "index": 17,
                            "inputType": "licenses",
                            "label": "license",
                            "placeholder": "license",
                            "required": true
                        },
                        {
                            "code": "licenseterms",
                            "visible": true,
                            "editable": true,
                            "defaultValue": "By creating any type of content (resources, books, courses etc.) on DIKSHA, you consent to publish it under the Creative Commons License Framework. Please choose the applicable creative commons license you wish to apply to your content.",
                            "dataType": "text",
                            "renderingHints": {
                                "value": {
                                    "video/x-youtube": "By linking or uploading YouTube videos on DIKSHA, you consent to publishing it as per the terms of the YouTube video license. DIKSHA accepts only videos with YouTube Standard License or Creative Commons License."
                                },
                                "class": "twelve wide field"
                            },
                            "description": "licenseterms",
                            "index": 18,
                            "label": "License Terms",
                            "required": false,
                            "name": "licenseterms",
                            "inputType": "label",
                            "placeholder": "license"
                        }
                    ]
                },
                "created_on": "2020-05-15T09:45:38.694Z",
                "last_modified_on": "2020-09-16T18:32:26.926Z",
                "rootOrgId": "*"
            }
        },
        "ts": "2022-09-01T08:56:19.205Z",
        "ver": "1.0"
    },
    "content_resource_save": {
        "id": "api.form.read",
        "params": {
            "resmsgid": "c77b156e-68b9-4d02-a06e-d013c7cd1b81",
            "msgid": "c9484974-3228-4ee8-834b-b811e8e3c1c0",
            "status": "successful"
        },
        "responseCode": "OK",
        "result": {
            "form": {
                "type": "content",
                "subtype": "resource",
                "action": "save",
                "component": "*",
                "framework": "*",
                "data": {
                    "templateName": "defaultTemplate",
                    "action": "save",
                    "fields": [
                        {
                            "code": "appicon",
                            "visible": true,
                            "editable": true,
                            "dataType": "url",
                            "renderingHints": {},
                            "name": "App Icon",
                            "description": "App Icon",
                            "index": 1,
                            "inputType": "file",
                            "label": "Icon",
                            "placeholder": "App Icon",
                            "required": false
                        },
                        {
                            "code": "name",
                            "visible": true,
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "name": "Title",
                            "description": "Title of the content",
                            "index": 2,
                            "inputType": "text",
                            "label": "Title",
                            "placeholder": "Enter Title For Book",
                            "required": true,
                            "validation": [
                                {
                                    "type": "max",
                                    "value": "80",
                                    "message": "Input is Exceded"
                                }
                            ]
                        },
                        {
                            "code": "description",
                            "visible": true,
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "name": "Description",
                            "description": "Brief description",
                            "index": 3,
                            "inputType": "textarea",
                            "label": "Description",
                            "placeholder": "Brief description about the Book",
                            "required": false
                        },
                        {
                            "code": "keywords",
                            "visible": true,
                            "editable": true,
                            "dataType": "list",
                            "name": "Keywords",
                            "description": "Keywords for the content",
                            "index": 4,
                            "inputType": "keywordsuggestion",
                            "label": "keywords",
                            "placeholder": "Enter Keywords",
                            "required": false
                        },
                        {
                            "code": "primaryCategory",
                            "visible": true,
                            "editable": false,
                            "dataType": "text",
                            "renderingHints": {},
                            "description": "Content Type",
                            "index": 5,
                            "label": "Content Type",
                            "required": true,
                            "name": "contentType",
                            "inputType": "text",
                            "placeholder": ""
                        },
                        {
                            "code": "additionalCategories",
                            "dataType": "list",
                            "description": "Additonal Category of the Content",
                            "editable": true,
                            "index": 5,
                            "inputType": "multiselect",
                            "label": "Additional Category",
                            "name": "Additional Category",
                            "placeholder": "Select Additional Category",
                            "renderingHints": {},
                            "range": [
                                "Classroom Teaching Video",
                                "Concept Map",
                                "Curiosity Question Set",
                                "Textbook",
                                "Experiential Resource",
                                "Explanation Video",
                                "Focus Spot",
                                "Learning Outcome Definition",
                                "Marking Scheme Rubric",
                                "Pedagogy Flow",
                                "Lesson Plan",
                                "Previous Board Exam Papers",
                                "TV Lesson"
                            ],
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "board",
                            "visible": true,
                            "depends": [
                                "medium",
                                "gradeLevel",
                                "subject",
                                "topic"
                            ],
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "description": "Board",
                            "index": 7,
                            "label": "Board/Syllabus",
                            "required": false,
                            "name": "Board/Syllabus",
                            "inputType": "select",
                            "placeholder": "Select Board/Syllabus"
                        },
                        {
                            "code": "medium",
                            "visible": true,
                            "depends": [
                                "gradeLevel",
                                "subject",
                                "topic"
                            ],
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "description": "",
                            "index": 8,
                            "label": "Medium",
                            "required": false,
                            "name": "medium",
                            "inputType": "multiselect",
                            "placeholder": "Select Medium"
                        },
                        {
                            "code": "gradeLevel",
                            "visible": true,
                            "depends": [
                                "subject",
                                "topic"
                            ],
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "description": "Class",
                            "index": 9,
                            "label": "Class",
                            "required": false,
                            "name": "Class",
                            "inputType": "multiselect",
                            "placeholder": "Select Class"
                        },
                        {
                            "code": "subject",
                            "visible": true,
                            "depends": [
                                "topic"
                            ],
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "description": "",
                            "index": 10,
                            "label": "Subject",
                            "required": false,
                            "name": "Subject",
                            "inputType": "multiselect",
                            "placeholder": "Select Subject"
                        },
                        {
                            "code": "topic",
                            "visible": true,
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "name": "Topic",
                            "description": "Choose a Topics",
                            "index": 11,
                            "inputType": "topicselector",
                            "label": "Topics",
                            "placeholder": "Choose Topics",
                            "required": false
                        },
                        {
                            "code": "resourceType",
                            "visible": true,
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "description": "Resource Type",
                            "index": 12,
                            "range": [
                                "Teach",
                                "Practice",
                                "Learn",
                                "Test",
                                "Play",
                                "Read",
                                "Experiment"
                            ],
                            "label": "Resource Type",
                            "required": false,
                            "name": "resourceType",
                            "inputType": "select",
                            "placeholder": ""
                        },
                        {
                            "code": "audience",
                            "visible": true,
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "description": "",
                            "index": 13,
                            "range": [
                                "Learner",
                                "Instructor"
                            ],
                            "label": "Audience",
                            "required": false,
                            "name": "Audience",
                            "inputType": "select",
                            "placeholder": "Select Audience"
                        },
                        {
                            "code": "author",
                            "dataType": "text",
                            "description": "Original Author",
                            "editable": true,
                            "index": 14,
                            "inputType": "text",
                            "label": "Original Author",
                            "name": "Author",
                            "placeholder": "Author",
                            "renderingHints": {},
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "attributions",
                            "dataType": "list",
                            "description": "Attributions",
                            "editable": true,
                            "index": 15,
                            "inputType": "text",
                            "label": "Attributions",
                            "name": "attribution",
                            "placeholder": "Attributions",
                            "renderingHints": {},
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "copyright",
                            "dataType": "text",
                            "description": "Copyright",
                            "editable": true,
                            "index": 16,
                            "inputType": "text",
                            "label": "Copyright",
                            "name": "Copyright",
                            "placeholder": "Copyright",
                            "renderingHints": {},
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "copyrightYear",
                            "dataType": "number",
                            "description": "Year of Creation",
                            "editable": true,
                            "index": 17,
                            "inputType": "number",
                            "label": "Year of Creation",
                            "name": "Year of Creation",
                            "placeholder": "Enter Year of Creation",
                            "renderingHints": {},
                            "required": true,
                            "visible": true,
                            "validation": [
                                {
                                    "type": "min",
                                    "value": "4",
                                    "message": "Maximum length of the year should be 4"
                                },
                                {
                                    "type": "max",
                                    "value": "4",
                                    "message": "Minimum length of the year should be 4"
                                }
                            ]
                        },
                        {
                            "code": "license",
                            "dataType": "text",
                            "description": "License of the content",
                            "editable": true,
                            "index": 18,
                            "inputType": "licenses",
                            "label": "license",
                            "name": "license",
                            "placeholder": "license",
                            "renderingHints": {},
                            "required": true,
                            "visible": true
                        },
                        {
                            "code": "displayScore",
                            "dataType": "boolean",
                            "description": "Display Score",
                            "editable": true,
                            "inputType": "select",
                            "range": [
                                {
                                    "name": "Yes",
                                    "value": "true"
                                },
                                {
                                    "name": "No",
                                    "value": "false"
                                }
                            ],
                            "label": "Display Score",
                            "name": "Display Score",
                            "placeholder": "Display Score",
                            "renderingHints": {},
                            "required": false,
                            "visible": true,
                            "index": 19
                        },
                        {
                            "code": "maxAttempts",
                            "dataType": "number",
                            "description": "Max no of attempts",
                            "editable": true,
                            "inputType": "number",
                            "label": "Max no of attempts",
                            "name": "Max no of attempts",
                            "placeholder": "Max no of attempts",
                            "renderingHints": {},
                            "required": false,
                            "visible": true,
                            "index": 20
                        },
                        {
                            "code": "licenseterms",
                            "dataType": "text",
                            "description": "licenseterms",
                            "editable": true,
                            "index": 21,
                            "inputType": "label",
                            "label": "License Terms",
                            "name": "licenseterms",
                            "placeholder": "license",
                            "defaultValue": "By creating any type of content (resources, books, courses etc.) on DIKSHA, you consent to publish it under the Creative Commons License Framework. Please choose the applicable creative commons license you wish to apply to your content.",
                            "renderingHints": {
                                "value": {
                                    "video/x-youtube": "By linking or uploading YouTube videos on DIKSHA, you consent to publishing it as per the terms of the YouTube video license. DIKSHA accepts only videos with YouTube Standard License or Creative Commons License."
                                },
                                "class": "twelve wide field"
                            },
                            "required": false,
                            "visible": true
                        },
                        {
                          "code": "verticals",
                          "dataType": "text",
                          "description": "Verticals",
                          "editable": true,
                          "index": 12,
                          "inputType": "select",
                          "label": "Verticals",
                          "name": "Verticals",
                          "placeholder": "Choose from the list of verticals",
                          "renderingHints": {},
                          "range": [
                              "Nipun Bharat",
                              "Adult Education",
                              "Vocational Education",
                              "CWSN",
                              "Virtual Labs"
                          ],
                          "required": false,
                          "visible": true
                      },
                      {
                          "code": "programs",
                          "dataType": "text",
                          "description": "Programs",
                          "editable": true,
                          "index": 12,
                          "inputType": "select",
                          "label": "Programs",
                          "name": "Programs",
                          "placeholder": "Choose from the list of programs",
                          "renderingHints": {},
                          "range": [
                              "NISHTHA 2.0 (Secondary Level)",
                              "NISHTHA 3.0 (Nipun Bharat)",
                              "Chapter as a Course"
                          ],
                          "required": false,
                          "visible": true
                      }
                    ]
                },
                "created_on": "2020-05-15T09:45:23.623Z",
                "last_modified_on": "2021-09-20T07:21:36.510Z",
                "rootOrgId": "*"
            }
        },
        "ts": "2022-09-01T08:56:23.471Z",
        "ver": "1.0"
    },
    "content_resource_publish" : {
        "id": "api.form.read",
        "params": {
            "resmsgid": "7d8c5b85-344e-4d69-ad73-558e5c153956",
            "msgid": "8777e2c0-ebaf-4664-a3e5-8558ee5df794",
            "status": "successful"
        },
        "responseCode": "OK",
        "result": {
            "form": {
                "type": "content",
                "subtype": "resource",
                "action": "publish",
                "component": "*",
                "framework": "*",
                "data": {
                    "templateName": "defaultTemplate",
                    "action": "publish",
                    "fields": [
                        {
                            "contents": [
                                {
                                    "name": "Appropriateness",
                                    "checkList": [
                                        "No Hate speech, Abuse, Violence, Profanity",
                                        "No Sexual content, Nudity or Vulgarity",
                                        "No Discrimination or Defamation",
                                        "Is suitable for children"
                                    ]
                                },
                                {
                                    "name": "Content details",
                                    "checkList": [
                                        "Appropriate Title, Description",
                                        "Correct Board, Grade, Subject, Medium",
                                        "Appropriate tags such as Resource Type, Concepts",
                                        "Relevant Keywords"
                                    ]
                                },
                                {
                                    "name": "Usability",
                                    "checkList": [
                                        "Content plays correctly",
                                        "Can see the content clearly on Desktop and App",
                                        "Audio (if any) is clear and easy to understand",
                                        "No Spelling mistakes in the text",
                                        "Language is simple to understand"
                                    ]
                                }
                            ],
                            "title": "Please confirm that ALL the following items are verified (by ticking the check-boxes) before you can publish:"
                        }
                    ]
                },
                "created_on": "2020-05-15T09:45:57.076Z",
                "last_modified_on": "2020-05-28T12:16:02.044Z",
                "rootOrgId": "*"
            }
        },
        "ts": "2022-10-07T08:07:47.943Z",
        "ver": "1.0"
    },
    "content_questions_question-filter-view": {
        "id": "api.form.read",
        "params": {
            "resmsgid": "3e856718-3efe-487c-a6b4-f2cba70ab116",
            "msgid": "bda981dc-5001-4f6c-bd41-8ef6dc8fa452",
            "status": "successful"
        },
        "responseCode": "OK",
        "result": {
            "form": {
                "type": "content",
                "subtype": "questions",
                "action": "question-filter-view",
                "component": "*",
                "framework": "*",
                "data": {
                    "action": "question-filter-view",
                    "templateName": "filterMetaDataTemplate",
                    "fields": [
                        {
                            "code": "searchText",
                            "dataType": "text",
                            "description": " by question title",
                            "editable": true,
                            "inputType": "text",
                            "label": "Search",
                            "name": "Search",
                            "index": 0,
                            "placeholder": "Search by question title",
                            "renderingHints": {},
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "medium",
                            "dataType": "text",
                            "description": "",
                            "editable": true,
                            "index": 1,
                            "inputType": "select",
                            "label": "Language",
                            "name": "medium",
                            "placeholder": "Select Language",
                            "depends": [
                                "topic"
                            ],
                            "renderingHints": {},
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "level",
                            "dataType": "text",
                            "description": "Add Notes",
                            "editable": true,
                            "index": 2,
                            "inputType": "select",
                            "label": "Difficulty",
                            "name": "level",
                            "placeholder": "Select Level",
                            "range": [
                                "EASY",
                                "MEDIUM",
                                "DIFFICULT"
                            ],
                            "renderingHints": {},
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "questionType",
                            "dataType": "list",
                            "description": "Class",
                            "editable": true,
                            "index": 3,
                            "inputType": "multiselect",
                            "label": "Question Type",
                            "name": "Question Type",
                            "placeholder": "Question Type",
                            "range": [
                                "Multiple Choice Questions",
                                "Fill in the Blanks",
                                "Match the Following"
                            ],
                            "renderingHints": {},
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "gradeLevel",
                            "dataType": "list",
                            "description": "Class",
                            "editable": true,
                            "index": 4,
                            "inputType": "multiselect",
                            "label": "Grade Level",
                            "name": "Class",
                            "placeholder": "Select Class",
                            "depends": [
                                "topic"
                            ],
                            "renderingHints": {},
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "concepts",
                            "dataType": "list",
                            "description": "Choose a concept",
                            "editable": true,
                            "inputType": "conceptselector",
                            "label": "Concepts",
                            "name": "Concepts",
                            "placeholder": "Choose Concepts",
                            "renderingHints": {},
                            "required": false,
                            "visible": true,
                            "index": 5
                        },
                        {
                            "code": "topic",
                            "dataType": "list",
                            "description": "Choose a topics",
                            "editable": true,
                            "index": 6,
                            "inputType": "topicselector",
                            "label": "Topic",
                            "name": "Topic",
                            "placeholder": "Choose Topics",
                            "renderingHints": {},
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "myQuestions",
                            "dataType": "toggle",
                            "description": "My Questions",
                            "editable": true,
                            "inputType": "checkbox",
                            "label": "My Questions",
                            "name": "My Questions",
                            "placeholder": "My Questions",
                            "renderingHints": {},
                            "required": false,
                            "visible": true,
                            "index": 7
                        }
                    ]
                },
                "created_on": "2018-10-10T08:32:49.733Z",
                "last_modified_on": null,
                "rootOrgId": "*"
            }
        },
        "ts": "2022-09-01T08:56:44.073Z",
        "ver": "1.0"
    },
    "content_questions_question-meta-save": {
        "id": "api.form.read",
        "params": {
            "resmsgid": "e887460b-eff1-428e-bcb2-4223d899adcc",
            "msgid": "a9aca5eb-4a60-4d15-96d0-2970191c07a9",
            "status": "successful"
        },
        "responseCode": "OK",
        "result": {
            "form": {
                "type": "content",
                "subtype": "questions",
                "action": "question-meta-save",
                "component": "*",
                "framework": "*",
                "data": {
                    "templateName": "questionMetaDataTemplate",
                    "action": "question-meta-save",
                    "fields": [
                        {
                            "code": "name",
                            "visible": true,
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "name": "Title",
                            "description": "Title of the question",
                            "index": 0,
                            "inputType": "text",
                            "label": "Title",
                            "placeholder": "Enter the Title",
                            "required": true
                        },
                        {
                            "code": "description",
                            "visible": true,
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "name": "Description",
                            "description": "Brief description",
                            "index": 1,
                            "inputType": "textarea",
                            "label": "Description",
                            "placeholder": "Enter the Description",
                            "required": false
                        },
                        {
                            "code": "board",
                            "visible": true,
                            "depends": [
                                "medium",
                                "gradeLevel",
                                "subject",
                                "topic",
                                "learningOutcome"
                            ],
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "description": "board",
                            "index": 2,
                            "label": "Board/Syllabus",
                            "required": true,
                            "name": "Board/Syllabus",
                            "inputType": "select",
                            "placeholder": "Select Board/Syllabus"
                        },
                        {
                            "code": "medium",
                            "visible": true,
                            "depends": [
                                "gradeLevel",
                                "subject",
                                "topic",
                                "learningOutcome"
                            ],
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "description": "",
                            "index": 3,
                            "label": "Medium",
                            "required": true,
                            "name": "medium",
                            "inputType": "select",
                            "placeholder": "Select Medium"
                        },
                        {
                            "code": "gradeLevel",
                            "visible": true,
                            "depends": [
                                "subject",
                                "topic",
                                "learningOutcome"
                            ],
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "description": "Class",
                            "index": 4,
                            "label": "Grade Level",
                            "required": true,
                            "name": "Class",
                            "inputType": "multiselect",
                            "placeholder": "Select Grade"
                        },
                        {
                            "code": "subject",
                            "visible": true,
                            "depends": [
                                "topic",
                                "learningOutcome"
                            ],
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "description": "Add subjects",
                            "index": 5,
                            "label": "Subject",
                            "required": true,
                            "name": "subject",
                            "inputType": "select",
                            "placeholder": "Select Subject"
                        },
                        {
                            "code": "topic",
                            "visible": true,
                            "editable": true,
                            "dataType": "list",
                            "depends": [
                                "learningOutcome"
                            ],
                            "renderingHints": {},
                            "name": "Topic",
                            "description": "Choose a topics",
                            "index": 6,
                            "inputType": "topicselector",
                            "label": "Topic",
                            "placeholder": "Choose Topics",
                            "required": false
                        },
                        {
                            "code": "qlevel",
                            "visible": true,
                            "editable": true,
                            "dataType": "text",
                            "renderingHints": {},
                            "description": "Add Notes",
                            "index": 7,
                            "range": [
                                "EASY",
                                "MEDIUM",
                                "DIFFICULT"
                            ],
                            "label": "Level",
                            "required": true,
                            "name": "qlevel",
                            "inputType": "select",
                            "placeholder": "Select Level"
                        },
                        {
                            "code": "max_score",
                            "visible": true,
                            "editable": true,
                            "dataType": "number",
                            "renderingHints": {},
                            "description": "",
                            "index": 8,
                            "label": "Max Score",
                            "required": true,
                            "name": "max_score",
                            "inputType": "number",
                            "placeholder": "Enter the Max Score",
                            "validation": [
                                {
                                    "type": "min",
                                    "message": "",
                                    "value": "1"
                                }
                            ]
                        },
                        {
                            "code": "learningOutcome",
                            "visible": true,
                            "depends": [],
                            "editable": true,
                            "dataType": "list",
                            "renderingHints": {},
                            "description": "Learning Outcome",
                            "index": 9,
                            "label": "Learning Outcome",
                            "required": true,
                            "name": "Learning Outcome",
                            "inputType": "multiselect",
                            "placeholder": "Select LearningOutcome"
                        }
                    ]
                },
                "created_on": "2018-10-10T08:32:49.733Z",
                "last_modified_on": "2020-11-17T09:23:24.237Z",
                "rootOrgId": "*"
            }
        },
        "ts": "2022-09-01T08:57:21.613Z",
        "ver": "1.0"
    },
    "content_all_ownership": {
        "id": "api.form.read",
        "params": {
            "resmsgid": "1da232c4-5a83-4ec7-b889-693d9adc940e",
            "msgid": "ad3dd5e1-a3d4-4076-9a73-a3ba6af5b9a1",
            "status": "successful"
        },
        "responseCode": "OK",
        "result": {
            "form": {
                "type": "content",
                "subtype": "all",
                "action": "ownership",
                "component": "*",
                "framework": "*",
                "data": {
                    "templateName": "defaultTemplate",
                    "action": "ownership",
                    "fields": [
                        {
                            "ownershipType": [
                                "createdBy",
                                "createdFor"
                            ]
                        }
                    ]
                },
                "created_on": "2018-10-10T08:32:49.733Z",
                "last_modified_on": null,
                "rootOrgId": "*"
            }
        },
        "ts": "2022-09-01T08:58:01.849Z",
        "ver": "1.0"
    }
}
