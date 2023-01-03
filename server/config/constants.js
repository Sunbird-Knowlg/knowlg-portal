module.exports = {
    "API": {
       "CONTENT": {
           "UPLOAD" : "/action/content/v3/upload/:do_id",
           "UPLOAD_URL" : "/action/content/v3/upload/url/*",
           "HIERARCHY": "/action/content/v3/hierarchy/*",
           "CREATE": "/action/content/v3/create",
           "BUNDLE": "/action/content/v3/bundle",
           "UNLISTED_PUBLISH": "/action/content/v3/unlisted/publish/*",
           "REVIEW_COMMENTS": "/action/review/comment/v1/read/comment",
           "UPDATE": "/action/content/v3/update/*",
           "REVIEW": "/action/content/v3/review/*",
           "REJECT": "/action/content/v3/reject/*",
           "GENERAL": "/action/content/v3/*",
           "COLLABORATOR_UPDATE" : "/action/content/v1/collaborator/update/*"
       },
       "COLLECTION": {
            "IMPORT" : "/action/collection/v1/import/*"
       },
       "DIALCODE": {
           "SEARCH": '/action/dialcode/v3/search',
           "LINK": '/action/collection/v3/dialcode/link/*'
       },
       "ASSET": {
           "CREATE": '/action/asset/v1/create',
           "UPLAOD": '/action/asset/v1/upload/*'
       },
       "ASSESSMENT": "/action/assessment/v3/*",
       "CHANNEL": "/action/channel/v3/*",
       "FRAMEWORK": "/action/framework/v3/*",
       "COMPOSITE": "/action/composite/v3/*",
       "LANGUAGE": "/action/language/v3/*",
       "BUNDLE": "/action/content/v3/bundle/*",
       "ITEMS_UPDATE": "/action/assessment/v3/items/update/*",
       "ITEMS_CREATE": "/action/assessment/v3/items/create/*",
       "TELEMMETRY": "/action/data/v3/telemetry",
       "FORM_READ": "/action/data/v1/form/read",
       "USER_SEARCH": "/action/user/v1/search",
       "USER_ROLE": "/action/user/v1/role",
       "USERS": "/action/user/v1/read",
       "PREFIX": {
           "ACTION": "/action",
           "ASSETS": "/assets",
           "API": "/api"
       },
       "GENERAL": {
           "CONTENT_PREVIEW": "/content/preview/*",
           "CONTENT_PLUGINS": "/content-plugins/*",
           "ASSET_PUBLIC": "/assets/public/*",
           "GENERIC_EDITOR": "/generic-editor/*",
           "CONTENT_EDITOR": "/content-editor/*"
       }
    },
    "defaultUserId": '5a587cc1-e018-4859-a0a8-e842650b9d64'
}
